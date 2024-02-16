import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const PollSkeleton = () => {
  return (
    <div className="custom-container">
      <Card className="relative overflow-hidden p-4">
        <span className="absolute inset-0 h-fit w-fit rounded-br-full bg-secondary py-1.5 pl-4 pr-6 text-secondary-foreground">
          Votar na enquete:
        </span>
        <Skeleton className="mx-4 mb-8 mt-9 h-16" />
        <div className="px-4">
          <div className="mb-6 flex flex-col gap-4 px-4">
            {[1, 2, 3].map((_, index) => (
              <Skeleton key={index} className="h-8 w-full" />
            ))}
          </div>
          <Skeleton className="mx-2 mb-6 h-12" />
        </div>
      </Card>
    </div>
  )
}

export default PollSkeleton
