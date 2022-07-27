import { PropsWithChildren } from 'react';
import { Flex, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';
import PageHeader from './PageHeader';
import Background from './Background';
import FloatingButtons from './FloatingButtons';

export type BasePageProps = PropsWithChildren & {
  title?: string;
  metaContent?: string;
  websiteUrl?: string;
  splashPath?: string;
  stretch?: boolean;
};

const BasePage: React.FC<BasePageProps> = ({
  children,
  title = 'Bruna Ferri Arquitetura & Interiores',
  metaContent = 'Escritório de Arquitetura especializado em interiores',
  websiteUrl = 'https://www.arqbrunaferri.com',
  splashPath = '/splash.webp',
  stretch = false,
}) => {
  const variantWidth = useBreakpointValue({ base: 320, lg: 400 });

  return (
    <>
      <Head>
        <title>{title}</title>
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
      <Background stretch={stretch} />
      <Flex as="main" w="full" direction="column" align="center" justify="start">
        <Flex as="article" width={variantWidth} direction="column" maxW={variantWidth} textAlign="center">
          <PageHeader />
          <FloatingButtons />
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default BasePage;
