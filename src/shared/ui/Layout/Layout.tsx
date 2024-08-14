import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

type LayoutProps = {
  className?: string;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
  sidebarSlot?: ReactNode;
};

const LayoutBase = ({
  className,
  headerSlot,
  footerSlot,
  sidebarSlot,
}: LayoutProps) => {
  return (
    <div className={className}>
      {headerSlot}
      <main className="main">
        <div>
          <Outlet />
        </div>
        {sidebarSlot && <aside>{sidebarSlot}</aside>}
      </main>
      {footerSlot}
      <ScrollRestoration />
    </div>
  );
};

export const Layout = styled(LayoutBase)``;
