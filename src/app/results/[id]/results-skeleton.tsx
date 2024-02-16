import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

import HelperCard from './helper-card'

const ResultsSkeleton = () => {
  return (
    <div className="custom-container">
      <Card className="relative pt-12 lg:p-4 lg:pt-16">
        <HelperCard />
        <div className="px-4 pt-2 lg:px-6">
          <Skeleton className="mb-6 h-8 lg:h-12 lg:w-[80%]" />
          <div className="flex flex-col gap-4 px-2">
            {[1, 2, 3].map((_, index) => (
              <Skeleton key={index} className="h-8 w-full lg:h-7" />
            ))}
          </div>

          <Separator className="mx-auto mb-5 mt-8 max-w-[95%] lg:mt-7" />

          <div className="mb-6 flex flex-col justify-center gap-3 px-1 md:flex-row lg:mb-5 lg:gap-4">
            <Skeleton className="h-10 lg:h-11 lg:w-48" />
            <Skeleton className="h-10 lg:h-11 lg:w-64" />
            <Skeleton className="h-10 lg:h-11 lg:w-44" />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ResultsSkeleton
