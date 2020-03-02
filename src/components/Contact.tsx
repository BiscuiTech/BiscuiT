import React, { useState } from 'react'
import useTranslation from '../hooks/useTranslation'
import PageHeader, { SubHeader } from './styles/PageHeader'
import ContactButton from './ContactButton'
import { BaseCardStyles } from './styles/Card';
import styled, { css, keyframes } from 'styled-components';
import Button from './styles/button';
import { email as emailRegEx } from '../lib/regEx'
import { DisplayError } from './UserMessage';
const growOutAnimation = keyframes`
  0% {
    background: initial;
    box-shadow: initial;
    form {
      display: initial;
      opacity:initial;
      fieldset{
        input, label, textarea {
          opacity:  initial;
        }
      }
    }
  }
  80% {
    background: #FFFFFF;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.35);
    form {
      display: initial;
      opacity:initial;
      fieldset{
        input, label, textarea {
          opacity:  initial;
        }
      }
    }
  }
  100% {
    background: #FFFFFF;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.35);
    form {
      display: block;
      opacity:1;
      fieldset{
        input, label, textarea {
          opacity:  1;
        }
      }
    }
  }
`;


const animation = css`
  ${growOutAnimation} 1s ease-in-out both
`;

const AnimatedCard = styled(BaseCardStyles)`
  background: ${props => props.toggle ? '#FFFFFF' : 'none'};
  box-shadow: ${props => props.toggle ? ' 4px 4px 6px rgba(0, 0, 0, 0.35)' : 'none'};
  animation: ${props => props.toggle ? animation : 'none'};
  display: flex;
  flex-direction: column;
  font-size: 18px;
  form {
    width: 100%;
    display: ${props => props.toggle ? 'block' : 'none'};
    opacity: ${props => props.toggle ? 1 : 0};
    fieldset {
      display: ${props => props.toggle ? 'flex' : 'none'};
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      input, label, textarea {
        opacity:  ${props => props.toggle ? 1 : 0};
      }
      label {
        margin-left: 12px;
        color: hsl(0, 0%, 35%)
      }
      * {
        width: 100%;
        align-self: flex-start;
        text-align: left;
      }
      input, textarea {
        background: none;
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

const CloseButton = styled.button`
  font-size: 36px;
  line-height: 0.5;
  color: hsl(350, 75%, 50%);
  background: none;
  position: absolute;
  right:0;
  top:0;
  margin: 12px;
`;

const ButtonWrapper = styled.div`
  /* margin: 12px; */
  position: relative;
  width: 100%;
  height: 100%;
  height: 70px;
`;

interface IStatus {
  submitted: boolean
  submitting: boolean
  info: {
    error: boolean,
    msg: any
  }
}

const Contact = () => {
  const { t } = useTranslation()
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(null)
  const [status, setStatus] = useState<IStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [messageProps, setMessageProps] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleContactButton = () => {
    setToggle(true)
  }
  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setMessageProps({
        name: '',
        email: '',
        message: ''
      })
    } else {
      setStatus({
        ...status,
        info: { error: true, msg: msg }
      })
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRegEx)
    if (!emailRegEx.test(messageProps.email)) {
      setError(t('common')['error_InvalidEmail'])
      return;
    } else {
      /* const data = new FormData(messageProps)   */
      /* const payload = await fetch('/api/sendMessage', {
        method: 'POST',
        body: new FormData(document?.querySelector('#form--sendMessage'))
      })
      .then(res => console.log(res))
      .catch(err => console.error(err)) */
      const res = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageProps)
      })
      const text = await res.text()
      handleResponse(res.status, text)
      console.log(res)
      setError(null)
    }
  }
  const handleInput = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    setMessageProps({ ...messageProps, [name]: val });
  }
  const handleClose = () => {
    setToggle(false)
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
          <form onSubmit={handleSubmit} id="form--sendMessage">
            <CloseButton aria-label="Close Message Modal Modal Box" type="button" onClick={handleClose}>
              &times;
            </CloseButton>
            <fieldset>
              <label htmlFor="name">
                {t('contactFormName')}
              </label>
              <input type="text" name="name" onChange={handleInput} required />
              <label htmlFor="email">
                {t('contactFormEmail')}
              </label>
              <input type="text" name="email" onChange={handleInput} required />
              <label htmlFor="message">
                {t('contactFormMessage')}
              </label>
              <textarea name="message" onChange={handleInput} required />
            </fieldset>
            <Button>
              Send
            </Button>
            {error && <DisplayError error={{ message: error }} />}
          </form>
          {!toggle &&
            <ButtonWrapper>
              <ContactButton onClick={handleContactButton}>{t('common')['contactMe']}</ContactButton>
            </ButtonWrapper>
          }
        </AnimatedCard>
      </div>
    </>
  )
}

export default Contact