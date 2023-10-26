import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <body className='bg-gray-600'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
