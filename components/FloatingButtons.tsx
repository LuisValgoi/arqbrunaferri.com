import React from 'react';
import Link from 'next/link';

import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Box, Button, Icon } from '@chakra-ui/react';
import { CgFacebook } from 'react-icons/cg';
import { BsInstagram } from 'react-icons/bs';

const URL_SOCIAL_MEDIA_FB = 'https://www.facebook.com/arqbrunaferri';
const URL_SOCIAL_MEDIA_INSTA = 'https://www.instagram.com/arqbrunaferri';

const FloatingButtons: React.FC = () => {
  return (
    <Box display="flex" flexDir="column" position="absolute" right={4} top={4} gap={2}>
      <ThemeSwitcher />
      <Link passHref href={URL_SOCIAL_MEDIA_FB}>
        <Button
          aria-label="Facebook"
          as="a"
          target="_blank"
          variant="outline"
          borderRadius={50}
          padding={2}
          colorScheme="arqbrown"
        >
          <Icon as={CgFacebook} w={4} h={4} />
        </Button>
      </Link>
      <Link passHref href={URL_SOCIAL_MEDIA_INSTA}>
        <Button
          aria-label="Instagram"
          as="a"
          target="_blank"
          variant="outline"
          borderRadius={50}
          padding={2}
          colorScheme="arqbrown"
        >
          <Icon as={BsInstagram} w={4} h={4} />
        </Button>
      </Link>
    </Box>
  );
};

export default FloatingButtons;
