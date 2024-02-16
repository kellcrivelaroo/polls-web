import { Suspense } from 'react'

import { Card, CardContent } from '@/components/ui/card'

import Actions from './actions'

export default function NewPoll() {
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
          <Suspense fallback={null}>
            <Actions />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}
