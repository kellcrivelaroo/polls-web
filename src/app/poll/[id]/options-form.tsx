import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Check, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { voteOnPoll } from '@/actions/vote-on-poll'
import InfoError from '@/components/common/info-error'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { IPoll } from './page'

const optionsFormSchema = z.object({
  optionId: z.string({ required_error: 'Escolha uma opção' }).uuid(),
})

type Option = z.infer<typeof optionsFormSchema>

const OptionsForm = ({ id: pollId, options }: IPoll) => {
  const router = useRouter()
  const form = useForm<Option>({
    resolver: zodResolver(optionsFormSchema),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form

  const { mutateAsync: vote, isPending } = useMutation({
    mutationFn: voteOnPoll,
    onSuccess: (id) => success(id),
    onError: () => toast.error('Ocorreu um erro, tente novamente mais tarde.'),
  })

  const submit = ({ optionId }: Option) => vote({ pollId, optionId })
  const success = (id: number) => {
    if (id === 0) {
      toast.warning(
        'Você já votou nessa opção, mas se desejar pode trocar seu voto.',
      )
    } else {
      toast.success('Voto computado com sucesso!')
      router.push(`/results/${pollId}`)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col">
        <FormField
          control={control}
          name="optionId"
          render={({ field }) => (
            <FormControl>
              <InfoError
                show={!!errors.optionId}
                message={errors.optionId?.message ?? ''}
                options={{
                  align: 'start',
                  alignOffset: -4,
                  sideOffset: 20,
                }}
              >
                <RadioGroup
                  className="mb-8 gap-4"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {options.map(({ id, title }, index) => (
                    <div
                      className="group flex items-center space-x-4 pl-4"
                      key={id}
                    >
                      <RadioGroupItem
                        value={id}
                        id={`option-${index}`}
                        className="transition-all group-hover:scale-110"
                      />
                      <Label
                        htmlFor={`option-${index}`}
                        className="cursor-pointer text-xl transition-all lg:text-2xl"
                      >
                        {title}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </InfoError>
            </FormControl>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="gap-2 text-lg"
          disabled={isPending}
        >
          <span className="relative">
            {isPending ? (
              <Loader2 className="absolute -left-7 top-1 h-5 w-5 animate-spin" />
            ) : (
              <Check className="absolute -left-7 top-1 h-5 w-5" />
            )}
            Votar
          </span>
        </Button>
      </form>
    </Form>
  )
}

export default OptionsForm
