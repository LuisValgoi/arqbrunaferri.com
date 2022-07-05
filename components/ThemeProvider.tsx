import React, { PropsWithChildren } from 'react';

import { ChakraProvider, extendTheme, Theme } from '@chakra-ui/react';

export const APP_THEME = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
}) as Theme;

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ChakraProvider theme={APP_THEME}>{children}</ChakraProvider>;
};

export default ThemeProvider;
