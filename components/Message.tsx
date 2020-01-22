import React from 'react';
import styled from 'styled-components';

const Msg = styled.div`
  display: ${props => (props.display ? 'inline-block' : 'none')};
  background-color: #0084ff;
  color: #fff;
  flex: 0 1 auto;
  font-size: 24px;
  box-sizing: content-box;
  padding: 12px 22px 12px 22px;
  margin-bottom: 1px;
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: underline;
    color: inherit;
  }
  /* Rounded Corners */
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  /* First and Last message being differently rounded */
  :first-child {
    border-top-left-radius: 28px;
  }
  :last-child {
    border-bottom-left-radius: 28px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 200px;
  }
`;

const Message = ({ msg, display }) => {
  if (msg.type === 'link') {
    return (
      <Msg display={display}>
        <a href={msg.link}>{msg.text}</a>
      </Msg>
    );
  }
  if (msg.type === 'email') {
    return (
      <Msg display={display}>
        <a href={`mailto:${msg.email}`}>{msg.text}</a>
      </Msg>
    );
  }
  return <Msg display={display}>{msg.text}</Msg>;
};

export default Message;
