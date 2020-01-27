import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ContactButton from './ContactButton';
import useTranslation from '../hooks/useTranslation'
import { Image, Transformation } from 'cloudinary-react';

const WhoWrapper = styled.div`
  height: 100%;
  width: 100%;
  grid-area: content;
  display: grid;
  grid-template-areas: 'image text';
  grid-template-columns: 50% 50%;
  @media (max-width: 900px) {
    display: block;
  }
`;

const Img = styled.div`
  grid-area: image;
  align-self: center;
  width: 100%;
  max-width: 480px;
  height: 100%;
  max-height: 480px;
  border-radius: 50%;
  vertical-align: middle;
  /* position: relative; */
  overflow: hidden;
  margin: auto;
  margin-right: 24px;
  img {
    margin: 0 auto;
    margin-top: -20%;
    height: auto;
    z-index: -1;
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 240px;
    height: 240px;
    margin: 10% 12px 6px 0px;
    align-self: start;
    float: left;
  }
  @media (max-width: 620px) {
    width: 140px;
    height: 140px;
    margin: 10% 12px 6px 0px;
    align-self: start;
    float: left;
  }
`;

const Text = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  p {
    text-align: left;
    grid-area: text;
    align-self: center;
    line-height: 1.3;
    text-indent: 18px;
  }
  .closing-words {
    font-weight: 600;
  }
  .biscuitech {
    font-weight: 600;
    padding: 0 6px;
    margin: none;
    /* animation: color-change 4s infinite alternate;
    @keyframes color-change {
      0% {
        color: hsl(209, 100%, 49%);
      }
      50% {
        color: hsl(187, 71%, 50%);
      }
      100% {
        color: hsl(34, 100%, 50%);
      }
    } */
    color: white;
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
`;

const Who = () => {
  const { t, locale } = useTranslation()
  return (
    <>
      <Header>{t('whoTitle')}</Header>
      <WhoWrapper>
        <Img>
          <Image publicId="biscui.tech/biscuitech-portrait.webp" cloudName="biscuitech" alt="Mug shot of Jean-Cédric Huet, also known as BiscuiTech">
            <Transformation width="400" quality="auto" crop="scale" />
          </Image>
        </Img>
        <Text>
          <p>
            {t('biography')}
          </p>
          <p className="closing-words">
            {t('biography_closingWords_1')}
            <span className="biscuitech">BiscuiTech</span>{t('biography_closingWords_2')}
          </p>
          <ContactButton
            href="/[lang]/contact"
            as={`/${locale}/contact`}
          >
            <span className="text-gradient">{t("common")["contactMe"]}</span>
          </ContactButton>
        </Text>
      </WhoWrapper>
    </>
  )
};

export default Who;
