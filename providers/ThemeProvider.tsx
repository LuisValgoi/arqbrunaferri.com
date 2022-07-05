import '@fontsource/fira-sans';

import React, { PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import Fonts from '../theme/Fonts';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Fonts />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
};

export default ThemeProvider;
