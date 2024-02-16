'use client'
import { Trophy } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  title: string
  votes: number
  maxVotes: number
}

const ProgressBar = ({ title, votes, maxVotes }: ProgressBarProps) => {
  const [progress, setProgress] = useState(votes)
  const [max, setMax] = useState(maxVotes)

  const winner = votes === maxVotes

  useEffect(() => {
    setProgress(votes)
    setMax(maxVotes)
  }, [votes, maxVotes])

  return (
    <>
      <span
        className={cn(
          'relative max-w-[100px] truncate text-ellipsis text-lg sm:max-w-[160px] lg:max-w-[220px] 2xl:max-w-[360px]',
          winner ? 'font-semibold text-primary' : 'font-medium',
        )}
      >
        {winner && (
          <div className="absolute -left-5 -top-1 animate-bounce">
            <Trophy className="h-5 w-5 -rotate-[30deg] animate-shake text-yellow-600 dark:text-yellow-400" />
          </div>
        )}
        <span className="block truncate">{title}</span>
      </span>

      <Progress value={progress} max={max} />
      <Badge
        className={cn(
          'flex aspect-square items-center justify-center font-mono text-base',
          !winner ? 'bg-secondary text-secondary-foreground' : '',
        )}
      >
        {votes}
      </Badge>
    </>
  )
}

export default ProgressBar
