import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
      }

      html[data-theme='light'] {
        --text-color: #000;
        --background-color: #fff;
      }

      html[data-theme='dark'] {
        --text-color: #fff;
        --background-color: #000;
      }
    `}
  />
);

export default GlobalStyles;
