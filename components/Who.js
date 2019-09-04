import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const WhoWrapper = styled.div`
  display: grid;
  grid-area: content;
  grid-template-areas: 'image text';
  grid-template-columns: 1fr 1fr;
  p {
    grid-area: text;
    align-self: center;
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sapiente
        tenetur possimus debitis minima quia soluta ad voluptates. Rem, error
        doloremque quos dolorum inventore officiis sint ratione aperiam dicta
        aut?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Consequatur minus voluptatibus, iste non alias sit quibusdam unde
        dolorum, maxime reprehenderit incidunt possimus sequi corrupti.
        Necessitatibus hic aperiam mollitia molestias maxime.
      </p>
    </WhoWrapper>
  </>
);

export default Who;
