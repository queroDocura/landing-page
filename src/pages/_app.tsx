import React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';

import 'tailwindcss/tailwind.css';

const MyApp: React.FC<AppProps> = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8A7757" />
        <title>Quero Doçuras</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
