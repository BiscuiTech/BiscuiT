import React from 'react';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import Head from './Head';
import Nav from './Nav';

const GlobaStyle = createGlobalStyle`
  body {
    border: 10px solid #0082fa;
    margin:0;
    padding:0;
  }
`;

const Page = styled.div`
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  background: white;
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
      {children}
    </Page>
  </>
);

export default Layout;
