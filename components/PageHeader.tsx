import React, { useLayoutEffect, useRef } from 'react';
const CircleType = require('circletype');

import Image from 'next/image';
import { letteringStyle, ProfileImageArea, ProfileImageBorder, profileImageStyle } from '../styles';
import { Heading, useColorModeValue } from '@chakra-ui/react';

const PageHeader: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleColor = useColorModeValue('arqbrown.500', 'arqbrown.50');

  useLayoutEffect(() => {
    new CircleType(titleRef.current);
  }, []);

  return (
    <>
      <ProfileImageArea>
        <ProfileImageBorder />
        <Image
          priority
          width={144}
          height={144}
          quality={100}
          css={profileImageStyle}
          placeholder="empty"
          layout="fixed"
          src="/logo.webp"
          alt="Bruna Ferri | Arquiteta"
        />
        <Heading
          ref={titleRef}
          fontFamily="Fira Sans"
          textTransform="uppercase"
          css={letteringStyle}
          color={titleColor}
        >
          Bruna Ferri Arquitetura & Interiores &#x2022; Bruna Ferri Arquitetura & Interiores &#x2022;
        </Heading>
      </ProfileImageArea>
    </>
  );
};

export default PageHeader;
