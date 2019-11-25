import React from 'react';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import Head from './Head';
import Nav from './Nav';
import FacebookMessenger from './FacebookMessenger';

const GlobaStyle = createGlobalStyle`
  body {
    /* background: #0082fa; */
    /* border: 10px solid #0082fa;
    margin:0;
    padding: 0; */
    background: linear-gradient(
    125.95deg,
    hsl(209, 100%, 49%) 0%,
    hsl(187, 71%, 50%) 50%,
    hsl(34, 100%, 50%) 100%
  );
  background-size: 300%;
  animation: overlay-animation 4s infinite alternate;
  @keyframes overlay-animation {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: calc(28px + (64 - 28) * ((100vw - 300px) / (1600 - 300)));
    margin: 8px;
  }
`;

const Page = styled.div`
  /* height: calc(100vh - 20px);
  width: calc(100vw - 20px); */
  min-height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  min-height: calc(var(--vh, 1vh) * 100);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background: white;
`;

const Content = styled.div`
  border-radius: 10px;

  background: white;
  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 150px auto;
  padding: 12px 36px;
`;

function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

const Layout = ({ title, description, url, ogImage, children }) => {
  if (process.browser) {
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

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh - 50}px`);
    // We listen to the resize event
    window.addEventListener(
      'resize',
      debounce(() => {
        // We execute the same script as before
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh - 50}px`);
      }, 400)
    );
  }
  return (
    <>
      <GlobaStyle />
      <Page>
        <Head
          title={title}
          description={description}
          url={url}
          ogImage={ogImage}
        />
        <Nav />
        <Content>{children}</Content>
        <FacebookMessenger pageId="330183527489356" />
      </Page>
    </>
  );
};

export default Layout;
