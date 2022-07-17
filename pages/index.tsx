import type { NextPage } from 'next';
import BasePage from '../components/BasePage';

import { CgFacebook } from 'react-icons/cg';
import { FaPinterestP } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { BoxCallout, Button, Heading, Icon, Text } from '../components/UI';

const URL_SOCIAL_MEDIA_FB = 'https://www.facebook.com/arqbrunaferri';
const URL_SOCIAL_MEDIA_INSTA = 'https://www.instagram.com/arqbrunaferri';
const URL_SOCIAL_MEDIA_PIN = 'https://br.pinterest.com/arqbrunaferri';

const URL_CTA_ORCAMENTO = 'https://my.forms.app/arqbrunaferri/orcamento';
const URL_CTA_RENDER =
  'https://api.whatsapp.com/send?phone=5551981909312&text=Ol%C3%A1,%20como%20funciona%20o%20seu%20servi%C3%A7o%20de%20render?%20';
const URL_CTA_CONTATO = 'mailto:arqbrunaferri@gmail.com';
const URL_CTA_TCC = 'https://drive.google.com/file/d/1_GfCgB1u4dnGJR0bN5qHZg04TluvWq3B/view?usp=sharing';

const Home: NextPage = () => {
  return (
    <BasePage>
      <Flex as="article" w="full" justify="space-evenly" align="center">
        <Icon Src={CgFacebook} size="2.4rem" onClick={() => window.open(URL_SOCIAL_MEDIA_FB, '_blank')} />
        <Icon Src={BsInstagram} size="2.8rem" onClick={() => window.open(URL_SOCIAL_MEDIA_INSTA, '_blank')} />
        <Icon Src={FaPinterestP} size="2.4rem" onClick={() => window.open(URL_SOCIAL_MEDIA_PIN, '_blank')} />
      </Flex>

      <Flex w="full" as="article" justify="center" align="center" marginTop="4">
        <BoxCallout>
          <Heading fontSize="sm">EM QUE POSSO TE AJUDAR?</Heading>
        </BoxCallout>
      </Flex>

      <Stack as="article" direction="column" spacing="12px" justify="center" align="center" mt="4" w="full">
        <Box w="full" justifyContent="center">
          <Button onClick={() => window.open(URL_CTA_ORCAMENTO!, '_blank')}>SOLICITAR ORÇAMENTO</Button>
        </Box>
        <Box w="full" justifyContent="center">
          <Button onClick={() => window.open(URL_CTA_RENDER!, '_blank')}>SOLICITAR RENDER</Button>
        </Box>
        <Box w="full" justifyContent="center">
          <Button onClick={() => window.open(URL_CTA_CONTATO!, '_blank')}>ENTRAR EM CONTATO</Button>
        </Box>
        <Box w="full" justifyContent="center">
          <Button onClick={() => window.open(URL_CTA_TCC!, '_blank')}>MAIS SOBRE MEU TCC</Button>
        </Box>
      </Stack>

      <Flex w="full" as="article" justify="center" align="center" marginTop="6" flexDir="column">
        <Box w="full" justifyContent="center">
          <Heading>SOBRE</Heading>
        </Box>
        <Box w="full" justifyContent="center" mt="2">
          <Text>
            Arquiteta e Urbanista, apaixonada por imagens renderizadas e pelo mundo dos projetos de interiores
            residenciais. Iniciou sua paixão pelas maquetes eletrônicas há 5 anos, e, desde então, vem agregando um
            vasto conhecimento na área. Em seus projetos busca transformar os ambientes em lares com autenticidade e
            funcionalidade, através de uma arquitetura única e com alma, sempre prezando às necessidades de cada
            cliente.
          </Text>
          <br />
          <br />
        </Box>
      </Flex>
    </BasePage>
  );
};

export default Home;
