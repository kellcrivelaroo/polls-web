import { Globe } from 'lucide-react'

import HelperCard from './helper-card'

const ResultsHeader = () => {
  return (
    <>
      <span className="my-1 flex items-center px-4 text-muted-foreground md:text-lg lg:text-xl">
        <Globe className="mb-1 mr-1 h-5 w-5" /> Resultado em tempo real
        <HelperCard />:
      </span>
    </>
  )
}

export default ResultsHeader
