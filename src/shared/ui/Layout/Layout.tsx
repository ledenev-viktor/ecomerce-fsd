import styled from '@emotion/styled';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const LayoutBase = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
      <ScrollRestoration />
    </div>
  );
};

export const Layout = styled(LayoutBase)`
  * {
    color: var(--text-color);
    background: var(--background-color);
  }
`;
