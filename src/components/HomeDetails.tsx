import React from 'react'
import styled from 'styled-components';
import Card from './styles/Card'
import A from './styles/a';
import useTranslation from '../hooks/useTranslation'

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
  p{
    max-width: 420px;
    padding: 12px 0;
    margin: 24px auto;
    z-index: 10;
  }
  p > span {
    font-weight: 600;
  }
  &::before {
    content: '';
    width: 100%;
    height: 500px;
    background: #0C344B;
    transform: skewY(6deg);
    transform-origin: top left;
    position: absolute;
    z-index: 1;
    margin-top: -180px;
  }
`;

const HomeDetails = () => {
  const { locale, t } = useTranslation()

  return (
    <HomeDetailsStyles>
      <ContentWrapper>
        <Card>{t('firstCard')}</Card>
        <TechStack>
          <p style={{ textAlign: 'center' }}>The <span>PERN-GL</span> Stack</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quis quae saepe officiis nam non, possimus voluptatibus cum quaerat consequuntur sit numquam fuga quasi molestiae eos asperiores cupiditate soluta ea?
        </p>
        </TechStack>
        <Card>My stack consists of trusted and widely used tools such as PostgreSQL, Node.js and some modern frameworks built around React and GraphQL. Both of them being built by Facebook and used in the <A href="https://www.cnet.com/news/facebooks-redesigned-look-for-desktops-is-coming-before-spring-2020/">2020 Facebook redesign</A>, you can be sure they are battle-tested for heavy-load and high throughput.</Card>
      </ContentWrapper>
    </HomeDetailsStyles>
  )
}

export default HomeDetails