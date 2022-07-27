import React, { PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

import theme from '.';

const Fonts: React.FC<PropsWithChildren> = () => (
  <Global
    styles={`
    html,
    body,
    main {
      position: relative !important;
      height: 100% !important;
      overflow-x: hidden !important;
    }

    #__next {
      height: 100% !important;
    }

    .background-line {
      height: 100% !important;
    }

    .background-texture {
      height: 100% !important;
    }

    @font-face {
      font-family: "Emperatriz";
      src: url("/fonts/emperatriz/Emperatriz-Regular.woff") format("woff2"), url("/fonts/emperatriz/Emperatriz-Regular.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: "Emperatriz Bold";
      src: url("/fonts/emperatriz/Emperatriz-Bold.woff") format("woff2"), url("/fonts/emperatriz/Emperatriz-Bold.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: "Emperatriz Light";
      src: url("/fonts/emperatriz/Emperatriz-Light.woff") format("woff2"), url("/fonts/emperatriz/Emperatriz-Light.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: "Emperatriz UltraLight";
      src: url("/fonts/emperatriz/Emperatriz-UltraLight.woff") format("woff2"), url("/fonts/emperatriz/Emperatriz-UltraLight.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: "Fira Sans";
      src: url("/fonts/fira-sans/FiraSans-Regular.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-Regular.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Fira Sans Bold";
      src: url("/fonts/fira-sans/FiraSans-Bold.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-Bold.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Fira Sans Extra Bold";
      src: url("/fonts/fira-sans/FiraSans-ExtraBold.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-ExtraBold.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Fira Sans Extra Light";
      src: url("/fonts/fira-sans/FiraSans-ExtraLight.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-ExtraLight.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Fira Sans Light";
      src: url("/fonts/fira-sans/FiraSans-Light.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-Light.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Fira Sans Medium";
      src: url("/fonts/fira-sans/FiraSans-Medium.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-Medium.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Fira Sans Regular";
      src: url("/fonts/fira-sans/FiraSans-Regular.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-Regular.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Fira Sans Semi Bold";
      src: url("/fonts/fira-sans/FiraSans-SemiBold.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-SemiBold.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Fira Sans Thin";
      src: url("/fonts/fira-sans/FiraSans-Thin.woff") format("woff2"), url("/fonts/fira-sans/FiraSans-Thin.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
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
