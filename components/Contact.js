import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Header from './Header';
import AnchorTag from './styles/a';

const ContactWrapper = styled.div`
  height: 100%;
  width: 100%;
  grid-area: content;
`;

const Contact = () => (
  <>
    <Header>How to Get in Touch</Header>
    <ContactWrapper>
      <p>
        If you'd like to reach me to discuss your next project, a redesign of
        your current website or simply to get information on a specific tech I
        use, feel free to email me at{' '}
        <span>
          <AnchorTag href="mailto:tech@biscui.tech">tech@biscui.tech</AnchorTag>
        </span>
        .
      </p>
      <p>
        Otherwise, you can reach me with the Facebook Messenger at the right!
        -->
      </p>
    </ContactWrapper>
  </>
);

export default Contact;
