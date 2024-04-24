'use client'

import { ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
export const queryClient = new QueryClient()

export function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
