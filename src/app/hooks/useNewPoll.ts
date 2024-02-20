import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { newPoll } from '@/actions/new-poll'

import { NewPollForm } from '../(new-poll)/new-poll-form'
import useHeatingDb from './useHeatingDb'

const useNewPoll = () => {
  const router = useRouter()
  const { isHeating } = useHeatingDb()

  const { mutateAsync: createPoll, isPending } = useMutation({
    mutationFn: newPoll,
    onSuccess: (id) => success(id),
    onError: (error) => console.error(error),
  })

  const submit = async (data: NewPollForm) => {
    let options = [...data.mandatoryOptions]
    if (data.otherOptions.some((option) => option !== '')) {
      const fiteredOptions = data.otherOptions.filter((option) => option !== '')
      options = [...options, ...fiteredOptions]
    }
    const newPollArray = {
      title: data.title,
      options,
    }

    isHeating(createPoll(newPollArray))
  }
  const success = (id: string) => router.push(`/created?pollId=${id}`)

  return { submit, loading: isPending }
}

export default useNewPoll
