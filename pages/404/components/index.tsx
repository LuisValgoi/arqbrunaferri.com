import NextLink from 'next/link';

import { Box, Flex, Stack, useBreakpointValue } from '@chakra-ui/react';
import { Button, Heading, Text } from '@/components/UI';

const FourOhFourComp = () => {
  const variantWidth = useBreakpointValue({ base: 320, lg: 400 });

  return (
    <Flex as="article" width={variantWidth} direction="column" maxW={variantWidth} textAlign="center">
      <Heading fontSize="2xl" textTransform="uppercase">
        Página não Encontrada
      </Heading>

      <Flex w="full" as="article" justify="center" align="center" flexDir="column">
        <Box w="full" justifyContent="center" mt="2">
          <Text fontWeight="thin">Hmmm, não conseguimos encontrar a página que você tentou acessar.</Text>
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

export default FourOhFourComp;
