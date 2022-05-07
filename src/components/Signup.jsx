
import React ,{useState,useEffect,useContext}from 'react';
import "./Signup.css";
import {Link} from "react-router-dom";
import axios from 'axios';

import {Usercontext} from "../context/Usercontext";




const initialState={
    name:'',
    email: '',
    mobile:"",
  password:"",
  city: '',
}





const Signup = () => {

  const [user,setUser]=useState(initialState);

  const {updateuserdata}=useContext(Usercontext);


  const inputevent=(e)=>{
      const{name,value}=e.target;
      setUser({...user,[name]:value})
  }

  const handlesubmit=()=>{
      console.log(user)
      updateuserdata(user);
     //getUser();
  }

   useEffect(()=>{
   
     Signupuser()
       
   },[])

     
  
   const Signupuser=()=>{
    axios.post('http://localhost:3004/users', {userdetail:user})
    .then(function (response) {
      console.log(response.data)
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }
 


  async function getUser() {
    try {
      const response = await axios.get('http://localhost:3004/users');
      console.log(response.data,"dattaaa");
    } catch (error) {
      console.error(error);
    }
  }
     



  return (
    <div className="form">

   <label >Name</label><br/>
   <input type="text" name="name" onChange={inputevent} placeholder="enter Your name"/><br/>
   <label>Email</label><br/>
   <input type="email" name="email" onChange={inputevent} placeholder="enter Your Email"/><br/>
   <label>Mobile</label><br/>
   <input type="number" name="mobile" onChange={inputevent} placeholder="enter Your Mobile"/><br/>
   <label>Password</label><br/>
   <input type="password" name="password" onChange={inputevent} placeholder="enter Your password"/><br/>
   <label>City</label><br/>
   <input type="text" name="city" onChange={inputevent} placeholder="Enter Your City"/><br/>
    <button type="submit" className="signup-btn" onClick={handlesubmit} >Signup</button><br/>
     <span className="signup-text">Already Registered?</span><Link to="/login" style={{color:"red",textDecoration:"none"}}> Just Login</Link>
    </div>

  )
}

export default Signup;

