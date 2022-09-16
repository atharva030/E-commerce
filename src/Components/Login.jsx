
import React,{useState} from 'react'
import '../Styles/login.css'
import { useNavigate  } from "react-router-dom";
import { Link } from 'react-router-dom'
const Login = () => {


  return (


    <>
    <div className="background">
    <div className="shape"></div>
    <div className="shape"></div>
</div>
<form className='login-form'>
    <h3>Login Here</h3>
    <label htmlFor="email" >Email address</label>
    <input type="email"id="email" name="email" placeholder="Enter Your Email"  />

    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" name="password" placeholder="Enter your Password" id="password"/>

    <div style={{margin: "22px 0 4px 29px"}}>  Don't Have an Account? <Link to="/signup">Sign Up</Link> </div>
    <button className='login-button'>Log In</button>
  
</form>
</>
  )
}

export default Login