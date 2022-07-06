import Head from 'next/head';
import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import PageHeader from './PageHeader';

const Lines = styled.svg`
  background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.9)), url(/lines.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
`;

const Texture = styled.span`
  background-color: rgb(250, 250, 250);
  overflow-x: hidden;
  opacity: 0.8;
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(
    45deg,
    rgb(255, 255, 255) 0px,
    rgb(255, 255, 255) 1px,
    rgb(250, 250, 250) 0px,
    rgb(250, 250, 250) 50%
  );
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
`;

export type BasePageProps = PropsWithChildren & {
  title?: string;
  metaContent?: string;
  websiteUrl?: string;
  splashPath?: string;
};

const BasePage: React.FC<BasePageProps> = ({
  children,
  title = 'Bruna Ferri | Arquiteta | Te ajudo a descomplicar o pós faculdade',
  metaContent = 'Te ajudo a descomplicar o pós faculdade',
  websiteUrl = 'https://www.arqbrunaferri.com',
  splashPath = '/splash.webp',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
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
      <Lines />
      <Texture />
      <Flex as="main" w="full" direction="column" align="center" justify="center">
        <Flex as="article" width={320} direction="column" maxW={320} textAlign="center">
          <PageHeader />
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default BasePage;
