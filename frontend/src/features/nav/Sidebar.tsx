import React from 'react';
import styled from 'styled-components';
import { Color } from '../../layout/common/Colors';

const Root = styled.div`
  background-color: ${Color.DarkGrey};
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  min-height: 100vh;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
`;

const NavItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
];

const NavLink = styled.a`
  text-decoration: none;
  color: ${Color.LightRed};
  padding-left: 1em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 45px;
  align-items: center;
  row-gap: 5px;
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  background-color: ${Color.LightRed};
  justify-content: center;
  grid-template-rows: 50px;
`;

const Logo = styled.div`
  color: white;
  padding-left: 0.5em;
`;

export function Sidebar() {
  return (
    <Root>
      <Sticky>
        <LogoContainer>
          <Logo>LIFE DASHBOARD</Logo>
        </LogoContainer>
        <Grid>
          {NavItems.map((n) => {
            return <NavLink href={n.href}>{n.name}</NavLink>;
          })}
        </Grid>
      </Sticky>
    </Root>
  );
}
