import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components';
import { Waypoint } from 'react-waypoint';
import ReactHtmlParser from 'react-html-parser';
import A from './a';

const fadeInAnimation = keyframes`
  0%{
    transform: translate3d(-50%,0,0);
    opacity: 0;
    display: none;
  }
  100%{
    transform: translate3d(0,0,0);
    opacity: 1;
  }
`;

const animation = () =>
  css`
    ${fadeInAnimation} 1s ease-in-out
`;

const CardStyles = styled.div`
  width: 80%;
  max-width: 500px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.35);
  background: #FFFFFF;
  border-radius: 10px;
  margin: 12px auto;
  padding: 24px;
  font-weight: 300;
  font-size: calc(18px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(24px + (30 - 24) * ((100vw - 300px) / (1600 - 300)));
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  position: relative;
  z-index: 5;
  transform: ${props => props.toggle ? null : 'translate3d(-50%,0,0)'};
  opacity: ${props => props.toggle ? 1 : 0};
  animation: ${props => props.toggle ? animation : null};
`;

type CardProps = {
  readonly children?: any,
  fadeIn?: boolean,
  markup?: string
}

function createMarkup(markup: string) {
  return { __html: markup }
}

const Card = ({ children, fadeIn, markup }: CardProps) => {
  const [toggle, setToggle] = useState(false);
  // not animated
  if (!fadeIn) {
    return (
      <CardStyles
        dangerouslySetInnerHTML={markup && createMarkup(markup)}>
        {children}
      </CardStyles>
    )
  } else {
    // animated version
    return (
      <>
        <Waypoint
          bottomOffset="30%"
          onEnter={() => setToggle(true)}
        />
        {markup
          ? <CardStyles toggle={toggle}>
            {ReactHtmlParser(markup)}
          </CardStyles>
          : <CardStyles toggle={toggle}>
            {children}
          </CardStyles>
        }
      </>
    )
  }
}


export default Card