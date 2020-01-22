import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import AnchorTag from './styles/a';
import useTranslation from '../hooks/useTranslation'

const ContactWrapper = styled.div`
  height: 100%;
  width: 100%;
  grid-area: content;
`;

const Contact = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header>{t("contact_Header")}</Header>
      <ContactWrapper>
        <p>
          {t("contact_text_1")}
          <span>
            <AnchorTag href="mailto:tech@biscui.tech">tech@biscui.tech</AnchorTag>
          </span>
          .
      </p>
        <p>
          {t("contact_text_2")}
        </p>
      </ContactWrapper>
    </>
  )
};

export default Contact;
