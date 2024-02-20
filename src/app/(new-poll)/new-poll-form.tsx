'use client'
import autoAnimate from '@formkit/auto-animate'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import useNewPoll from '@/app/hooks/useNewPoll'
import InfoError from '@/components/common/info-error'
import { cn } from '@/lib/utils'

import { Button } from '../../components/ui/button'
import { Form } from '../../components/ui/form'
import { Input } from '../../components/ui/input'

const newPollFormSchema = z.object({
  title: z.string().min(1, { message: 'Qual é o tema da enquete?' }),
  mandatoryOptions: z
    .array(z.string().min(1, { message: 'Opção obrigatória' }))
    .length(2),
  otherOptions: z.array(z.string()),
})

export type NewPollForm = z.infer<typeof newPollFormSchema>

const NewPollForm = () => {
  const form = useForm<NewPollForm>({
    resolver: zodResolver(newPollFormSchema),
    reValidateMode: 'onChange',
  })
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = form

  const [options, setOptions] = useState([''])
  const animate = useRef(null)
  const { submit, loading } = useNewPoll()

  const question = watch('title')

  useEffect(() => {
    animate.current && autoAnimate(animate.current)
  }, [animate])

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
        <InfoError
          show={!!errors.title}
          message={errors.title?.message ?? ''}
          options={{ alignOffset: 40 }}
        >
          <Input
            type="text"
            placeholder="Digite aqui sua questão"
            className={cn(
              `mb-2 rounded-none border-b-2 border-l-0 border-r-0 border-t-0 bg-transparent text-lg
          transition-colors focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-xl`,
              question?.length
                ? 'border-primary/50'
                : 'border-muted-foreground/50',
            )}
            {...register('title')}
          />
        </InfoError>
        <div className="flex flex-grow flex-col gap-5 px-1" ref={animate}>
          <div className="relative">
            <span
              className="pointer-events-none absolute inset-0 left-3 top-[52%] flex w-fit -translate-y-[50%] items-center
          font-medium text-primary"
            >
              1 -
            </span>
            <Input
              type="text"
              placeholder={`Opção 1`}
              className="pl-10"
              {...register(`mandatoryOptions.0`)}
            />
          </div>
          {errors.mandatoryOptions?.length && errors?.mandatoryOptions[0] && (
            <small className="-mb-2 -mt-4 ml-4 font-medium text-destructive">
              {errors.mandatoryOptions[0]?.message}
            </small>
          )}

          <div className="relative">
            <span
              className="pointer-events-none absolute inset-0 left-3 top-[52%] flex w-fit -translate-y-[50%] items-center
          font-medium text-primary"
            >
              2 -
            </span>
            <Input
              type="text"
              placeholder={`Opção 2`}
              className="pl-10"
              {...register(`mandatoryOptions.1`)}
            />
          </div>
          {errors.mandatoryOptions?.length && errors?.mandatoryOptions[1] && (
            <small className="-mb-2 -mt-4 ml-4 font-medium text-destructive ">
              {errors.mandatoryOptions[1]?.message}
            </small>
          )}

          {options.map((_, index) => (
            <div key={index} className="relative">
              <span
                className="pointer-events-none absolute inset-0 left-3 top-[52%] flex w-fit -translate-y-[50%] items-center
          font-medium text-primary"
              >
                {index + 3} -
              </span>
              <Input
                type="text"
                placeholder={`Opção ${index + 3}`}
                className="pl-10"
                onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                  const extraOptions = form.getValues().otherOptions
                  const allFilled = extraOptions
                    .slice(0, extraOptions.length - 1)
                    .every((option) => option.trim() !== '')

                  if (e.currentTarget?.value !== '' && allFilled) {
                    if (options.length <= index + 1) {
                      setOptions([...options, ''])
                    }
                  }
                }}
                {...register(`otherOptions.${index}`)}
              />
            </div>
          ))}

          <Button
            type="submit"
            size="sm"
            className="ml-auto mr-1 gap-2 px-12 py-2 text-base font-bold transition-all lg:text-lg"
            disabled={loading}
          >
            <span className="relative">
              {loading && (
                <Loader2 className="absolute -left-7 top-px h-5 w-5 animate-spin lg:top-1" />
              )}
              Criar enquete
            </span>
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default NewPollForm
