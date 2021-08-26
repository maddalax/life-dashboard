import React from 'react';
import styled from 'styled-components';
import { Sidebar } from '../../features/nav/Sidebar';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 30;
  width: 85%;
  animation-duration: 0.3s;
  animation-name: slide;
  @keyframes slide {
    from {
      width: 45%;
    }

    to {
      width: 85%;
    }
  }
`;

export function MobileSidebar() {
  return (
    <Wrapper>
      <Sidebar />
    </Wrapper>
  );
}
