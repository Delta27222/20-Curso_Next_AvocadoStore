// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html>
      <Head>
        <meta property="custom" content="something" />
      </Head>
      <body className=''>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}