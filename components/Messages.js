import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const MsgContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: flex-start;
  justify-content: flex-end;
  bottom: 0;
  position: fixed;
  z-index: 5;
  margin: 0 0 24px 12px;
  @media (max-width: 768px) {
    margin: 0 0 24px 6px;
    max-width: 300px;
  }
`;

const msgs = [
  {
    text:
      'Hey! 🙋‍♂️ My name is Jean-Cédric Huet, but please call me BiscuiTech 🍪',
    type: 'string',
  },
  /* {
    text: 'Click here for my Portfolio 📚',
    type: 'link',
    link: '/what',
  }, */
  { text: 'I’m currently accepting freelance work', type: 'string' },
  {
    text:
      'Feel free to let me know using the Facebook Messenger button at the right',
    type: 'string',
  },
  { text: 'Or by email using this address:', type: 'string' },
  { text: 'tech@biscui.tech', type: 'email', email: 'tech@biscui.tech' },
  { text: 'Enjoy your day! 💻', type: 'string' },
];

const MsgIndex = 0;
const Messages = () => (
  <MsgContainer>
    {msgs.map((msg, i) => (
      <Message msg={msg} key={i} display="true" />
    ))}
  </MsgContainer>
);

export default Messages;
