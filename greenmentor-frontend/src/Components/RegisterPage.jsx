import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { register } from "../Redux/authReducer/action";

const RegisterPage = () => {
    const [name,setName] = useState("")
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (e)=>{
        e.preventDefault()
        console.log(name,username,email,password)
        let user= {
            name,username,email,password
        }
       
        if(name && username && email && password){
            dispatch(register(user)).then((res)=>{
                if(res.message==="User created successfully!"){
                    alert(res.message)
                    navigate('/login')
                }else{
                    alert(res.message)
                    return
                }
            })
        }else{
            alert("Input fields are required!")
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center">  
      <div className="bg-custom-pink pt-6 pl-8 pr-8 pb-10 rounded-t-custom-border-radius shadow-md w-full sm:w-96">
        <h2 className="text-2xl text-custom-green font-bold mb-8 ">Register</h2>
        <form onSubmit={(e)=>handleRegister(e)}>
        <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-custom-green text-sm font-medium "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-green"
              placeholder="Enter your Name"
              required
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-custom-green text-sm font-medium "
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-green"
              placeholder="Enter your username e.g. john123"
              required
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-custom-green text-sm font-medium "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-green"
              placeholder="Enter your email"
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-custom-green text-sm font-medium "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-green"
              placeholder="Enter your password"
              required
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-custom-darkpink mt-2 text-white  p-2 w-full rounded-md font-bold hover:rounded-full focus:outline-none focus:ring focus:border-custom-green"
          >
            Register
          </button>
        </form>
        <p className="block text-custom-green text-sm font-medium pt-4 pl-1">
          Already have an account ?{" "}
          <Link
            className="text-custom-green hover:text-white hover:font-bold"
            to={"/login"}
          >
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
