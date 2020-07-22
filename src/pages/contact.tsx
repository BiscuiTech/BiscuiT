import React from 'react'
import Head from 'next/head'
import { getInitialLocale } from '../translations/getInitialLocale'
import { useRouter } from 'next/router'

const RootContactPage: React.FC = () => {
  const router = useRouter()
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}${router.asPath}`)
  })

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  )
}

export default RootContactPage
