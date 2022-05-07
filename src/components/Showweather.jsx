import React, { useState,useEffect,useContext } from "react";
import {querycontext} from "../context/Querycontext";
import "./showweather.css";
import axios from "axios";

const Showweather = () => {
  const [data, setData] = useState();
  const {query}=useContext(querycontext);
  console.log(query,"weathercityquery")
  useEffect(()=>{
    getweather();
  },[query])

  const getweather = () => {
   
    axios.get(`http://api.weatherapi.com/v1/current.json?key=a8bf5aa6a4e141e5a0612124221103&q=${query}&aqi=no`)
             .then((res) => setData(res.data))
              .catch((err) => console.log(err));
  };



  return <div className="showweather-container">
       <h3> Location:{data?.location?.name} ,{data?.location?.country}</h3> 
         <img src={data?.current?.condition?.icon}/>
        <p> temp:{data?.current?.temp_c}C</p>
        <p>wind:{data?.current?.wind_kph} km/hr</p>
         <p>Date/Time:{data?.location?.localtime}</p>
  </div>;
};

export default Showweather;
