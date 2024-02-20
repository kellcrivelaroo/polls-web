import { Card, CardContent, CardHeader } from '@/components/ui/card'

import NewPollForm from './new-poll-form'

export default function Home() {
  return (
    <div className="custom-container">
      <Card>
        <CardHeader>
          <h1 className="pl-2 text-2xl font-bold text-primary lg:text-3xl">
            Crie sua enquete!
          </h1>
        </CardHeader>
        <CardContent>
          <NewPollForm />
        </CardContent>
      </Card>
    </div>
  )
}
