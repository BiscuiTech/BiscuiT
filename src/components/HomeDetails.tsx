import React, { useState } from 'react'
import styled from 'styled-components';
import Card from './styles/Card'
import useTranslation from '../hooks/useTranslation'
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';
import ReactHtmlParser from 'react-html-parser'

const HomeDetailsStyles = styled.div`
  color: white;
  height:100%;
  z-index:5;
  position: relative;
  padding-bottom: 64px;
`;

const ContentWrapper = styled.div`
  position: relative;
  width:100%;
`;


const TechStack = styled.div`
  position: relative;
  background: #0C344B;
  margin: 24px 0;
  font-family: 'Montserrat';
  font-size: 20px;
  * {
    position: relative;
  }
  p:first-child{
    text-align: center;
  }
  p{
    max-width: 420px;
    padding: 12px 0;
    margin: 24px auto;
    z-index: 10;
  }
  &::before {
    content: '';
    width: 100%;
    height: 30vh;
    background: #0C344B;
    transform: skewY(6deg);
    transform-origin: top right;
    position: absolute;
    z-index: 1;
   /*  margin-top: -30vh; */
  }
  &::after {
    content: '';
    width: 100%;
    height: 30vh;
    background: #0C344B;
    transform: skewY(6deg);
    transform-origin: top left;
    position: absolute;
    z-index: 1;
    margin-top: -30vh;
   }
`;

const HomeDetails = () => {
  const { t } = useTranslation()
  const [toggle, setToggle] = useState(false);
  const animation = useSpring({
    config: { mass: 1, tension: 120, friction: 14, duration: 750 },
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'translate3d(0,0,0)' : 'translate3d(-50%,0,0)',
    textAlign: 'center',
  });
  return (
    <HomeDetailsStyles>
      <ContentWrapper>
        <Card fadeIn={true}>{t('firstCard')}</Card>
        <TechStack>
          <Waypoint
            bottomOffset="30%"
            onEnter={() => setToggle(true)}
          />
          <animated.p style={animation}>{ReactHtmlParser(t('techStack_header'))}</animated.p>
          <animated.p style={animation}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quis quae saepe officiis nam non, possimus voluptatibus cum quaerat consequuntur sit numquam fuga quasi molestiae eos asperiores cupiditate soluta ea?
          </animated.p>
        </TechStack>
        <Card fadeIn={true} markup={t('secondCardHTML')}></Card>
      </ContentWrapper>
    </HomeDetailsStyles>
  )
}

export default HomeDetails