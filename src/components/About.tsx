import React from 'react'
import styled from 'styled-components';
import PageHeader, { SubHeader } from './styles/PageHeader';
import useTranslation from '../hooks/useTranslation';
import Card from './styles/Card';
import { Image, Transformation } from 'cloudinary-react';
import Link from 'next/link';

const AboutStyles = styled.div`
  margin: auto;
  padding-bottom: 32px;
  text-align: center;
`;

const AboutWrapper = styled.div`
  height: 100%;
  width: 100%;
  grid-area: content;
  display: grid;
  grid-template-areas: 'image text';
  grid-template-columns: minmax(20%, 350px) 1fr;
  grid-column-gap: 12px;
  @media (max-width: 1000px) {
    display: block;
  }
`;

const Img = styled.div`
  grid-area: image;
  align-self: center;
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 350px;
  border-radius: 50%;
  vertical-align: middle;
  overflow: hidden;
  margin: auto;
  position: relative;
  img {
    margin: 0 auto;
    margin-top: -20%;
    height: auto;
    z-index: -1;
    width: 100%;
  }
  @media (max-width: 1000px) {
    width: 240px;
    height: 240px;
    margin: 12px;
    align-self: start;
    float: left;
  }
  @media (max-width: 620px) {
    width: 140px;
    height: 140px;
    margin: 12px;
    align-self: start;
    float: left;
  }
`;

const Text = styled.div`
  height: 100%;
  width: 100%;
  text-align: left;
  grid-area: text;
  margin:auto;
  justify-self: center;
  p {
    padding: 12px;
    text-align: left;
    grid-area: text;
    align-self: center;
    line-height: 1.3;
    text-indent: 18px;
    text-justify: distribute;
  }
  .closing-words {
    font-weight: 600;
  }
  .biscuitech {
    box-sizing: content-box;
    font-weight: 600;
    padding: 6px 12px;
    margin: none;
    color: white;
    box-shadow: 4px 4px 6px hsl(0, 0%, 0%, 25%);
    border-radius: 4px;
    background: linear-gradient(
      125.95deg,
      hsl(209, 100%, 49%) 0%,
      hsl(187, 71%, 50%) 50%,
      hsl(34, 100%, 50%) 100%
    );
    background-size: 300%;
    animation: overlay-animation 4s infinite alternate;
    @keyframes overlay-animation {
      0% {
        background-position: left;
      }
      100% {
        background-position: right;
      }
    }
  }
  .bobbing-anim {
    width: 100%;
    box-sizing:  content-box;
    animation: size-animation ease-in-out 2s infinite alternate;
    @keyframes size-animation {
      0% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(-12px);
      }
    }
  }
`;

const About = () => {
  const { t, locale } = useTranslation()

  return (
    <>
      <PageHeader>{t('header')}</PageHeader>
      <SubHeader>
        {t('subHeader')}
      </SubHeader>
      <AboutStyles>
        <AboutWrapper>
          <Img>
            <Image publicId="biscui.tech/biscuitech-portrait.webp" cloudName="biscuitech" alt="Mug shot of Jean-Cédric Huet, also known as BiscuiTech">
              <Transformation width="400" quality="auto" crop="scale" />
            </Image>
          </Img>
          <Text>
            <p>
              {t('aboutMe')}
            </p>
            <br />
            <div className="bobbing-anim">
              <Link href="/[lang]/contact" as={`/${locale}/contact`}>
                <a className="biscuitech">
                  {t('contactMe')}
                </a>
              </Link>
            </div>
          </Text>
        </AboutWrapper>
      </AboutStyles>
    </>
  )
}

export default About