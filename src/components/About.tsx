import React from 'react'
import styled from 'styled-components';
import PageHeader from './styles/PageHeader';
import useTranslation from '../hooks/useTranslation';
import Card from './styles/Card';


const AboutStyles = styled.div`
  margin: auto;
  text-align: center;
`;

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader>{t('header')}</PageHeader>
      <AboutStyles>
        <Card fadeIn={false}>
          {t('aboutMe')}
        </Card>
      </AboutStyles>
    </>
  )
}

export default About