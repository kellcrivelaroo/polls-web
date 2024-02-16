import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { Social } from './footer'

interface SocialIconProps {
  social: Social
}

const SocialIcon = ({ social }: SocialIconProps) => {
  const { href, icon: Icon, title } = social
  return (
    <HoverCard openDelay={100} closeDelay={50}>
      <HoverCardTrigger asChild>
        <a
          href={href}
          title={title}
          target="_blank"
          className="text-secondary-foreground transition-colors duration-300 hover:text-primary"
        >
          <Icon />
        </a>
      </HoverCardTrigger>
      <HoverCardContent sideOffset={10} className="w-fit px-3 py-1">
        {title}
      </HoverCardContent>
    </HoverCard>
  )
}

export default SocialIcon
