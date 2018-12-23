import React, { Component } from 'react';
import styled from 'styled-components';

const SocialsContainer = styled.div`
  display: flex;
  right:0;
  position: fixed;
  flex-direction: row;
  margin: 18px 18px;
  top: 0;
  @media (max-width: 768px) {
    margin: 18px 0;
    width: 100%;
    justify-content: center;
  }
`;

export default class Socials extends Component {
  render() {
    return (
      <React.Fragment>
        <SocialsContainer>
          <a href="https://www.facebook.com/biscuittech/" target="_blank"><img src="/static/facebook.svg" width="60px" height="60px"/></a>
          <a href="" target="_blank"><img src="/static/linkedin.svg" width="60px" height="60px"/></a>
          <a href="" target="_blank"><img src="/static/twitter.svg" width="60px" height="60px"/></a>
          <a href="" target="_blank"><img src="/static/instagram.svg" width="60px" height="60px"/></a>
          <a href="" target="_blank"><img src="/static/github.svg" width="60px" height="60px"/></a>
        </SocialsContainer>
      </React.Fragment>
    )
  }
}
