

import React from 'react';
import "./Body.css";
import Login from "./Login";
import Signup from "./Signup";
import {Routes ,Route} from "react-router-dom";
import Showweather from './Showweather';
const Body = () => {
  return (
    <div className="container">
    <Routes>
      <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
     </Routes>
  
  <Showweather/>





    </div>
  )
}

export default Body;