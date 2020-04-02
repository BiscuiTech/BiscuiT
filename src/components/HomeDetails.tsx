import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Card from './styles/Card'
import useTranslation from '../hooks/useTranslation'
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';
import Text from './styles/Text';
import A from './styles/StyledAnchor'
const HomeDetailsStyles = styled.div`
  color: white;
  height:100%;
  z-index:5;
  position: relative;
  padding-bottom: 64px;
  .call-to-action {
    margin-top: 24px;
    /* font-size: 24px;
    text-align: center;
    color: black;
    z-index: 5; */
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  width:100%;
`;

const slide = keyframes`
  from { background-position: 0 0; }
  to { background-position: 12px 0; }
`

const SlantedBackgroundHeightValue = '40';
export const SlantedBackgroundHeight = `${SlantedBackgroundHeightValue}vh`

const TechStack = styled.div`
  --SlantedBackgroundHeight: ${props => props.theme.home.slantedBackgroundHeight};
  --SlantedBackgroundHeightNegative: ${props => `-${props.theme.home.slantedBackgroundHeight}`};
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
  p,div{
    max-width: 420px;
    padding: 12px 0;
    margin: 24px auto;
    z-index: 10;
  }
  &::before {
    content: '';
    width: 100%;
    height: var(--SlantedBackgroundHeight);
    background: #0C344B;
    transform: skewY(6deg);
    transform-origin: top right;
    position: absolute;
    z-index: 1;
  }
  &::after {
    content: '';
    width: 100%;
    height: var(--SlantedBackgroundHeight);
    background: #0C344B;
    transform: skewY(6deg);
    transform-origin: top left;
    position: absolute;
    z-index: 1;
    margin-top: var(--SlantedBackgroundHeightNegative);
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
   ul:first-letter {
     font-weight: bold;
     color: red;
   }
   .logo, .stack-icon {
     height: 2em;
     float: right;
     /* margin-right: 60px; */
   }
   .stack-tool:first-letter {
    font-weight: bold;
    text-decoration: underline;
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

const CTA = styled(A)`
  cursor: default;
  margin: 24px 0;
  position: relative;
  &:after{
    position: unset;
    left: unset;
    bottom:unset;
    width: unset;
    height: unset;
    height: unset;
    margin-top: unset;
    z-index: unset;
    display:unset;
    content: unset;
    background: unset;
    box-shadow: unset;
    transform: unset;
    transform-origin: unset;
    transition: transform unset;
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
        <Card fadeIn={true} display="block" maxWidth="600px">
          <p>{t('firstCard')}</p>
          <p className="call-to-action"><CTA>{t('firstCardCTA')}</CTA></p>
        </Card>
        {/* <p className="call-to-action-text">{t('firstCardCTA')}</p> */}
        <TechStack>
          <Waypoint
            bottomOffset="30%"
            onEnter={() => setToggle(true)}
          />
          <animated.p style={animation} dangerouslySetInnerHTML={{ __html: t('techStack_header') }}>
            {/* <div  /> */}
          </animated.p>
          <animated.div style={animation}>
            <ul>
              <li>
                <span className="stack-tool">PostgreSQL</span>
                <span className="stack-animation" />
                <span className="stack-icon">
                  <object type="image/svg+xml" data="/images/stack/postgresql.svg" className="logo">
                    {/* <!-- fallback image in CSS --> */}
                  </object>
                </span>
              </li>
              <li>
                <span className="stack-tool">Express.js</span>
                <span className="stack-animation" />
                <span className="stack-icon">
                  <object type="image/svg+xml" data="/images/stack/expressjs.svg" className="logo">
                    {/* <!-- fallback image in CSS --> */}
                  </object>
                </span>
              </li>
              <li><span className="stack-tool">React</span>
                <span className="stack-animation" />
                <span className="stack-icon">
                  <object type="image/svg+xml" data="/images/stack/react.svg" className="logo">
                    {/* <!-- fallback image in CSS --> */}
                  </object>
                </span>
              </li>
              <li><span className="stack-tool">Node.js</span>
                <span className="stack-animation" />
                <span className="stack-icon">
                  <object type="image/svg+xml" data="/images/stack/node-dot-js.svg" className="logo">
                    {/* <!-- fallback image in CSS --> */}
                  </object>
                </span>
              </li>
              <li>
                <span className="stack-tool">GraphQL</span>
                <span className="stack-animation" />
                <span className="stack-icon">
                  <object type="image/svg+xml" data="/images/stack/graphql.svg" className="logo">
                    {/* <!-- fallback image in CSS --> */}
                  </object>
                </span>
              </li>
            </ul>
          </animated.div>
        </TechStack>
        <Text marginTop={180}>
          {t('secondCardHTML')}
        </Text>
      </ContentWrapper>
    </HomeDetailsStyles>
  )
}

export default HomeDetails