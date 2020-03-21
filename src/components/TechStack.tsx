import React from 'react'
import styled from 'styled-components'
import { ConfiguredTech } from '../lib/projects'

const TechStackStyles = styled.div`
  transform: ${props => `translate3d(0,-${props.imageHeight + 'px'},0)`};
  width: 100%;
  height:100%;
  h4 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    /* identical to box height */
    margin: 12px;
    margin-bottom: -2px;
    font-variant: small-caps;

    color: #000000;
  }
  ul {
    display: flex;
    padding: 0 12px;
  }
  li {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);
    border-radius: 5px;
    font-family: 'Source Code Pro';
    background: white;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    text-transform: lowercase;
    flex: none;
    order: 0;
    align-self: center;
    margin: 6px;
    padding: 2px 6px;
  }
`;

function getTechStyles(id: string) {
  const payload = ConfiguredTech.filter(el => el.id === id)
  return payload[0]
}

const TechStack = ({ imageHeight, info }) => {
  console.log(info)
  return (
    <TechStackStyles imageHeight={imageHeight}>
      <h4>
        Tech Stack
      </h4>
      <ul>
        {info.map((el, i) => {
          const styles = getTechStyles(el.id);
          return (
            <li>
              {el.name}
            </li>
          )
        })}
      </ul>
    </TechStackStyles>
  )
}

export default TechStack
