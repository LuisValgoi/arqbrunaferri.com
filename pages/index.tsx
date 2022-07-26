import type { NextPage } from 'next';
import NextLink from 'next/link';
import BasePage from '../components/BasePage';

import { Flex, Stack, useMediaQuery } from '@chakra-ui/react';
import { Button, Heading, HeadingCallout, Text } from '../components/UI';

const Home: NextPage = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  return (
    <BasePage>
      <Flex w="full" as="article" justify="center" align="center" marginTop="4">
        <HeadingCallout fontSize="sm" textTransform="uppercase">
          Em que posso te ajudar?
        </HeadingCallout>
      </Flex>

      <Stack as="article" direction="column" spacing="12px" justify="center" align="center" mt="4" w="full">
        <NextLink href="/orcamento" passHref>
          <Button aria-label="Solicitar Orçamento" target="_blank" as="a" w="72" justifyContent="center">
            Solicitar Orçamento
          </Button>
        </NextLink>

        <NextLink href="/render" passHref>
          <Button aria-label="Solicitar Render" target="_blank" as="a" w="72" justifyContent="center">
            Solicitar Render
          </Button>
        </NextLink>

        <NextLink href="/contato" passHref>
          <Button aria-label="Entrar em Contato" target="_blank" as="a" w="72" justifyContent="center">
            Entrar em Contato
          </Button>
        </NextLink>
      </Stack>

      <Flex w="full" as="article" justify="center" align="center" marginTop="6" flexDir="column">
        <Heading textTransform="uppercase" w="full" justifyContent="center">
          Sobre
        </Heading>
        <Text w="full" justifyContent="center" mt="2">
          Arquiteta e Urbanista, apaixonada por imagens renderizadas e pelo mundo dos projetos de interiores
          residenciais. Iniciou sua paixão pelas maquetes eletrônicas há 5 anos, e, desde então, vem agregando um vasto
          conhecimento na área. Em seus projetos busca transformar os ambientes em lares com autenticidade e
          funcionalidade, através de uma arquitetura única e com alma, sempre prezando às necessidades de cada cliente.
        </Text>

        <br />
        {!isLargerThan1280 && <br />}
      </Flex>
    </BasePage>
  );
};

export default Home;
