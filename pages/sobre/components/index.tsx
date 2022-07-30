import NextLink from 'next/link';

import { Box, Flex, Stack, useBreakpointValue } from '@chakra-ui/react';
import { Heading, Text, Button } from '@/components/UI';

const SobreComp = () => {
  const variantWidth = useBreakpointValue({ base: 320, lg: 400 });

  return (
    <Flex as="article" width={variantWidth} direction="column" maxW={variantWidth} textAlign="center">
      <Heading fontSize="2xl" textTransform="uppercase">
        Sobre
      </Heading>

      <Flex w="full" as="article" justify="center" align="center" flexDir="column">
        <Box w="full" justifyContent="center" mt="2">
          <Text fontWeight="thin">
            Arquiteta e Urbanista, apaixonada por imagens renderizadas e pelo mundo dos projetos de interiores
            residenciais. Iniciou sua paixão pelas maquetes eletrônicas há 5 anos, e, desde então, vem agregando um
            vasto conhecimento na área. Em seus projetos busca transformar os ambientes em lares com autenticidade e
            funcionalidade, através de uma arquitetura única e com alma, sempre prezando às necessidades de cada
            cliente.
          </Text>
        </Box>
      </Flex>

      <Stack as="article" direction="column" spacing="12px" justify="center" align="center" mt="4" w="full">
        <NextLink href="/" passHref>
          <Button aria-label="Voltar" textTransform="uppercase" as="a" w="36" justifyContent="center">
            Voltar
          </Button>
        </NextLink>
      </Stack>
    </Flex>
  );
};

export default SobreComp;
