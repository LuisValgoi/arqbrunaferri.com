import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

import BasePage from '../components/BasePage';
import ButtonCTA from '../components/ButtonCTA';
import { DEFAULT_COLOR_ARQBROWN } from '../styles';
import theme from '../theme';

export default function FourOhFour() {
  return (
    <BasePage>
      <Heading fontSize="2xl">PÁGINA NÃO ENCONTRADA</Heading>

      <Flex w="full" as="article" justify="center" align="center" flexDir="column">
        <Box w="full" justifyContent="center" mt="2">
          <Text fontWeight="thin" color="gray.500">
            Hmmm, não conseguimos encontrar a página que voce tentou acessar.
          </Text>
        </Box>
      </Flex>

      <Stack as="article" direction="column" spacing="12px" justify="center" align="center" mt="4" w="full">
        <Box w="full" justifyContent="center">
          <Link href="/">
            <Button
              w="40%"
              variant="outline"
              fontFamily="Emperatriz"
              border="2px"
              size="lg"
              borderRadius="md"
              borderColor="arqbrown.500"
              _hover={{ bg: DEFAULT_COLOR_ARQBROWN, color: theme.colors.white, transform: 'scale(1.05)' }}
            >
              VOLTAR
            </Button>
          </Link>
        </Box>
      </Stack>
    </BasePage>
  );
}
