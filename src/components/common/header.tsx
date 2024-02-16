import Link from 'next/link'

import { ThemeToggle } from './theme-toggle-button'

const Header = () => {
  return (
    <header className="border-b bg-card shadow dark:bg-card">
      <div className="container flex items-center justify-between py-5">
        <Link
          href="/"
          className="texto-accent-foreground text-xl font-bold transition-all hover:scale-105 2xl:text-3xl"
        >
          Polls
        </Link>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
