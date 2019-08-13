import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html style={{height: '100vh', width: '100vw'}}>
        <Head>
          {this.props.styleTags}
        </Head>
        <body style={{overflow: 'hidden',height: '100vh', width: '100vw'}}>
		      <div id="fb-root"></div>
          <div className="fb-customerchat"
            attribution='setup_tool'
            page_id="330183527489356">
          </div>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}