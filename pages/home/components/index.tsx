import NextLink from 'next/link';

import { Flex, Stack, useBreakpointValue } from '@chakra-ui/react';
import { Button, Heading, HeadingCallout, Text } from '@/components/UI';
import { BsPencilFill, BsWhatsapp } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

export interface HomeCompProps {
  isMobile: boolean;
}

const HomeComp = (props: HomeCompProps) => {
  const variantWidth = useBreakpointValue({ base: 320, lg: 400 });

  return (
    <Flex as="article" width={variantWidth} direction="column" maxW={variantWidth} textAlign="center">
      <Flex w="full" as="article" justify="center" align="center" marginTop="4">
        <HeadingCallout fontSize="sm" textTransform="uppercase">
          Em que posso te ajudar?
        </HeadingCallout>
      </Flex>

      <Stack as="article" direction="column" spacing="12px" justify="center" align="center" mt="4" w="full">
        <NextLink href="/grupo" passHref>
          <Button
            aria-label="Grupo Renderizando"
            variant="solid"
            fontFamily="Emperatriz"
            textTransform="uppercase"
            justifyContent="center"
            w="72"
            leftIcon={<FaLock />}
          >
            Grupo Renderizando
          </Button>
        </NextLink>

        <NextLink href="/orcamento" passHref>
          <Button
            aria-label="Solicitar Orçamento"
            target="_blank"
            as="a"
            w="72"
            justifyContent="center"
            leftIcon={<BsPencilFill />}
          >
            Solicitar Orçamento
          </Button>
        </NextLink>

        <NextLink href="/contato" passHref>
          <Button
            aria-label="Entrar em Contato"
            target="_blank"
            as="a"
            w="72"
            justifyContent="center"
            leftIcon={<BsWhatsapp />}
          >
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
        {props.isMobile && <br />}
      </Flex>
    </Flex>
  );
};

export default HomeComp;
