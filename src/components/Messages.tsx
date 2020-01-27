import React, { useContext } from 'react';
import styled from 'styled-components';
import Message from './Message';
import useTranslation from '../hooks/useTranslation'

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

const msgs = {
  "en": [
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
        'Feel free to contact me using the Facebook Messenger button at the right',
      type: 'string',
    },
    { text: 'Or by email using this address:', type: 'string' },
    { text: 'tech@biscui.tech', type: 'email', email: 'tech@biscui.tech' },
    { text: 'Enjoy your day! 💻', type: 'string' },
  ], "fr": [
    {
      text:
        'Salut! 🙋‍♂️ Mon nom est Jean-Cédric Huet, mais applez-moi BiscuiTech 🍪',
      type: 'string',
    },
    /* {
      text: 'Click here for my Portfolio 📚',
      type: 'link',
      link: '/what',
    }, */
    { text: 'J’accepte actuellement des offres Freelance', type: 'string' },
    {
      text:
        'Contactez moi avec le bouton Facebook Messenger à droite',
      type: 'string',
    },
    { text: 'Ou par courriel à cette addresse:', type: 'string' },
    { text: 'tech@biscui.tech', type: 'email', email: 'tech@biscui.tech' },
    { text: 'Bonne journée! 💻', type: 'string' },
  ]
};

const Messages = () => {
  const { locale } = useTranslation()
  return (
    <MsgContainer>
      {msgs[locale].map((msg, i) => (
        <Message msg={msg} key={i} display="true" />
      ))}
    </MsgContainer>
  )
};

export default Messages;
