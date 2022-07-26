import React from 'react';

import Image from 'next/image';
import { ProfileImageArea, ProfileImageBorder, profileImageStyle } from '../styles';
import { useColorModeValue } from '@chakra-ui/react';

const PageHeader: React.FC = () => {
  const srcCircleName = useColorModeValue('/profile-name.webp', '/profile-name-dark.webp');
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
        <Image
          width={215}
          height={215}
          quality={100}
          placeholder="empty"
          layout="fixed"
          src={srcCircleName}
          alt="Te ajudo a descomplicar o pós faculdade. Projetando ambientes únicos e sofisticados"
        />
      </ProfileImageArea>

      <br />
      <br />
    </>
  );
};

export default PageHeader;
