import React from 'react'
import { useContext } from 'react'
import { UserContext } from './ContextProvider'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
    const {isLogin} = useContext(UserContext)
  return (
    isLogin? children : <Navigate to="/login" />
  )
}