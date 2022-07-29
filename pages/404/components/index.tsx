import NextLink from 'next/link';

import { Box, Flex, Stack } from '@chakra-ui/react';
import { Button, Heading, Text } from '@/components/UI';

const FourOhFourComp = () => {
  return (
    <>
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
          <Button textTransform="uppercase" as="a" w="36" justifyContent="center">
            Voltar
          </Button>
        </NextLink>
      </Stack>
    </>
  );
};

export default FourOhFourComp;
