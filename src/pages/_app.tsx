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
        <meta name="robots" content="all" />
        <title>Quero Doçuras</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
