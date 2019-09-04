import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Menu from './Menu';

const NavStyles = styled.div`
  max-height: 100px;
  height: 100px;
  width: 100%;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    left: 2%;
    bottom: 0;
    height: 1px;
    width: 96%; /* or 100px */
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
  display: grid;
  grid-template-columns: 400px auto 150px;
  grid-template-rows: 1fr;
  grid-template-areas: 'logo . menu';
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (max-width: 580px) {
    grid-template-columns: 3fr auto 1fr;
  }
`;

const Logo = styled.div`
  grid-area: logo;
  margin: auto;
  cursor: pointer;
  img {
    height: 100px;
  }
`;

const Beta = styled.i`
  align-self: auto;
  text-align: center;
  margin: auto;
  font-size: 18px;
`;

const Nav = () => (
  <NavStyles>
    <Logo>
      <Link href="/">
        <img src="/static/BiscuiTech Logo (2019).png" alt="BiscuiTech Logo" />
      </Link>
    </Logo>
    <Beta>
      ⚠ This is a beta version ⚠<br />
      Website is under heavy construction
    </Beta>
    <Menu />
  </NavStyles>
);

export default Nav;
