import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head title='Bruna Ferri | Arquiteta | Te ajudo a descomplicar o pós faculdade'>
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.arqbrunaferri.com" />
          <meta name="referrer" content="origin" />
          <meta name="theme-color" content="#f9f9fa" />
          <meta name="description" content="Te ajudo a descomplicar o pós faculdade" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Te ajudo a descomplicar o pós faculdade" />
          <meta property="og:description" content="Te ajudo a descomplicar o pós faculdade" />
          <meta property="og:url" content="https://www.arqbrunaferri.com" />
          <meta property="og:site_name" content="Te ajudo a descomplicar o pós faculdade" />
          <meta property="og:image" content="/splash.webp" />
          <meta property="og:image:secure_url" content="/splash.webp" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content="Te ajudo a descomplicar o pós faculdade" />
          <meta name="twitter:title" content="Te ajudo a descomplicar o pós faculdade" />
          <meta name="twitter:image" content="/splash.webp" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
