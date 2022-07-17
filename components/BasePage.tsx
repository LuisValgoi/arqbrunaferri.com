import { PropsWithChildren } from 'react';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import PageHeader from './PageHeader';
import ThemeSwitcher from './ThemeSwitcher';
import Background from './Background';

export type BasePageProps = PropsWithChildren & {
  title?: string;
  metaContent?: string;
  websiteUrl?: string;
  splashPath?: string;
  stretch?: boolean;
};

const BasePage: React.FC<BasePageProps> = ({
  children,
  title = 'Bruna Ferri | Arquiteta | Te ajudo a descomplicar o pós faculdade',
  metaContent = 'Te ajudo a descomplicar o pós faculdade',
  websiteUrl = 'https://www.arqbrunaferri.com',
  splashPath = '/splash.webp',
  stretch = false,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href={websiteUrl} />
        <meta name="referrer" content="origin" />
        <meta name="theme-color" content="#f9f9fa" />
        <meta name="description" content={metaContent} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaContent} />
        <meta property="og:description" content={metaContent} />
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:site_name" content={metaContent} />
        <meta property="og:image" content={splashPath} />
        <meta property="og:image:secure_url" content={splashPath} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={metaContent} />
        <meta name="twitter:title" content={metaContent} />
        <meta name="twitter:image" content={splashPath} />
      </Head>
      <Background stretch={stretch} />
      <Flex as="main" w="full" direction="column" align="center" justify="center">
        <Flex as="article" width={320} direction="column" maxW={320} textAlign="center">
          <PageHeader />
          <ThemeSwitcher />
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default BasePage;
