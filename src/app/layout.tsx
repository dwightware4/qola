import type { MetadataT, ReactNodeT, ReadonlyT } from '@/types'

import { Inter } from 'next/font/google'
import {
  APP_NAME,
  LogRocketBridge,
  MOBILE_BROWSER_THEME,
  NavigationProgressBar,
  Providers,
} from '@/core'

import { cn } from '@/utils'

import '@mantine/core/styles.css'
import '@/core/theme/globals.css'

const font = Inter({ subsets: ['latin'] })

export const viewport = { maximumScale: 1 } // Disable auto-zoom on mobile Safari

export const metadata: MetadataT = {
  metadataBase: process.env.NEXT_PUBLIC_URL ? new URL(process.env.NEXT_PUBLIC_URL) : undefined,
  title: {
    default: `${APP_NAME}360 - Get Message-Market Fit in 10 Days`,
    template: `%s – ${APP_NAME}`,
  },
  description: 'Get Message-Market Fit in 10 Days',
  openGraph: {
    title: APP_NAME,
    description: 'Get Message-Market Fit in 10 Days',
    images: ['/images/social-card.png'],
  },
  twitter: {
    title: APP_NAME,
    card: 'summary_large_image',
    description: 'Get Message-Market Fit in 10 Days',
    images: ['/images/social-card.png'],
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: '32x32' },
      { url: '/icons/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icons/apple-touch-icon.png',
  },
}

type PropsT = ReadonlyT<{
  children: ReactNodeT
}>

export const RootLayout = ({ children }: PropsT) => (
  <html lang="en" suppressHydrationWarning className="h-full">
    <head>
      {/* eslint-disable-next-line react-dom/no-dangerously-set-innerhtml */}
      <script dangerouslySetInnerHTML={{ __html: MOBILE_BROWSER_THEME }} />
    </head>

    <body className={cn('h-full antialiased', font.className)}>
      <Providers>
        <LogRocketBridge />

        {/* This sets the background and text color for the whole app (including dark mode) */}
        <div className="dark:bg-black text-main-500 min-h-screen bg-white dark:text-white">
          <NavigationProgressBar />

          {children}
        </div>
      </Providers>
    </body>
  </html>
)

export default RootLayout
