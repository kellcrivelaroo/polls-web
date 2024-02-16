'use client'
import { useQuery } from '@tanstack/react-query'
import { BarChart2, Globe, ListPlus, UndoDot } from 'lucide-react'
import Link from 'next/link'
import { Fragment } from 'react'

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
import ResultsHeader from './results-header'
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

  const resultsLink = `${pubEnv.BASE_URL}/results/${id}`
  const pollLink = `${pubEnv.BASE_URL}/poll/${id}`
  const { copyLink } = useCopyLink({ link: resultsLink })

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
    <div className="custom-container">
      <Card className="pt-4 lg:p-4">
        <ResultsHeader />

        <h1 className="mb-8 ml-1 px-4 text-xl font-bold text-primary md:text-2xl lg:text-3xl">
          {title}
        </h1>
        <CardContent className="flex flex-col">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
            {options.map(({ id, title, votes }) => (
              <Fragment key={id}>
                <ProgressBar title={title} votes={votes} maxVotes={maxVotes} />
              </Fragment>
            ))}
          </div>

          <Separator className="mx-auto mb-5 mt-8 max-w-[95%]" />

          <div className="flex flex-col justify-center gap-3 md:flex-row lg:gap-4">
            <Link
              href="/"
              className={cn(buttonVariants(), 'gap-2 lg:text-base')}
            >
              <ListPlus className="h-5 w-5" />
              Nova enquete
            </Link>
            <Button
              type="button"
              onClick={copyLink}
              className="gap-2 lg:text-base"
            >
              <BarChart2 className="h-5 w-5" />
              Compartilhar resultados
            </Button>
            <Link
              href={pollLink}
              className={cn(buttonVariants(), 'gap-2 lg:text-base')}
            >
              <UndoDot className="h-5 w-5" />
              Mudar voto
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
