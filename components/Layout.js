import React from 'react';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import Head from './Head';
import Nav from './Nav';
import FacebookMessenger from './FacebookMessenger';

const GlobaStyle = createGlobalStyle`
  body {
    /* background: #0082fa; */
    /* border: 10px solid #0082fa;
    margin:0;
    padding: 0; */
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
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: calc(28px + (64 - 28) * ((100vw - 300px) / (1600 - 300)));
    margin: 8px;
  }
`;

const Page = styled.div`
  /* height: calc(100vh - 20px);
  width: calc(100vw - 20px); */
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background: white;
`;

const Content = styled.div`
  border-radius: 10px;

  background: white;
  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 150px auto;
  padding: 12px 36px;
`;

const Layout = ({ title, description, url, ogImage, children }) => (
  <>
    <GlobaStyle />
    <Page>
      <Head
        title={title}
        description={description}
        url={url}
        ogImage={ogImage}
      />
      <Nav />
      <Content>{children}</Content>
      <FacebookMessenger pageId="330183527489356" />
    </Page>
  </>
);

export default Layout;
