import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'

interface CardOptions {
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined
  align?: 'center' | 'start' | 'end' | undefined
  alignOffset?: number | undefined
  sideOffset?: number | undefined
}

const defaultOptions: CardOptions = {
  side: 'top',
  align: 'end',
  alignOffset: 8,
}

interface InfoErrorProps {
  show: boolean
  message: string
  options?: CardOptions
  children: ReactNode
}

const InfoError = ({
  show,
  message,
  options = defaultOptions,
  children,
}: InfoErrorProps) => {
  const contentProps = { ...defaultOptions, ...options }
  const arrowSide = contentProps.align === 'start' ? 'left' : 'right'

  return (
    <HoverCard openDelay={150} closeDelay={150} open={show}>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent
        className="relative w-fit px-4 py-2 text-sm text-secondary-foreground dark:bg-[#201e1c] dark:shadow-muted/50 lg:text-base"
        {...contentProps}
      >
        {message}
        <div
          className={cn(
            'clip-polygon absolute -bottom-3 h-[24px] w-[14px] bg-border',
            arrowSide === 'right' ? 'right-[15px]' : 'left-[15px]',
          )}
        />
        <div
          className={cn(
            'clip-polygon absolute -bottom-2.5 right-4 h-5 w-3 bg-popover dark:bg-[#201e1c]',
            arrowSide === 'right' ? 'right-[15px]' : 'left-[16px]',
          )}
        />
      </HoverCardContent>
    </HoverCard>
  )
}

export default InfoError
