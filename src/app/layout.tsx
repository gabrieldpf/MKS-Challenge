import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { QueryProvider } from '@/context/query-context'
import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/cart-context'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'MKS Sistema Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <CartProvider>
          <QueryProvider>
            <StyledComponentsRegistry>
              <Header />
              {children}
              <Footer />
            </StyledComponentsRegistry>
          </QueryProvider>
        </CartProvider>
      </body>
    </html>
  )
}
