import React, { useEffect, useRef, useState } from 'react';
const CircleType = require('circletype');

import Image from 'next/image';
import {
  letteringStyleDesktop,
  letteringStyleMobile,
  ProfileImageArea,
  ProfileImageBorder,
  profileImageStyle,
} from '../styles/pages';
import { Heading, useColorModeValue, useMediaQuery } from '@chakra-ui/react';

const PageHeader: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleColor = useColorModeValue('arqbrown.500', 'arqbrown.50');
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const [letteringShown, setLetteringShown] = useState(false);

  useEffect(() => {
    if (letteringShown) new CircleType(titleRef.current);
  }, [letteringShown]);

  useEffect(() => {
    setTimeout(() => {
      setLetteringShown(true);
    }, 500);
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
          src="/logo.png"
          alt="Bruna Ferri | Arquiteta"
        />
        {letteringShown && (
          <Heading
            ref={titleRef}
            fontFamily="Fira Sans"
            textTransform="uppercase"
            css={isLargerThan1280 ? letteringStyleDesktop : letteringStyleMobile}
            color={titleColor}
          >
            Bruna Ferri Arquitetura & Interiores &#x2022; Bruna Ferri Arquitetura & Interiores &#x2022;
          </Heading>
        )}
      </ProfileImageArea>
    </>
  );
};

export default PageHeader;
