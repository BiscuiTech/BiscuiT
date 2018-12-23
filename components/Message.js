import React from 'react';
import styled from 'styled-components';

const Msg = styled.div`
  display: inline-block;
  font-family: 'Roboto';
  background-color: #0084ff;
  color: #fff;
  flex: 0 1 auto;
  font-size: 16px;
  border-radius: 1.3em;
  box-sizing: content-box;
  padding: 10px 18px 10px 18px;
  margin: 2px 0 2px 0;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Message = ({msg}) => {
  return (
    <Msg>{msg.text}</Msg>
  )
}

export default Message
