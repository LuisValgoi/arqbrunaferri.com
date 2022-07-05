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

    @font-face {
      font-family: "Fira Sans";
      src: url("/fonts/fira-sans/FiraSans-Regular.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-Regular.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Fira Sans Bold";
      src: url("/fonts/fira-sans/FiraSans-Bold.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-Bold.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Fira Sans Extra Bold";
      src: url("/fonts/fira-sans/FiraSans-ExtraBold.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-ExtraBold.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Fira Sans Extra Light";
      src: url("/fonts/fira-sans/FiraSans-ExtraLight.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-ExtraLight.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Fira Sans Light";
      src: url("/fonts/fira-sans/FiraSans-Light.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-Light.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Fira Sans Medium";
      src: url("/fonts/fira-sans/FiraSans-Medium.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-Medium.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Fira Sans Regular";
      src: url("/fonts/fira-sans/FiraSans-Regular.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-Regular.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Fira Sans Semi Bold";
      src: url("/fonts/fira-sans/FiraSans-SemiBold.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-SemiBold.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Fira Sans Thin";
      src: url("/fonts/fira-sans/FiraSans-Thin.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-Thin.woff") format("woff");
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
