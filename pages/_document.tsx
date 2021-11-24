import React from 'react'

import Document, {
  Html,
  Main,
  NextScript,
  Head,
  DocumentContext,
} from 'next/document'

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang={'en-au'}>
        <Head />
        <body className={'au-body au-grid'}>
          <noscript>
            <p role="alert">This website needs JavaScript to work properly.</p>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
