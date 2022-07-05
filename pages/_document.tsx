import { ColorModeScript } from '@chakra-ui/react';
import { APP_THEME } from "../components/ThemeProvider";
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <ColorModeScript initialColorMode={APP_THEME.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
