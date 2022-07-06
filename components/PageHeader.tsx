import React from 'react';

import Image from 'next/image';
import { ProfileImageArea, ProfileImageBorder, profileImageStyle } from '../styles';

const PageHeader: React.FC = () => {
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
          src="/profile.webp"
          alt="Bruna Ferri | Arquiteta"
        />
        <Image
          priority
          width={215}
          height={215}
          quality={100}
          placeholder="empty"
          layout="fixed"
          src="/profile-name.webp"
          alt="Te ajudo a descomplicar o pós faculdade. Projetando ambientes únicos e sofisticados"
        />
      </ProfileImageArea>

      <br />
      <br />
    </>
  );
};

export default PageHeader;
