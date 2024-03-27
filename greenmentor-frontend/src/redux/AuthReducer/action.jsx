import axios from "axios";
import { USER_LOADING } from "./actionType";

export const usersignup = (payload)=> (dispatch)=>{
    // console.log(payload,"Payloadf")
    dispatch({type:USER_LOADING})
    return axios.post("http://localhost:5500/users/register",payload)
}

export const userlogin = (data)=> (dispatch)=>{
    console.log(data)
    dispatch({type:USER_LOADING})
    return axios.post("http://localhost:5500/users/login",data)
}


export const userlogout = (token) => (dispatch)=> {
    dispatch({type:USER_LOADING});

    return axios.get("http://localhost:5500/users/logout",{
        headers:{
            "Authorization":token
        }})
}