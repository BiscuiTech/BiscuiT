import React from 'react';
import Message from './Message'

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
    <>
       {msgs.map(msg => (<Message msg={msg}/>))}
    </>
  )
}

export default Messages
