import { Box, Flex, Stack } from '@chakra-ui/react';

import JoinCommunity from '@/components/JoinCommunity';
import { Heading, Text } from '@/components/UI';

const GrupoComp = () => {
  return (
    <>
      <Heading fontSize="2xl" textTransform="uppercase">
        Grupo Renderizando
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
        <JoinCommunity />
      </Stack>
    </>
  );
};

export default GrupoComp;
