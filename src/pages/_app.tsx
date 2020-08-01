import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as Sentry from '@sentry/node'
import theme from '../components/Theme'
import { AnimatePresence } from 'framer-motion'

import '../styles/index.css'
/**
 *
 *  This is for Google Analytics
 * */
import * as gtag from '../lib/gtag'
import Router from 'next/router'
import { AlertProvider } from '../context/AlertContext'
import { LanguageProvider } from '../context/LanguageContext'

if (process.env.NODE_ENV === 'production') {
  Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))
  Sentry.init({
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

class MyApp extends App {
  err: any
  componentDidCatch(error, errorInfo) {
    // console.log('CUSTOM ERROR HANDLING', error)
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, pageProps, router } = this.props
    // Workaround for https://github.com/zeit/next.js/issues/8592
    const { err } = this.props
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
}

export default MyApp
