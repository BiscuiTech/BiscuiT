import React, { useState } from 'react'
import useTranslation from '../hooks/useTranslation'
import PageHeader, { SubHeader } from './styles/PageHeader'
import { email as emailRegEx } from '../lib/regEx'
import { LoadingSpinner } from './styles/LoadingSpinner'
// import { useAlertDispatch, useAlertState, AlertType } from "../context/AlertContext";
// import useAlert, { EAlert } from "../hooks/useAlert";
import cn from 'classnames'

interface IStatus {
  submitted: boolean
  submitting: boolean
  info: {
    error: boolean
    msg: string
  }
}

const Contact = () => {
  // const dispatch = useAlertDispatch()
  // const alertState = useAlertState()
  const { t, locale } = useTranslation()
  const [validate, setValidate] = useState({
    target: null,
  })
  const [status, setStatus] = useState<IStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [messageProps, setMessageProps] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const handleResponse = (responseStatus, msg) => {
    if (responseStatus === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setMessageProps({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      })
      // setAlert({ type: EAlert.SUCCESS, isOpen: true, message: msg })
      // dispatch({
      //   type: 'open', alert: {
      //     message: msg,
      //     type: AlertType.Success
      //   }
      // })
    } else {
      setStatus({
        ...responseStatus,
        submitted: true,
        info: { error: true, msg: msg },
      })
      console.error('send-message error')
      // setAlert({ type: EAlert.ERROR, isOpen: true, message: msg })
      // dispatch({
      //   type: 'open', alert: {
      //     message: msg,
      //     type: AlertType.Error
      //   }
      // })
    }
  }
  const checkValidity = () => {
    if (!emailRegEx.test(messageProps.email)) {
      setStatus({
        ...status,
        info: {
          error: true,
          msg: t('common')['error_InvalidEmail'],
        },
      })
      setValidate({ target: 'email' })
      return false
    }
    if (messageProps.firstName == '' || messageProps.lastName == '') {
      setValidate({ target: 'name' })
      return false
    }
    if (messageProps.message == '') {
      setValidate({ target: 'message' })
      return false
    } else {
      return true
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: '' },
    })

    if (!checkValidity()) {
      setStatus({
        ...status,
        info: {
          error: true,
          msg: t('common')['error_InvalidForm'],
        },
      })
      // dispatch({
      //   type: 'open', alert: {
      //     message: t("common")["error_InvalidForm"],
      //     type: AlertType.Error
      //   }
      // })
      return
    } else {
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Language': locale,
        },
        body: JSON.stringify(messageProps),
      })
      const text = await res.text()
      handleResponse(res.status, text)
    }
  }
  const handleChange = (e) => {
    e.preventDefault()
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    setMessageProps({ ...messageProps, [name]: val })
  }
  return (
    <>
      <div className="my-12 overflow-hidden">
        <div className="px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="relative max-w-xl mx-auto">
            <svg
              className="absolute left-full transform translate-x-1/4"
              width="404"
              height="404"
              fill="none"
              viewBox="0 0 404 404"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="404"
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <svg
              className="absolute right-full bottom-0 transform -translate-x-1/4"
              width="404"
              height="404"
              fill="none"
              viewBox="0 0 404 404"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="404"
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <PageHeader>{t('header')}</PageHeader>
            <SubHeader>
              {t('subHeaderOne')}
              <br />
              <b>{t('subHeaderTwo')}</b>
            </SubHeader>
            <div className="mt-12">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-5 text-gray-200"
                  >
                    {t('contactFormFirstName')}
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="firstName"
                      name="firstName"
                      className={cn(
                        'form-input py-3 px-4 block w-full transition ease-in-out duration-150 bg-gray-900',
                        {
                          'input-error': status.info.error,
                          'border-gray-900': !status.info.error,
                        }
                      )}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-5 text-gray-200"
                  >
                    {t('contactFormLastName')}
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="lastName"
                      name="lastName"
                      className={cn(
                        'form-input py-3 px-4 block w-full transition ease-in-out duration-150 bg-gray-900',
                        {
                          'input-error': status.info.error,
                          'border-gray-900': !status.info.error,
                        }
                      )}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-200"
                  >
                    {t('contactFormEmail')}
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={cn(
                        'form-input py-3 px-4 block w-full transition ease-in-out duration-150 bg-gray-900',
                        {
                          'input-error': status.info.error,
                          'border-gray-900': !status.info.error,
                        }
                      )}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-5 text-gray-200"
                  >
                    {t('contactFormMessage')}
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={cn(
                        'form-textarea py-3 px-4 block w-full transition ease-in-out duration-150 bg-gray-900',
                        {
                          'input-error': status.info.error,
                          'border-gray-900': !status.info.error,
                        }
                      )}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2 mb-4 text-center">
                  <span className="w-full inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      className={cn(
                        'w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white   focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 border-gray-900',
                        {
                          'bg-red-700 hover:bg-red-500': status.info.error,
                          'bg-indigo-600 hover:bg-yellow-400': !status.info
                            .error,
                        }
                      )}
                      onClick={handleSubmit}
                    >
                      {status.submitting ? (
                        <LoadingSpinner />
                      ) : (
                        status.info.msg || t('contactFormButton')
                      )}
                    </button>
                  </span>
                  {status.submitted && status.info.error && (
                    <a
                      className="mx-auto border-indigo-600 border-b-2 text-lg"
                      href="mailto:tech@biscui.tech"
                    >
                      {t('contactFormSubmitError')}
                    </a>
                  )}
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
