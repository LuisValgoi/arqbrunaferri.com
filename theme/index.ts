import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'arqbrown',
    components: ['Button'],
  }),
  {
    fonts: {
      heading: `'Emperatriz', sans-serif`,
      body: `'Fira Sans', sans-serif`,
    },
    colors: {
      arqbrown: {
        50: '#E7D3C5',
        100: '#D0A88B',
        200: '#BE8760',
        300: '#9F6841',
        400: '#744c2f',
        500: '#654229',
        600: '#573923',
        700: '#492F1D',
        800: '#3A2617',
        900: '#3A2617',
      },
    },
  },
);

export default theme;
