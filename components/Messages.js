import React from 'react';
import Message from './Message'
import styled from 'styled-components';

const MsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
  /* bottom: 0; */
  position: fixed;
  margin: 0 0 32px 14px;
  margin-bottom: auto;
  @media (max-width: 768px) {
    margin: 0 0 15px 8px;
  }
`;

const msgs = [
  {text: 'Hey! 🙋‍♂️ My name is Jean-Cédric Huet, but please call me BiscuiTech 🍪',type: 'string'},
  {text: 'Click here for my Portfolio 📚',type: 'link', link: 'www.biscui.tech/portfolio'},
  {text: 'I’m currently accepting freelance work', type: 'string'},
  {text: 'Feel free to let me know using the Facebook Messenger button at the right',type: 'string'},
  {text: 'Or by email using this address:',type: 'string'},
  {text: 'tech@biscui.tech',type:'email' },
  {text: 'Enjoy your day! 💻',type: 'string'},
]

const Messages = () => {
  return (
    <MsgContainer>
       {msgs.map((msg, i) => (<Message msg={msg} key={i} />))}
    </MsgContainer>
  )
}

export default Messages
