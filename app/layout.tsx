import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './context/provider'
import { AuthProvider } from './context/AuthContext'
import { DaftarOnlineProvider } from './context/DaftarOnlineContext'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AZIZ ONLINE',
  description: 'AZIZ ONLINE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthProvider>
            <DaftarOnlineProvider>
              {children}
            </DaftarOnlineProvider>
          </AuthProvider>
        </Providers>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0" />
      </body>
    </html>
  )
}
