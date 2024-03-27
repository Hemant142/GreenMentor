import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../Redux/authReducer/action'


const LoginPage = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (e)=>{
        console.log(email,password)
       e.preventDefault()
       let user = {
        email, password
      }
      if(user && password){
        dispatch(login(user)).then((res)=>{
          if(res.message==="Login successful!"){
           
            alert(res.message)
            navigate('/tasks')
          }else{
            alert(res.message)
            return
          }
        })
      }else{
        alert("Input Fields are required!")
      }
    }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-custom-pink pt-6 pl-8 pr-8 pb-10 rounded-t-custom-border-radius shadow-md w-full sm:w-96">
        <h2 className="text-2xl text-custom-green font-bold mb-8 ">Login</h2>
        <form onSubmit={(e)=>handleLogin(e)}>
          <div className="mb-5">
            <label htmlFor="email" className="block text-custom-green text-sm font-medium ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-green"
              placeholder="Enter your email"
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-custom-green text-sm font-medium ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-green"
              placeholder="Enter your password"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            
            className="bg-custom-darkpink mt-2 text-white  p-2 w-full rounded-md font-bold hover:rounded-full focus:outline-none "
          >
            Login
          </button>
        </form>
        <p className='block text-custom-green text-sm font-medium pt-4 pl-1' >Do not have an account ? <Link className='text-custom-green hover:text-white hover:font-bold' to={'/register'}>Register Here</Link></p>
      </div>
     
    </div>
  )
}

export default LoginPage