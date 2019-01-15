import React, { Component } from 'react'
import Message from './Message'
import styled from 'styled-components';

const MsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: flex-start;
  justify-content: flex-end;
  bottom: 0;
  position: fixed;
  margin: 0 0 36px 24px;
  @media (max-width: 768px) {
    margin: 0 0 15px 8px;
    max-width: 300px;
  }
`;

const msgs = [
  {text: 'Hey! 🙋‍♂️ My name is Jean-Cédric Huet, but please call me BiscuiTech 🍪',type: 'string'},
  /* {text: 'Click here for my Portfolio 📚',type: 'link', link: 'www.biscui.tech/portfolio'}, */
  {text: 'I’m currently accepting freelance work', type: 'string'},
  {text: 'Feel free to let me know using the Facebook Messenger button at the right',type: 'string'},
  {text: 'Or by email using this address:',type: 'string'},
  {text: 'tech@biscui.tech',type:'email', email: 'tech@biscui.tech' },
  {text: 'Enjoy your day! 💻',type: 'string'},
]

const MsgIndex = 0;
export default class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      msgs : [
        {text: 'Hey! 🙋‍♂️ My name is Jean-Cédric Huet, but please call me BiscuiTech 🍪',type: 'string'},
        /* {text: 'Click here for my Portfolio 📚',type: 'link', link: 'www.biscui.tech/portfolio'}, */
        {text: 'I’m currently accepting freelance work', type: 'string'},
        {text: 'Feel free to let me know using the Facebook Messenger button at the right',type: 'string'},
        {text: 'Or by email using this address:',type: 'string'},
        {text: 'tech@biscui.tech',type:'email' },
        {text: 'Enjoy your day! 💻',type: 'string'},
      ]
    }
  }

  componentDidMount(){
    // Initialize a timer to push (display) messages every x seconds
    this.timer = setInterval(() => {
      this.pushMessage();
    }, 1000);
    // Check if there are still msgs left to push
    // Push msgs
    // Turn of loading state
  }

  pushMessage(){
    // Take the quantity of pushed messages as an index to the state of msgs

    // push that bad boy
  }

  render() {
    return (
      <MsgContainer>
        {msgs.map((msg, i) => (<Message msg={msg} key={i} display='true' />))}
      </MsgContainer>
    )
  }
}
