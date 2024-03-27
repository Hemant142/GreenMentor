import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import LoginPage from '../Components/LoginPage'


const PrivateRoutes = ({children}) => {
  const isAuth = useSelector((store)=>store.authReducer.isAuth)

  if(!isAuth){
    return <LoginPage />
  }
  return (
    children
  )
}

export default PrivateRoutes