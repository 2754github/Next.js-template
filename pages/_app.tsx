import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#bc7aff" />
      <link rel="icon" sizes="32x32" type="image/png" href="TODO: /32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" type="image/png" href="TODO: /180x180.png" />
      <link rel="manifest" href="TODO: /manifest.json" />

      {/* OGP */}
      <meta property="og:site_name" content="TODO: Site name" />
      <meta name="twitter:card" content="TODO: summary | summary_large_image etc." />
      <meta name="twitter:site" content="TODO: Twitter ID starting with @." />
      <meta name="twitter:creator" content="TODO: Twitter ID starting with @." />
    </Head>
    <Component {...pageProps} />
  </>
);

// eslint-disable-next-line import/no-default-export
export default App;
