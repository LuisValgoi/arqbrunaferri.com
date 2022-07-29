import NextLink from 'next/link';

import { Flex, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Stack } from '@chakra-ui/react';
import { Button, Heading, HeadingCallout, Text } from '@/components/UI';
import { BsPencilFill, BsWhatsapp } from 'react-icons/bs';
import JoinCommunityField from '@/components/JoinCommunity';
import { FaLock, FaLockOpen } from 'react-icons/fa';

export interface HomeCompProps {
  isMobile: boolean;
  isOpen: boolean;
  onPopoverToggle: () => void;
  onPopoverClose: () => void;
}

const HomeComp = (props: HomeCompProps) => {
  return (
    <>
      <Flex w="full" as="article" justify="center" align="center" marginTop="4">
        <HeadingCallout fontSize="sm" textTransform="uppercase">
          Em que posso te ajudar?
        </HeadingCallout>
      </Flex>

      <Stack as="article" direction="column" spacing="12px" justify="center" align="center" mt="4" w="full">
        <Popover isOpen={props.isOpen} onClose={props.onPopoverClose} closeOnEsc>
          <PopoverTrigger>
            <Button
              variant="solid"
              fontFamily="Emperatriz"
              textTransform="uppercase"
              justifyContent="center"
              w="72"
              height={12}
              onClick={props.onPopoverToggle}
              leftIcon={props.isOpen ? <FaLockOpen /> : <FaLock />}
              aria-label="Grupo Renderizando"
            >
              Grupo Renderizando
            </Button>
          </PopoverTrigger>

          <PopoverContent p={2}>
            <PopoverArrow />
            <PopoverBody>Só me confirma teu e-mail...</PopoverBody>
            <JoinCommunityField finallyCallback={props.onPopoverClose} autoFocusEmail={props.isOpen} />
          </PopoverContent>
        </Popover>

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
    </>
  );
};

export default HomeComp;
