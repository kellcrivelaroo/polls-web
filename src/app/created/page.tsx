'use client'
import { ArrowUpRightFromSquare, BarChart2, Copy, ListPlus } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

import { pubEnv } from '../env.public'
import useCopyLink from '../hooks/useCopyLink'

export default function NewPoll() {
  const params = useSearchParams()
  const pollId = params.get('pollId')

  const pollLink = `${pubEnv.BASE_URL}/poll/${pollId}`
  const resultsLink = `${pubEnv.BASE_URL}/results/${pollId}`

  const { copyLink } = useCopyLink({ link: pollLink })

  return (
    <div className="custom-container">
      <Card>
        <h1 className="mb-4 p-4 px-6 text-lg font-bold text-primary md:text-xl lg:text-2xl">
          Enquete criada com sucesso!
        </h1>
        <CardContent>
          <h2 className="mb-2 pl-2 text-sm lg:text-base">
            Compartilhe o link da enquete:
          </h2>
          <div className="relative">
            <Input
              value={pollLink}
              className="text-muted-foreground disabled:cursor-auto dark:text-muted-foreground"
              onFocus={(event) => event.target.select()}
              readOnly
            />
            <Button
              className="absolute right-0 top-0 mx-auto min-w-[40px] gap-2 rounded-l-none border border-border 
              px-0 md:min-w-[156px]"
              variant="default"
              onClick={copyLink}
            >
              <Copy className="h-5 w-5" />
              <span className="hidden text-base md:block">Copiar link</span>
            </Button>
          </div>

          <Separator className="mx-auto mb-5 mt-8 max-w-[95%]" />

          <div className="mb-1 flex flex-col justify-center gap-3 md:flex-row md:gap-6">
            <Link
              href={pollLink}
              className={cn(buttonVariants(), 'gap-2 lg:text-base')}
            >
              <ArrowUpRightFromSquare className="h-5 w-5" />
              Visitar enquete
            </Link>
            <Link
              href={resultsLink}
              className={cn(buttonVariants(), 'gap-2 lg:text-base')}
            >
              <BarChart2 className="h-5 w-5" />
              Ver resultados
            </Link>
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
