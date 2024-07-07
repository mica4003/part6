import React, {createContext, useReducer, useContext} from 'react'

const NotificationContext = createContext()

const notificationReducer = (state, action) =>{
  switch(action.type){
    case 'SET_NOTIFICATION':
      return action.payload
    case 'CLEAR_NOTIFICATION':
      return ''
    default:
      return state
  }
}

export const NotificationProvider = ({children}) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, '')
  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = ()=>{
  const context = useContext(NotificationContext)
  return context
}