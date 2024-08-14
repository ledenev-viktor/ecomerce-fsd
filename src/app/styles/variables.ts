import { css } from '@emotion/react';

export const variables = css`
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
`;
