import { cn } from '@/lib/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-300/80 dark:bg-muted',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
