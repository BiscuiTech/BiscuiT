import React from 'react';
import styled from 'styled-components';

const MenuStyles = styled.div`
  position: absolute;
  display: block;
  margin: 20px;
  cursor: pointer;
`;

const Menu = ({ onClick }) => {

  return (
    <>
      <MenuStyles onClick={onClick}>
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 7.71429H15V10.2857H0V7.71429ZM0 0H20V2.57143H0V0ZM0 18H9.04375V15.4286H0V18Z" fill="black" />
        </svg>
      </MenuStyles>
    </>
  );
};

export default Menu;
