import React from 'react'

type Action =
  | { type: 'open'; alert: { message: string; type: AlertType } }
  | { type: 'close' }
type Dispatch = (action: Action) => void
type State = {
  isOpen: boolean
  type: AlertType
  header?: string
  message: string
  links?: [string]
  accent?: boolean
  dismissible?: boolean
}
type AlertProviderProps = { children: React.ReactNode }

export enum AlertType {
  Success = 'SUCCESS',
  Info = 'INFO',
  Error = 'ERROR',
  Warning = 'WARNING',
}

const AlertStateContext = React.createContext<State | undefined>(undefined)
const AlertDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
)

function alertReducer(state, action) {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        isOpen: true,
        message: action.message,
        accent: action.accent,
        dismissible: action.dismissable,
        links: action.links,
        header: action.header,
        type: action.type,
      }
    case 'close':
      return {
        type: '',
        message: '',
        isOpen: false,
        dismissible: false,
        accent: false,
        header: undefined,
        links: undefined,
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function useAlertState() {
  const context = React.useContext(AlertStateContext)
  if (context === undefined) {
    throw new Error('useAlertState must be within a AlertProvider')
  }
  return context
}
export function useAlertDispatch() {
  const context = React.useContext(AlertDispatchContext)
  if (context === undefined) {
    throw new Error('useAlertDispatch must be within a AlertProvider')
  }
  return context
}

export const AlertProvider: React.FC = ({ children }: AlertProviderProps) => {
  const [state, dispatch] = React.useReducer(alertReducer, {
    isOpen: false,
    type: '',
    message: '',
    dismissible: false,
    accent: false,
  })
  return (
    <AlertStateContext.Provider value={state}>
      <AlertDispatchContext.Provider value={dispatch}>
        {children}
      </AlertDispatchContext.Provider>
    </AlertStateContext.Provider>
  )
}
