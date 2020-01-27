import React, { useEffect } from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = ({ title, description, url, ogImage }) => (
  /* useEffect(() => {
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l != 'dataLayer' ? `&l=${l}` : '';
      j.async = true;
      j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-5C4VKCP');
  }); */

  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || 'Biscui.Tech'}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/touch-icon.png" />
    <link rel="apple-touch-icon" href="/touch-icon.png" />
    <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="shortcut icon" href="/favicon.svg" />
    <meta property="og:url" content={url || defaultOGURL} />
    <meta property="og:title" content={title || 'Biscui.Tech'} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <meta name="twitter:site" content={url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="stylesheet" href="/inter.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:100,200,400&display=swap"
      rel="preconnect" as="font" crossOrigin="anonymous"
    />
    <link rel="preconnect" href="https://www.google-analytics.com" />
    <link rel="preconnect" href="https://www.facebook.com" />
    <link rel="preconnect" href="https://connect.facebook.net" />
    <link rel="preconnect" href="https://www.googletagmanager.com" />
    {/* <script
      src="https://browser.sentry-cdn.com/5.9.1/bundle.min.js"
      integrity="sha384-/x1aHz0nKRd6zVUazsV6CbQvjJvr6zQL2CHbQZf3yoLkezyEtZUpqUNnOLW9Nt3v"
      crossOrigin="anonymous"

    /> */}
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
