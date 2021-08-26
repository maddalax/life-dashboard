import React from 'react';
import styled from 'styled-components';
import { Color } from '../common/Colors';
import { GiHamburgerMenu } from 'react-icons/all';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  color: white;
  width: 100vw;
  z-index: 30;
`;

const NavContent = styled.nav`
  background-color: ${Color.DarkGrey};
  display: grid;
  height: 100%;
  grid-template-rows: 1fr;
  align-items: center;
  padding: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  margin-left: 8px;
  font-size: 16pt;
  background-color: ${Color.LightRed};
  padding-left: 0.3em;
  padding-right: 0.3em;
`;

const Menu = styled.div`
  margin-right: 21px;
  font-size: 18pt;
`;

export interface MobileNavProps {
  onMenuToggle: () => void;
}

export function MobileNav(props: MobileNavProps) {
  return (
    <Nav>
      <NavContent>
        <Wrapper>
          <Logo>LIFE</Logo>
          <Menu onClick={props.onMenuToggle}>
            <GiHamburgerMenu />
          </Menu>
        </Wrapper>
      </NavContent>
    </Nav>
  );
}
