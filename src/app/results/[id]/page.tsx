'use client'
import { useQuery } from '@tanstack/react-query'
import { BarChart2, ListPlus, UndoDot } from 'lucide-react'
import Link from 'next/link'

import { getPoll } from '@/actions/get-poll'
import { pubEnv } from '@/app/env.public'
import useCopyLink from '@/app/hooks/useCopyLink'
import useWebsocket from '@/app/hooks/useWebsocket'
import PollNotFound from '@/components/common/poll-not-found'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

import HelperCard from './helper-card'
import ProgressBar from './progress-bar'
import ResultsSkeleton from './results-skeleton'

interface IResults {
  id: string
  title: string
  options: {
    id: string
    title: string
    votes: number
  }[]
  maxVotes: number
}

interface ResultsProps {
  params: { id: string }
}

export default function Results({ params: { id } }: ResultsProps) {
  const { connected } = useWebsocket({ pollId: id })
  let refetchInterval = connected ? 0 : 5000

  const pollLink = `${pubEnv.BASE_URL}/poll/${id}`
  const { copyLink } = useCopyLink({ link: pollLink })

  const { data: results, status } = useQuery<IResults>({
    queryKey: [id],
    queryFn: () => getPoll({ pollId: id }),
    refetchOnWindowFocus: false,
    refetchInterval,
    retry: 1,
  })

  if (status === 'pending') return <ResultsSkeleton />
  if (!results || status === 'error') return <PollNotFound />

  const { title, options, maxVotes } = results

  return (
    <div className="custom-container max-w-[100vw]">
      <Card className="relative pt-12 lg:p-4 lg:pt-16">
        <HelperCard />

        <h1 className="mb-8 ml-1 block truncate text-ellipsis text-wrap px-4 text-xl font-bold text-primary md:text-2xl lg:text-3xl">
          {title}
        </h1>
        <CardContent className="flex flex-col">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
            {options.map(({ id, title, votes }) => (
              <ProgressBar
                key={id}
                title={title}
                votes={votes}
                maxVotes={maxVotes}
              />
            ))}
          </div>

          <Separator className="mx-auto mb-5 mt-8 max-w-[95%]" />

          <div className="flex flex-col justify-center gap-3 md:flex-row lg:gap-4">
            <Link
              href={pollLink}
              className={cn(buttonVariants(), 'gap-2 lg:text-base')}
            >
              <UndoDot className="h-5 w-5" />
              Novo voto
            </Link>
            <Button
              type="button"
              onClick={copyLink}
              className="gap-2 lg:text-base"
            >
              <BarChart2 className="h-5 w-5" />
              Compartilhar enquete
            </Button>
            <Link
              href="/"
              className={cn(buttonVariants(), 'gap-2 lg:text-base')}
            >
              <ListPlus className="h-5 w-5" />
              Nova enquete
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
