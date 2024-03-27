import React from 'react'
import Cookies from 'js-cookie';
import Login from '../components/Auth/Login';
// import Login from '../pages/Login';
// import Login from '../Pages/Login';
const PrivateRoute = ({children}) => {
   const token = Cookies.get("login_token");
   return !token?<Login />:children
}

export default PrivateRoute
