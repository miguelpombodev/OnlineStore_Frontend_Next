import Header from 'components/Header';
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BearStore</title>
        <link rel="shortcut icon" href="" />
        <meta name="description" content="Simple Store using NextJS" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
