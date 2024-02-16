'use client'
import { useQuery } from '@tanstack/react-query'

import { getPoll } from '@/actions/get-poll'
import PollNotFound from '@/components/common/poll-not-found'
import { Card, CardContent } from '@/components/ui/card'

import OptionsForm from './options-form'
import PollSkeleton from './poll-skeleton'

export interface IPoll {
  id: string
  title: string
  options: {
    id: string
    title: string
    votes: number
  }[]
}

interface PollProps {
  params: { id: string }
}

export default function Poll({ params: { id } }: PollProps) {
  const { data: poll, status } = useQuery<IPoll>({
    queryKey: [id],
    queryFn: () => getPoll({ pollId: id }),
    refetchOnWindowFocus: false,
    retry: 1,
  })

  if (status === 'pending') return <PollSkeleton />
  if (!poll || status === 'error') return <PollNotFound />

  return (
    <>
      <div className="custom-container">
        <Card className="relative overflow-hidden p-4">
          <span className="absolute inset-0 h-fit w-fit rounded-br-full bg-secondary py-1.5 pl-4 pr-6 text-secondary-foreground">
            Votar na enquete:
          </span>
          <h1 className="mx-4 mb-8 border-b-2 border-primary px-4 pb-2 pt-9 text-lg font-bold text-primary md:text-xl lg:text-2xl">
            {poll.title}
          </h1>
          <CardContent className="flex flex-col">
            <OptionsForm {...poll} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
