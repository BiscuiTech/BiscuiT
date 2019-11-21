import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const WhoWrapper = styled.div`
  height: 100%;
  width: 100%;
  grid-area: content;
  display: grid;
  grid-template-areas: 'image text';
  grid-template-columns: 50% 50%;
  @media (max-width: 900px) {
    grid-template-columns: 80px 75%;
    grid-gap: 12px;
  }
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
  img {
    margin: 0 auto;
    margin-top: -20%;
    height: auto;
    z-index: -1;
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 80px;
    height: 80px;
    margin-top: 20%;
    align-self: start;
  }
`;

const Text = styled.div`
  height: 100%;
  width: 100%;
  p {
    grid-area: text;
    align-self: center;
    line-height: 1.3;
  }
  .closing-words {
    font-weight: 600;
  }
  .biscuitech {
    font-weight: 600;
    padding: 0 6px;
    margin: none;
    /* animation: color-change 4s infinite alternate;
    @keyframes color-change {
      0% {
        color: hsl(209, 100%, 49%);
      }
      50% {
        color: hsl(187, 71%, 50%);
      }
      100% {
        color: hsl(34, 100%, 50%);
      }
    } */
    color: white;
    border-radius: 4px;
    background: linear-gradient(
      125.95deg,
      hsl(209, 100%, 49%) 0%,
      hsl(187, 71%, 50%) 50%,
      hsl(34, 100%, 50%) 100%
    );
    background-size: 300%;
    animation: overlay-animation 4s infinite alternate;
    @keyframes overlay-animation {
      0% {
        background-position: left;
      }
      100% {
        background-position: right;
      }
    }
  }
`;

const Who = () => (
  <>
    <Header>I am Jean-Cédric Huet.</Header>
    <WhoWrapper>
      <Img>
        <img
          src="/static/images/biscuitech-portrait.png"
          alt="Mug shot of Jean-Cédric Huet, also known as BiscuiTech"
        />
      </Img>
      <Text>
        <p>
          Working as a Developer Analyst for a big Entertainment company in
          Montréal, I learned the ropes of the industry quickly with massive
          projects. Having a passion for cutting edge technology, I pushed my
          own projects for the company to strive on. Now having my own name, set
          of skills and talent, I am ready to give your web presence a touch of
          modern, speed, reliabilty and performance.
        </p>
        <p className="closing-words">
          Are you up for a revamp?{' '}
          <span className="biscuitech">Biscui.Tech</span> is your guy.
        </p>
      </Text>
    </WhoWrapper>
  </>
);

export default Who;
