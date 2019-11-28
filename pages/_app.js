import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as Sentry from '@sentry/node';
import theme from '../components/Theme';

Sentry.init({
  dsn: 'https://c0e5b834500d45b88fb648ccf7c489bf@sentry.io/1838052',
});
export default class MyApp extends App {
  componentDidCatch(error, errorInfo) {
    console.log('CUSTOM ERROR HANDLING', error);
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;
    // Workaround for https://github.com/zeit/next. js/issues/8592
    const { err } = this.props;
    const modifiedPageProps = { ...pageProps, err };
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
