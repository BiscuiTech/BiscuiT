import * as Sentry from '@sentry/node'
import { AnimatePresence } from 'framer-motion'
import Router from 'next/router'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../components/Theme'
import { AlertProvider } from '../context/AlertContext'
import { LanguageProvider } from '../context/LanguageContext'
/**
 *
 *  This is for Google Analytics
 * */
import * as gtag from '../lib/gtag'
import '../styles/index.css'
import { init } from '../utils/sentry'
init()

if (process.env.NODE_ENV === 'production') {
  Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))
  Sentry.init({
    enabled: process.env.NODE_ENV === 'production',
    dsn: 'https://c0e5b834500d45b88fb648ccf7c489bf@sentry.io/1838052',
  })
}

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

export async function reportWebVitals(metric) {
  // These metrics can be sent to any analytics service
  await fetch('/api/web-vitals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(metric),
  })
}

export default function App({ Component, pageProps, err, router }) {
  const modifiedPageProps = { ...pageProps, err }

  return (
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <LanguageProvider localization={pageProps.localization}>
            <Component {...modifiedPageProps} key={router.route} />
          </LanguageProvider>
        </AnimatePresence>
      </AlertProvider>
    </ThemeProvider>
  )
}
