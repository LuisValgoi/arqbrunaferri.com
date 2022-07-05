import { Global } from '@emotion/react';

const Fonts = () => (
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

export default Fonts;
