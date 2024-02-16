'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

import { queryClient } from '@/lib/react-query'

const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
