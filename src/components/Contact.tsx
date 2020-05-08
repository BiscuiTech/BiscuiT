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
    firstName: '',
    lastName: '',
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
        firstName: '',
        lastName: '',
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
    if (messageProps.firstName == '' || messageProps.lastName == '') {
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
  return (
    <>
      <div className="my-12 overflow-hidden">
        <div className="px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="relative max-w-xl mx-auto">
            <svg className="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404">
              <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            <svg className="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404">
              <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            {/* <div className="text-center">
              <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Contact sales
      </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
      </p>
            </div> */}
            <PageHeader>{t('header')}</PageHeader>
            <SubHeader>
              {t('subHeaderOne')}
              <br />
              <b>{t('subHeaderTwo')}</b>
            </SubHeader>
            <div className="mt-12">
              <form action="#" method="POST" className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium leading-5 text-gray-200">First name</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input id="firstName" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 bg-gray-900 border-gray-900" />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium leading-5 text-gray-200">Last name</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input id="lastName" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 bg-gray-900 border-gray-900" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-200">Email</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input id="email" type="email" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 bg-gray-900 border-gray-900" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium leading-5 text-gray-200">Message</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <textarea id="message" rows={4} className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150 bg-gray-900 border-gray-900"></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <span className="w-full inline-flex rounded-md shadow-sm">
                    <button type="button" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-yellow-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 bg-gray-900 border-gray-900" onClick={handleSubmit}>
                      {t('contactFormButton')}
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact