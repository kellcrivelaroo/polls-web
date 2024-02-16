import { HelpCircle } from 'lucide-react'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

const HelperCard = () => {
  return (
    <HoverCard openDelay={150} closeDelay={150}>
      <HoverCardTrigger>
        <HelpCircle className="mx-0.5 h-4 w-4 -translate-y-1 cursor-pointer" />
      </HoverCardTrigger>
      <HoverCardContent className="text-base">
        Os dados são atualizados em tempo real via WebHooks e, quando
        necessário, via Polling (caso WebSockets estejam bloqueados pelo
        navegador), garantindo uma experiência fluida aos usuários.
      </HoverCardContent>
    </HoverCard>
  )
}

export default HelperCard
