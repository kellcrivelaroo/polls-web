import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const PollSkeleton = () => {
  return (
    <div className="custom-container">
      <Card className="pt-4 lg:p-4 lg:pt-6">
        <div className="px-4">
          <Skeleton className="mb-8 h-16" />
          <div className="mb-6 flex flex-col gap-4 px-4">
            {[1, 2, 3].map((item, index) => (
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
