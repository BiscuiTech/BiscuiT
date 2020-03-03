import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components';
import Card from './styles/Card'
import useTranslation from '../hooks/useTranslation'
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

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

const slide = keyframes`
  from { background-position: 0 0; }
  to { background-position: 12px 0; }
`


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
   li {
     display: flex;
     flex-direction: row;
     align-items: center;
     text-align: left;
     max-width: 380px;
     height:2em;
     margin: 6px 0;
   }
   .logo, .stack-icon {
     height: 2em;
     float: right;
     /* margin-right: 60px; */
   }
   .stack-animation {
     width: 100%;
     height: 12px;
     margin: 6px 12px;
     padding-top: 12px;
     background-image: url('/images/circle.svg');
     background-repeat: repeat;
     /* transform: translateX(12px); */
     animation: ${slide} 0.5s linear infinite;
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
          /<animated.p style={animation} dangerouslySetInnerHTML={{ __html: t('techStack_header') }}>
            {/* <div  /> */}
          </animated.p>
          <animated.p style={animation}>
            {/* PERN-GL */}
            <ul>
              <li>
                PostgreSQL
                <span className="stack-animation"/>
                <span className="stack-icon">
                  <object type="image/svg+xml" data="/images/stack/postgresql.svg" className="logo">
                    {/* <!-- fallback image in CSS --> */}
                  </object>
                </span>
              </li>
              <li>
                Express.js
                <span className="stack-animation"/>
                <span className="stack-icon">
                  <object type="image/svg+xml" data="/images/stack/expressjs.svg" className="logo">
                    {/* <!-- fallback image in CSS --> */}
                  </object>
                </span>
              </li>
              <li>React
                <span className="stack-animation"/>
                <span className="stack-icon">
                  <object type="image/svg+xml" data="/images/stack/react.svg" className="logo">
                    {/* <!-- fallback image in CSS --> */}
                  </object>
                </span>
              </li>
              <li>Node.js
                <span className="stack-animation"/>
                <span className="stack-icon">
                  <object type="image/svg+xml" data="/images/stack/node-dot-js.svg" className="logo">
                    {/* <!-- fallback image in CSS --> */}
                  </object>
                </span>
              </li>
              <li>
                GraphQL
                <span className="stack-animation"/>
                <span className="stack-icon">
                  <object type="image/svg+xml" data="/images/stack/graphql.svg" className="logo">
                    {/* <!-- fallback image in CSS --> */}
                  </object>
                </span>
              </li>
            </ul>
          </animated.p>
        </TechStack>
        <Card fadeIn={true} markup={t('secondCardHTML')}></Card>
      </ContentWrapper>
    </HomeDetailsStyles>
  )
}

export default HomeDetails