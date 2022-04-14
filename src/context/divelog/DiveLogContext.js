import { createContext, useReducer } from 'react'
import divelogReducer from './DiveLogReducer'

const DiveLogContext = createContext()

export const DiveLogProvider = ({ children }) => {
  const initialState = {
    diveData: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(divelogReducer, initialState)

  return (
    <DiveLogContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </DiveLogContext.Provider>
  )
}

export default DiveLogContext