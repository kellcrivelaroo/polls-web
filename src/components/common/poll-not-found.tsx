import Image from 'next/image'
import Link from 'next/link'

import ghost from '@/../public/ghost.png'
import { Card, CardContent } from '@/components/ui/card'

const PollNotFound = () => {
  return (
    <div className="custom-container">
      <Card className="pt-8 lg:p-4 lg:pt-8">
        <CardContent className="flex flex-col items-center gap-5 md:flex-row lg:gap-10">
          <Image
            src={ghost}
            alt="Fantasma"
            width={ghost.width / 1.8}
            height={ghost.height / 1.8}
            className="max-h-[172px] object-contain invert dark:invert-0 md:basis-1/4 lg:pl-2 2xl:pl-8"
          />
          <div>
            <h1 className="mb-3 text-center text-xl font-medium text-primary md:text-start lg:text-3xl">
              Enquete não encontrada
            </h1>
            <p className="text-center text-muted-foreground md:text-start lg:text-lg">
              Verifique se link está correto ou{' '}
              <Link
                href="/"
                className="text-primary underline hover:text-primary/80"
              >
                <br className="md:hidden" />
                crie uma nova enquete.
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PollNotFound
