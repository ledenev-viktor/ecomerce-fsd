import { Global, css } from '@emotion/react';
import { resetStyles } from './reset';
import { variables } from './variables';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${variables}
      ${resetStyles}

      * {
        color: var(--text-color);
        background: var(--background-color);
      }
    `}
  />
);

export default GlobalStyles;
