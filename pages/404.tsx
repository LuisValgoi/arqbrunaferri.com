import { Box, Flex, Stack } from '@chakra-ui/react';
import Link from 'next/link';

import BasePage from '../components/BasePage';
import { Button, Heading, Text } from '../components/UI';

export default function FourOhFour() {
  return (
    <BasePage stretch>
      <Heading fontSize="2xl">PÁGINA NÃO ENCONTRADA</Heading>

      <Flex w="full" as="article" justify="center" align="center" flexDir="column">
        <Box w="full" justifyContent="center" mt="2">
          <Text fontWeight="thin">Hmmm, não conseguimos encontrar a página que voce tentou acessar.</Text>
        </Box>
      </Flex>

      <Stack as="article" direction="column" spacing="12px" justify="center" align="center" mt="4" w="full">
        <Box w="full" justifyContent="center">
          <Link href="/">
            <Button w="40%">VOLTAR</Button>
          </Link>
        </Box>
      </Stack>
    </BasePage>
  );
}
