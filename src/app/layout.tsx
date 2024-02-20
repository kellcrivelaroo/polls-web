import './globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Toaster } from 'sonner'

import Footer from '@/components/common/footer'
import GlowingBackground from '@/components/common/glowing-background'
import Header from '@/components/common/header'
import ReactQueryProvider from '@/components/providers/react-query-provider'
import ThemeProvider from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'

export const fontSans = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Polls',
  description: 'Generated your own polls',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'relative overflow-x-hidden font-sans font-medium antialiased dark:font-normal',
          fontSans.variable,
        )}
      >
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
              <Header />
              {children}
              <Footer />
            </div>
            <GlowingBackground />
            <Toaster
              richColors
              position="top-center"
              toastOptions={{
                classNames: {
                  title: 'text-base lg:text-lg ml-2',
                },
              }}
            />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
