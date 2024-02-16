import { FolderKanban, GithubIcon, Instagram, Linkedin } from 'lucide-react'

import SocialIcon from './social-icon'

const socialMedias = [
  {
    id: 0,
    title: 'Github',
    icon: GithubIcon,
    href: 'https://github.com/kellcrivelaroo',
  },
  {
    id: 1,
    title: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/kellcrivelaro',
  },
  {
    id: 2,
    title: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/kellcrivelaro',
  },
  {
    id: 3,
    title: 'Portfólio',
    icon: FolderKanban,
    href: 'https://kellcrivelaro.com.br',
  },
]

export type Social = (typeof socialMedias)[0]

const Footer = () => {
  return (
    <footer className="border-t bg-card shadow dark:bg-card">
      <div className="container flex items-center justify-center gap-6 py-5">
        {socialMedias.map((social) => (
          <SocialIcon key={social.id} social={social} />
        ))}
      </div>
    </footer>
  )
}

export default Footer
