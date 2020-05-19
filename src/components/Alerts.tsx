import React from "react";
import { useAlertState, AlertType } from "../context/AlertContext";
import styled from 'styled-components'

const BaseAlertStyles = styled.div``

const WarningAlert = ({ message }) => (
  <div className="rounded-md bg-yellow-50 p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ml-3">
        <h3 className="text-sm leading-5 font-medium text-yellow-800">
          {/* {t('common')['alertWarningHeader']} */}
        </h3>
        <div className="mt-2 text-sm leading-5 text-yellow-700">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </p>
        </div>
      </div>
    </div>
  </div>
)

const ErrorAlert = () => (
  <div className="rounded-md bg-red-50 p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ml-3">
        <h3 className="text-sm leading-5 font-medium text-red-800">
          There were 2 errors with your submission
      </h3>
        <div className="mt-2 text-sm leading-5 text-red-700">
          {/* <ul className="list-disc pl-5">
          <li>
            Your password must be at least 8 characters
          </li>
          <li className="mt-1">
            Your password must included at least one pro wrestling finishing move
          </li>
        </ul> */}
        </div>
      </div>
    </div>
  </div>
)

const Alerts = () => {
  const state = useAlertState()
  switch (state.type) {
    case AlertType.Error:
      return <ErrorAlert />
    /*     case AlertType.Sucess:
          return <SucessAlert />
        case AlertType.Warning:
          return <WarningAlert />
        case AlertType.Info:
          return <InfoAlert /> */
    default: {
      throw new Error(`Unhandled alert type: ${state.type}`)
    }
  }
};

export default Alerts;
