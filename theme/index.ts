import { extendTheme, Theme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Emperatriz', sans-serif`,
    body: `'Fira Sans', sans-serif`,
  },
  colors: {
    arqbrown: {
      200: "#9f6037",
      300: "#744c2f",
      500: "#523521",
      700: "#29261d",
      800: "#332013",
    },
  },
});

export default theme;
