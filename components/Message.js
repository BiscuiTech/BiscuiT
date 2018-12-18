import React from 'react'
import styled from 'styled-components'

const Msg = styled.li`
  font-family: 'Roboto';
  font-size: '14px';
  list-style-type: none;
  display: inline;
  background-color: #0084ff;
  @media (min-width: 768px) {
    font-size: '36px'
  }

`;

const Message = ({msg}) => {
  return (
    <React.Fragment>
      <Msg>{msg.text}</Msg>
    </React.Fragment>
  )
}

export default Message
