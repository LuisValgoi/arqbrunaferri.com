import '@fontsource/fira-sans';

import React, { PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

import theme from '.';

const Fonts: React.FC<PropsWithChildren> = () => (
  <Global
    styles={`
    @font-face {
        font-family: "Emperatriz";
        src: url("/fonts/emperatriz/emperatriz.woff") format("woff2"), url("/fonts/emperatriz/emperatriz.woff") format("woff");
        font-weight: normal;
        font-style: normal;
      }
      `}
  />
);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Fonts />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
};

export default ThemeProvider;
