import Head from 'next/head';
import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

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
};

const BasePage: React.FC<BasePageProps> = ({
  children,
  title = 'Bruna Ferri | Arquiteta | Te ajudo a descomplicar o pós faculdade',
  metaContent = 'Te ajudo a descomplicar o pós faculdade. Projetando ambientes únicos e sofisticados',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Lines />
      <Texture />
      <Flex as="main" w="full" direction="column" align="center" justify="center">
        <Flex as="article" width={320} direction="column" maxW={320} textAlign="center">
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default BasePage;
