import { PropsWithChildren } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import BasePage from '../components/BasePage';
import theme from '../theme';

import { CgFacebook } from 'react-icons/cg';
import { FaPinterestP } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import {
  DEFAULT_COLOR_ARQBROWN,
  ProfileImageArea,
  ProfileImageBorder,
  profileImageStyle,
  socialMediaIcons,
} from '../styles/indexs';

const URL_ORCAMENTO = process.env.NEXT_PUBLIC_CTA_ORCAMENTO;
const URL_RENDER = process.env.NEXT_PUBLIC_CTA_RENDER;
const URL_CONTATO = 'mailto:arqbrunaferri@gmail.com';
const URL_TCC = process.env.NEXT_PUBLIC_CTA_TCC_LINK;

const ButtonCTA: React.FC<PropsWithChildren & { link: string }> = ({ link, children }) => (
  <Button
    w="90%"
    variant="outline"
    fontFamily="Emperatriz"
    border="2px"
    size="lg"
    borderRadius="md"
    borderColor="arqbrown.500"
    onClick={() => window.open(link, '_blank')}
    _hover={{ bg: DEFAULT_COLOR_ARQBROWN, color: theme.colors.white, transform: 'scale(1.05)' }}
  >
    {children}
  </Button>
);

const Home: NextPage = () => {
  return (
    <BasePage>
      <ProfileImageArea>
        <ProfileImageBorder />
        <Image
          priority
          width={144}
          height={144}
          quality={100}
          css={profileImageStyle}
          placeholder="blur"
          blurDataURL="/profile-blur.webp"
          layout="fixed"
          src="/profile.webp"
          alt="Bruna Ferri | Arquiteta"
        />
        <Image
          priority
          width={215}
          height={215}
          quality={100}
          placeholder="blur"
          blurDataURL="/profile-blur.webp"
          layout="fixed"
          src="/profile-name.webp"
          alt="Te ajudo a descomplicar o pós faculdade. Projetando ambientes únicos e sofisticados"
        />
      </ProfileImageArea>

      <br />
      <br />

      <Flex as="article" w="full" justify="space-evenly" align="center">
        <CgFacebook size="2.4rem" css={socialMediaIcons} />
        <BsInstagram size="2.8rem" css={socialMediaIcons} />
        <FaPinterestP size="2.4rem" css={socialMediaIcons} />
      </Flex>

      <Flex w="full" as="article" justify="center" align="center" marginTop="4">
        <Box bg="arqbrown.400" borderColor="arqbrown.500" px={4} py={2} border="2px" borderRadius="md">
          <Heading size="sm" color="white">
            EM QUE POSSO TE AJUDAR?
          </Heading>
        </Box>
      </Flex>

      <Stack as="article" direction="column" spacing="12px" justify="center" align="center" mt="4" w="full">
        <Box w="full" justifyContent="center">
          <ButtonCTA link={URL_ORCAMENTO!}>SOLICITAR ORÇAMENTO</ButtonCTA>
        </Box>
        <Box w="full" justifyContent="center">
          <ButtonCTA link={URL_RENDER!}>SOLICITAR RENDER</ButtonCTA>
        </Box>
        <Box w="full" justifyContent="center">
          <ButtonCTA link={URL_CONTATO!}>ENTRAR EM CONTATO</ButtonCTA>
        </Box>
        <Box w="full" justifyContent="center">
          <ButtonCTA link={URL_TCC!}>MAIS SOBRE MEU TCC</ButtonCTA>
        </Box>
      </Stack>

      <Flex w="full" as="article" justify="center" align="center" marginTop="6" flexDir="column">
        <Box w="full" justifyContent="center">
          <Heading color="arqbrown.300" fontSize="2xl">
            SOBRE
          </Heading>
        </Box>
        <Box w="full" justifyContent="center" mt="2">
          <Text fontWeight="thin" fontFamily="Fira Sans" color="gray.500">
            Arquiteta e Urbanista, atuando na área de projetos de interiores residenciais & arquitetônicos de alto
            padrão, buscando transformar os ambientes em lares com autenticidade e funcionalidade, através de uma
            arquitetura única e sofisticada, com um olhar atento às necessidades de cada cliente e tendências atuais.
          </Text>
        </Box>
      </Flex>
    </BasePage>
  );
};

export default Home;
