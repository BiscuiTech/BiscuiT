import React from 'react';
import styled from 'styled-components';

const SocialsContainer = styled.div`
  bottom: 0;
  position: absolute;
  margin: auto;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin: 18px 18px;
  justify-content: center;
  a {
    margin: auto 20px;
    cursor: pointer;
    img {
      cursor: inherit;
    }
  }
  @media (max-width: 780px) {
    margin: 6px;
    justify-content: left;
    a {
      margin: 6px;
    }
  }
`;

const Socials = () => (
  <SocialsContainer>
    <a
      href="https://www.facebook.com/biscuittech/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/static/facebook.svg"
        width="50px"
        height="50px"
        alt="Facebook Icon \& link"
      />
    </a>
    <a
      href="https://ca.linkedin.com/in/jean-c%C3%A9dric-huet-7a0949a3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/static/linkedin.svg"
        width="50px"
        height="50px"
        alt="LinkedIn Icon \& link"
      />
    </a>
    <a
      href="https://twitter.com/biscuitech"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/static/twitter.svg"
        width="50px"
        height="50px"
        alt="Twitter Icon \& link"
      />
    </a>
    <a
      href="https://github.com/biscuitech"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/static/github.svg"
        width="50px"
        height="50px"
        alt="GitHub Icon \& link"
      />
    </a>
  </SocialsContainer>
);

export default Socials;
