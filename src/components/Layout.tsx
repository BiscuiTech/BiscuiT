import React from 'react';
/* import { Html } from 'next/document' */
/* import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react'; */
import styled, { createGlobalStyle } from 'styled-components';
import Head from './Head';
import Header from './Header';
import Navigation from './Navigation';

const GlobaStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
    width: 100%;
    height: 100%;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: calc(28px + (54 - 28) * ((100vw - 300px) / (1600 - 300)));
    margin: 0;
    padding: 6px 12px;
  }
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #F2F2F2 0%, #FFFFFF 100%);

  .skip-link{
    position: absolute;
    top: -40px;
    left: 0;
    color: white;
    padding: 8px;
    z-index: 100;
    &:focus{
      top: 0;
    }
  }
`;

const Content = styled.main`

`;

function debounce(func, wait, immediate?) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

const Layout = ({ title, description, /* url, ogImage,  */ children }) => {
  if (process.browser) {
    // @ts-ignore
    /* if (Sentry !== undefined) {
      LogRocket.init('7agr7w/biscuitech');
      // @ts-ignore
      Sentry.init({
        dsn: 'https://c0e5b834500d45b88fb648ccf7c489bf@sentry.io/1838052',
        beforeSend(event, hint) {
          // Check if it is an exception, and if so, show the report dialog
          if (event.exception) {
            // plugins should also only be initialized when in the browser
            setupLogRocketReact(LogRocket);
            // @ts-ignore
            Sentry.showReportDialog({ eventId: event.event_id });
          }
          return event;
        },
      });

    } */
    /* (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const f = d.getElementsByTagName(s)[0];
      const j: any = d.createElement(s);
      const dl = l != 'dataLayer' ? `&l=${l}` : '';
      j.async = true;
      j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-5C4VKCP'); */

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${Number(vh)}px`);
    // We listen to the resize event
    window.addEventListener(
      'resize',
      debounce(() => {
        // We execute the same script as before
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${Number(vh)}px`);
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
        // url={url}
        // ogImage={ogImage}
        />
        <a className="skip-link" href="#maincontent">Skip to main</a>
        <Header />
        {/* <Navigation /> */}
        <Content id="maincontent">{children}</Content>
      </Page>
    </>
  );
};

export default Layout;
