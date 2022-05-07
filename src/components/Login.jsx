

import React,{useState} from 'react';
import "./Signup.css";
import {Link} from "react-router-dom";
const initdata={
    email: '',
    password: '',
}


const Login = () => {
  const[data,setData]=useState(initdata);

    const inputevent=(e)=>{
        const{name,value}=e.target
       setData({...data,[name]:value})
    }

    const handlesubmit=()=>{
      console.log(data)
    }



  return (
    
  <div className="form">
<label>Email</label><br/>
<input type="email" name="email" onChange={inputevent} placeholder="enter Your Email"/><br/>

<label>Password</label><br/>
<input type="password" name="password" onChange={inputevent} placeholder="enter Your password"/><br/>

 <button type="submit" className="signup-btn" onClick={handlesubmit} >Login</button><br/>
  <span className="signup-text">Create Your Account?</span><Link to="/signup" style={{color:"red",textDecoration:"none"}}>Signup</Link>
 </div>




  )
}

export default Login;