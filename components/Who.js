import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const WhoWrapper = styled.div`
  grid-area: content;
  display: grid;
  grid-template-areas: 'image text';
  grid-template-columns: 1fr 1fr;
`;

const Img = styled.div`
  grid-area: image;
  align-self: center;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  vertical-align: middle;
  /* position: relative; */
  overflow: hidden;
  margin: auto;
  box-sizing: content-box;
  img {
    margin: 0 auto;
    margin-top: -20%;
    height: auto;
    z-index: -1;
    width: 100%;
  }
`;

const Text = styled.div`
  p {
    grid-area: text;
    align-self: center;
    line-height: 1.3;
  }
  .closing-words {
    font-weight: 600;
  }
`;

const Who = () => (
  <>
    <Header>I am Jean-Cédric Huet.</Header>
    <WhoWrapper>
      <Img>
        <img
          src="/static/images/mug-shot-2019.png"
          alt="Mug shot of Jean-Cédric Huet, also known as BiscuiTech"
        />
      </Img>
      <Text>
        <p>
          Working as a Developer Analyst for a big Entertainment company in
          Montréal, Cédric learnt the ropes of the industry quickly with massive
          projects. Having a passion for cutting edge technology, he pushed his
          own projects internally. Now having his own name, set of skills and
          talent, Cedric is ready to give your web presence a touch of modern,
          speed, reliabilty and performance.
          <p className="closing-words">
            Are you up for a revamp? I'm your guy.
          </p>
        </p>
      </Text>
    </WhoWrapper>
  </>
);

export default Who;
