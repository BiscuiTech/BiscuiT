import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components';
import { Waypoint } from 'react-waypoint';
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

export const BaseCardStyles = styled.div`
  width: 80%;
  max-width: ${props => props.maxWidth || '500px'};
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.35);
  background: #FFFFFF;
  border-radius: 10px;
  margin: 12px auto;
  padding: 24px;
  font-weight: 300;
  font-size: calc(18px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(24px + (30 - 24) * ((100vw - 300px) / (1600 - 300)));
  color: rgba(0, 0, 0, 0.7);
  text-align: ${props => props.textAlign || 'center'};
  position: relative;
  z-index: 5;
  display: ${props => props.display || 'flex'};
  flex-direction: row;
`

const CardStylesWithAnimation = styled(BaseCardStyles)`
  transform: ${props => props.toggle ? null : 'translate3d(-50%,0,0)'};
  opacity: ${props => props.toggle ? 1 : 0};
  animation: ${props => props.toggle ? animation : null};
`;


type CardProps = {
  readonly children?: any,
  fadeIn?: boolean,
  markup?: string,
  maxWidth?: string,
  textAlign?: string,
  display?: string
}

const Card = ({ children, fadeIn, markup, maxWidth, textAlign, display }: CardProps) => {
  const [toggle, setToggle] = useState(false);
  if (fadeIn) {

    return (
      <>
        {fadeIn && <Waypoint bottomOffset="30%" onEnter={() => setToggle(true)} />}
        {markup
          ? <CardStylesWithAnimation toggle={toggle} dangerouslySetInnerHTML={{ __html: markup }} maxWidth={maxWidth} textAlign={textAlign} display={display}>{children}</CardStylesWithAnimation>
          : <CardStylesWithAnimation toggle={toggle} maxWidth={maxWidth} textAlign={textAlign} display={display}>{children}</CardStylesWithAnimation>
        }
      </>
    )
  } else {
    return (
      markup
        ? <BaseCardStyles dangerouslySetInnerHTML={{ __html: markup }} maxWidth={maxWidth}
          textAlign={textAlign} />
        : <BaseCardStyles maxWidth={maxWidth} textAlign={textAlign}>
          {children}
        </BaseCardStyles >
    )
  }
}


export default Card