import React from 'react';
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslation'

const Welcome = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  height: 85vh;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* background: white; */
  .welcome--my-name {
    /* font-size: 36px; */
    font-size: calc(36px + (56px - 36px) * ((100vw - 500px) / (1600 - 500)));
    font-family: 'Montserrat';
    margin-bottom: 36px;
    font-weight: 200;
    padding: 0;
    span{
      font-weight: 800;
    }
  }
  .welcome--from {
    font-size: 24px;
    font-family: 'Roboto';
    color: hsl(0,0%,0%,55%);
    width: 70%;
    min-width: 230px;
    text-align: center;
    margin: 0 auto;
    font-weight: 200;
  }
`

const Home = () => {
  const { locale, t } = useTranslation()
  return (
    <>
      <Welcome>
        <h1 className="welcome--my-name">
          {t('welcome_msg')}
          <br />
          <span>Jean-Cédric Huet</span>
        </h1>
        <p className="welcome--from">{t('i_am')}</p>
      </Welcome>
    </>
  );
};

export default Home;
