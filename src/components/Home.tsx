import React from 'react';
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslation'
import Link from 'next/link';
import StyledAnchor from './styles/StyledAnchor';
import { LatestBlog } from './LatestBlog';

const Welcome = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: left;
  margin-bottom:48px;
  padding: 0;
  font-family: 'Montserrat';
  font-weight: 200;
  * {
    padding: 0;
  }
  .welcome-hello {
    font-size: 26px;
    font-size: min(max(26px,3vw), 32px);
  }
  .welcome--my-name {
    font-size: 36px;
    font-size: min(max(36px,6vw), 72px);
    font-weight: 800;
    line-height: 100%;
  }
  .welcome--from {
    font-size: 20px;
    font-size: min(max(18px, 4vw), 24px);
    width: 70%;
    min-width: 230px;
    margin: 0;
    word-wrap: break-word;
  }
`

const ShortIntro = styled.div`
  width: 100%;
  margin: auto;
  text-align: left;
  text-justify: auto;
  overflow: auto;
  .toRight {
    margin-right: 6px;
    float: right;
  }
`;

const Home = ({ pid }) => {
  const { locale, t } = useTranslation()
  return (
    <>
      <Welcome>
        <h1 className="welcome--hello">
          {t('welcome_msg')}
          <br />
          <span className="welcome--my-name">Jean-Cédric Huet</span>
        </h1>
        <p className="welcome--from">{t('i_am')}</p>
      </Welcome>
      <ShortIntro>
        <p>{t('short_intro')}</p>
        <Link href="/[lang]/about" as={`/${locale}/about`} >
          <StyledAnchor className="toRight">{t('common')['aboutMe']}</StyledAnchor>
        </Link>
      </ShortIntro>
      <LatestBlog pid={pid} />
    </>
  );
};

export default Home;
