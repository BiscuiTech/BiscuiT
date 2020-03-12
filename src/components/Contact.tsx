import React, { useState } from 'react'
import useTranslation from '../hooks/useTranslation'
import PageHeader, { SubHeader } from './styles/PageHeader'
import ContactButton from './ContactButton'
import { BaseCardStyles } from './styles/Card';
import styled, { css, keyframes } from 'styled-components';
import Button from './styles/button';
import { email as emailRegEx } from '../lib/regEx'
import { DisplayError, DisplaySuccess } from './UserMessage';
import { LoadingSpinner } from './styles/LoadingSpinner';

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
        margin-bottom: -3px;
        color: hsl(0, 0%, 35%);
        font-size: 16px;
        font-family: monospace;
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
      input:invalid,
      textarea:invalid {
        border: ${props => props.invalid && '2px solid hsl(350, 70%, 50%, 100%)'};
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
    msg: string
  }
}

const Contact = () => {
  const { t } = useTranslation()
  const [toggle, setToggle] = useState(false);
  const [validate, setValidate] = useState({
    target: null
  })
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
  const checkValidity = () => {
    if (!emailRegEx.test(messageProps.email)) {
      setStatus({
        ...status,
        info: {
          error: true,
          msg: t('common')['error_InvalidEmail']
        }
      })
      setValidate({ target: 'email' })
      return false;
    }
    if (messageProps.name == '') {
      setValidate({ target: 'name' })
      return false;
    }
    if (messageProps.message == '') {
      setValidate({ target: 'message' })
      return false;
    } else {
      return true
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: '' }
    })
    if (!checkValidity()) {
      setStatus({
        ...status,
        info: {
          error: true,
          msg: t('common')['error_InvalidForm']
        }
      })
      return;
    }/*
    if (!emailRegEx.test(messageProps.email)) {
      setStatus({
        ...status,
        info: {
          error: true,
          msg: t('common')['error_InvalidEmail']
        }
      })
      return;
    }  */else {
      const res = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageProps)
      })
      const text = await res.text()
      handleResponse(res.status, text)
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
              <input type="text" name="name" onChange={handleInput} value={messageProps.name} />
              <label htmlFor="email">
                {t('contactFormEmail')}
              </label>
              <input type="text" name="email" onChange={handleInput} value={messageProps.email} />
              <label htmlFor="message">
                {t('contactFormMessage')}
              </label>
              <textarea name="message" onChange={handleInput} value={messageProps.message} />
            </fieldset>
            {!status?.submitting && <Button>
              {t('contactFormButton')}
            </Button>}
            {status?.submitting && <LoadingSpinner />}
            {status.info.error && <DisplayError error={{ message: status.info.msg }} />}
            {!status.info.error && status.info.msg && <DisplaySuccess message={status.info.msg} />}
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