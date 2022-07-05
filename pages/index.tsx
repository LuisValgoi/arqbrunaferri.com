import type { NextPage } from 'next';
import Image from 'next/image';
import BasePage from '../components/BasePage';

import { CgFacebook } from 'react-icons/cg';
import { FaPinterestP } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { css, keyframes } from '@emotion/react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import theme from '../theme';

const profileImageBorderSpin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

const ProfileImageArea = styled.figure`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 44px;

  & span:last-child {
    position: absolute !important;
    animation-name: ${profileImageBorderSpin};
    animation-duration: 60000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

const ProfileImageBorder = styled.span`
  background: linear-gradient(
    252deg,
    ${theme.colors.white} 0%,
    ${theme.colors['arqbrown'][300]} 55%,
    ${theme.colors['arqbrown'][500]} 85%
  );
  border-radius: 50%;
  width: 170px;
  height: 170px;
  position: absolute;
  animation-name: ${profileImageBorderSpin};
  animation-duration: 10000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const profileImageStyle = css`
  border-radius: 50%;
`;

const socialMediaIcons = css`
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${theme.colors['arqbrown'][300]};

  &:hover {
    transform: scale(1.05);
    color: ${theme.colors['arqbrown'][500]};
  }
`;

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
        <Box bg="arqbrown.300" borderColor="arqbrown.800" px={4} py={2} border="2px" borderRadius="md">
          <Heading size="sm" color="white">
            EM QUE POSSO TE AJUDAR?
          </Heading>
        </Box>
      </Flex>
    </BasePage>
  );
};

export default Home;
