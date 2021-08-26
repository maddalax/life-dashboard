import React, { useState } from 'react';
import styled from 'styled-components';
import { Sidebar } from '../../features/nav/Sidebar';
import { Color } from '../common/Colors';
import { Breakpoint } from '../common/Breakpoints';
import { useMobile } from '../common/hooks/useMobile';
import { MobileNav } from './MobileNav';
import { MobileSidebar } from './MobileSidebar';

const Container = styled.div`
  min-height: 100vh;
`;

const Wrapper = styled.div`
  overflow-x: hidden;
`;

export function Layout({ children }: { children: any }) {
  const isMobile = useMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Structure = styled.div`
    background-color: ${Color.LightGrey};
    display: grid;
    grid-template-columns: 6fr;
    grid-gap: 0;
    ${sidebarOpen && 'opacity: 25%;'};
    @media screen and (min-width: ${Breakpoint.Sm}) {
      grid-template-columns: 1fr 6fr;
      opacity: 100%;
    },
  `;

  return (
    <Wrapper>
      {isMobile && sidebarOpen && <MobileSidebar />}
      <Structure>
        {isMobile ? (
          <MobileNav onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        ) : (
          <Sidebar />
        )}
        <Container onClick={() => setSidebarOpen(false)}>{children}</Container>
      </Structure>
    </Wrapper>
  );
}
