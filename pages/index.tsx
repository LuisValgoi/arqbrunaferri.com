import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
import BasePage from '../components/BasePage';

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
  background: linear-gradient(252deg, rgba(237,237,237,1) 0%, rgba(82,53,33,1) 55%, rgba(51,32,19,1) 85%);
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
    </BasePage>
  );
};

export default Home;
