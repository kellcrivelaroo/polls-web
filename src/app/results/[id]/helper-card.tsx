import { Globe, HelpCircle } from 'lucide-react'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const HelperCard = () => {
  return (
    <span
      className="absolute inset-0 flex h-fit w-fit items-center rounded-br-full bg-secondary py-1.5 pl-4 
    pr-6 text-sm text-secondary-foreground md:text-base xl:text-lg"
    >
      <Globe className="mb-1 mr-1 h-5 w-5 animate-pulse" /> Resultado em
      <HoverCard openDelay={150} closeDelay={150}>
        <HoverCardTrigger className="hidden cursor-default items-center pl-2 lg:flex">
          <span className="underline underline-offset-2">tempo real</span>
          <HelpCircle className="mx-0.5 h-4 w-4 -translate-y-1" />
        </HoverCardTrigger>
        <HoverCardContent className="text-wrap text-base">
          Os dados são atualizados em tempo real via WebHook e, quando
          necessário, via Polling (caso WebSockets estejam bloqueados pelo
          navegador), garantindo uma experiência fluida aos usuários.
        </HoverCardContent>
      </HoverCard>
      <Popover>
        <PopoverTrigger className="flex cursor-default items-center pl-1 lg:hidden">
          <span className="underline underline-offset-2">tempo real</span>
          <HelpCircle className="mx-0.5 h-4 w-4 -translate-y-1" />
        </PopoverTrigger>
        <PopoverContent className="text-wrap text-base">
          Os dados são atualizados em tempo real via WebHook e, quando
          necessário, via Polling (caso WebSockets estejam bloqueados pelo
          navegador), garantindo uma experiência fluida aos usuários.
        </PopoverContent>
      </Popover>
    </span>
  )
}

export default HelperCard
