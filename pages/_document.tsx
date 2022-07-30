/* eslint-disable @next/next/no-styled-jsx-in-document */
import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '@/theme/index';

export default class Document extends NextDocument {
  render() {
    const title = 'Bruna Ferri Arquitetura & Interiores';
    const metaContent = 'Escritório de Arquitetura especializado em interiores';
    const websiteUrl = 'https://www.arqbrunaferri.com';
    const splashPath = '/splash.webp';

    return (
      <Html lang="pt-BR">
        <Head title={title}>
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="canonical" href={websiteUrl} />

          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="referrer" content="origin" />
          <meta name="theme-color" content="#f9f9fa" />
          <meta name="description" content={metaContent} />

          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={metaContent} />
          <meta property="og:url" content={websiteUrl} />
          <meta property="og:site_name" content={title} />
          <meta property="og:image" content={splashPath} />
          <meta property="og:image:secure_url" content={splashPath} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="image/jpeg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={metaContent} />
          <meta name="twitter:image" content={splashPath} />
          <meta name="twitter:label1" content="Est. tempo de leitura" />
          <meta name="twitter:data1" content="5 minutos" />
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
