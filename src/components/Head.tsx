import React, { useEffect } from 'react'
import NextHead from 'next/head'
import useOpenGraph from '../lib/useOpenGraph'
import { defaultDescription, defaultOGImage, defaultOGURL } from '../../config'

const Head = ({ title, description, og }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
    />
    <title>{title || 'Biscui.Tech'}</title>
    <meta name="description" content={description || defaultDescription} />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/android-icon-192x192.png"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="keywords" content="Keywords" />
    <meta property="og:url" content={og.url || `${defaultOGURL}`} />
    <meta property="og:type" content={og.type || 'website'} />
    <meta property="og:title" content={title || og.title || 'Biscui.Tech'} />
    <meta
      property="og:description"
      content={og.description || description || defaultDescription}
    />
    <meta name="twitter:site" content={og.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={og.image || defaultOGImage} />
    <meta property="og:image" content={og.image || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;1,400&family=Open+Sans:wght@300&display=swap"
      rel="stylesheet"
      crossOrigin="anonymous"
    />
    <link href="/static/inter.css" rel="stylesheet" />
  </NextHead>
)

export default Head
