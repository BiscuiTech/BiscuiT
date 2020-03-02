import React, { useState } from 'react'
import useTranslation from '../hooks/useTranslation'
import PageHeader, { SubHeader } from './styles/PageHeader'
import ContactButton from './ContactButton'
import { BaseCardStyles } from './styles/Card';
import styled, { css, keyframes } from 'styled-components';

const growOutAnimation = keyframes`
  0% {
    background: none;
    form{
      font-size: 0em;
      fieldset {
        height: 0%;
        * {
          font-size: 0em;
          height: 0%;
        }
        input, textarea {
          opacity: 0;
          border: none;
          margin:  none
          }
        input:hover,
        textarea:hover {
          border: none;
        }
      }
    }
  }
  100% {
  background: #FFFFFF;
    form {
      font-size: 1em;
      fieldset {
        height: 100%;
        * {
          font-size: 1em;
          height: 100%;
        }
        input, textarea {
          opacity: 1;
          border: 1px solid hsl(0, 0%, 75%, 100%);
          margin:  3px;
        }
        input:hover,
        textarea:hover {
          border: 2px solid hsl(210, 50%, 75%, 100%);
        }
      }
    }
  }
`;


const animation = css`
  ${growOutAnimation} 1s ease-in-out
`;

const AnimatedCard = styled(BaseCardStyles)`
  background: ${props => props.toggle ? '#FFFFFF' : 'none'};
  box-shadow: ${props => props.toggle ? ' 4px 4px 6px rgba(0, 0, 0, 0.35)' : 'none'};
  animation: ${animation} 1s ease-in-out;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  form {
    height: 100%;
    font-size: ${props => props.toggle ? '1em' : '0em'};
    font-size: 0em;
    fieldset {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      height:  ${props => props.toggle ? '100%' : '0px'};
      height: 0px;
      > * {
        width: 100%;
        align-self: flex-start;
        text-align: left;
        height: ${props => props.toggle ? '100%' : '0%'};
        height:0%;
      }
      form,
      form > * {
        font-size: ${props => props.toggle ? '1em' : '0em'};
        font-size: 0em;
      }
      input, textarea {
        background: none;
        opacity: ${props => props.toggle ? '1' : '0'};
        border: ${props => props.toggle ? '1px solid hsl(0, 0%, 75%, 100%)' : 'none'};
        margin:  ${props => props.toggle ? '3px' : 'none'};
        border-radius: 5px;
      }
      input:hover,
      textarea:hover {
        border: ${props => props.toggle ? '2px solid hsl(210, 50%, 75%, 100%)' : 'none'};
        margin:  ${props => props.toggle ? '2px' : 'none'};
      }
    }
  }
`;

const FormTest = styled.form`
  height: 100%;
  /* font-size: ${props => props.toggle ? '1em' : '0em'}; */
  font-size: 0em;
  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    /* height:  ${props => props.toggle ? '100%' : '0px'}; */
    height: 0px;
    > * {
      width: 100%;
      align-self: flex-start;
      text-align: left;
      /* height: ${props => props.toggle ? '100%' : '0%'}; */
      height:0%;
    }
    form,
    form > * {
      /* font-size: ${props => props.toggle ? '1em' : '0em'}; */
      font-size: 0em;
    }
    input, textarea {
      background: none;
      opacity: ${props => props.toggle ? '1' : '0'};
      border: ${props => props.toggle ? '1px solid hsl(0, 0%, 75%, 100%)' : 'none'};
      margin:  ${props => props.toggle ? '3px' : 'none'};
      border-radius: 5px;
    }
    input:hover,
    textarea:hover {
      border: ${props => props.toggle ? '2px solid hsl(210, 50%, 75%, 100%)' : 'none'};
      margin:  ${props => props.toggle ? '2px' : 'none'};
    }
  }
`;

const ButtonWrapper = styled.div`
  margin: 12px;
  position: relative;
  width: 100%;
  height: 100%;
  height: 70px;
`;

const Contact = () => {
  const { t } = useTranslation()
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <PageHeader>{t('header')}</PageHeader>
      <SubHeader>
        {t('subHeaderOne')}
        <br />
        <b>{t('subHeaderTwo')}</b>
      </SubHeader>
      <div className="my-12">
        <AnimatedCard toggle={toggle}>
          <form >
            <fieldset>
              <label htmlFor="name">
                {t('contactFormName')}
              </label>
              <input type="text" name="name" />
              <label htmlFor="email">
                {t('contactFormEmail')}
              </label>
              <input type="text" name="email" />
              <label htmlFor="message">
                {t('contactFormMessage')}
              </label>
              <textarea name="message" />
            </fieldset>
          </form>
          <ButtonWrapper>
            <ContactButton onClick={handleClick}>{t('common')['contactMe']}</ContactButton>
          </ButtonWrapper>
        </AnimatedCard>
      </div>
    </>
  )
}

export default Contact