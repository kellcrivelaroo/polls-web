import Link from 'next/link'

import { ThemeToggle } from './theme-toggle-button'

const Header = () => {
  return (
    <header className="z-10 border-b bg-card/40 backdrop-blur-lg dark:bg-card/70">
      <div className="container flex items-center justify-between py-3">
        <Link
          href="/"
          className="text-xl font-bold text-accent-foreground transition-all hover:scale-105 2xl:text-3xl"
        >
          <div className="logo bg-gradient-to-bl from-primary to-green-800 py-3 pl-4 pr-5 lg:py-5 lg:pl-5 lg:pr-7">
            <span className="text-gray-200 dark:text-foreground">Polls</span>
          </div>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
