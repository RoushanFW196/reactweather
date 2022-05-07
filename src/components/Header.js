
import React ,{useState,useContext} from 'react';
import {Link} from "react-router-dom";
import {querycontext} from "../context/Querycontext";

const Header = () => {
  const[query,setQuery]=useState("")
  const{Queryupdate}=useContext(querycontext);
 console.log("hello");

 const handlesearch=(e)=>{
     e.preventDefault();
     console.log("query",query)
    Queryupdate(query);
 }



  return (
   
      <nav className="navbar navbar-dark bg-primary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">Weather App</Link>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setQuery(e.target.value)}/>
      <button className="btn btn-outline-success" type="submit" onClick={(e)=>handlesearch(e)}>Search</button>
    </form>
    <Link to="/login" className="navbar-brand">Login</Link>
    <Link to="/signup" className="navbar-brand">Signup</Link>
    <a href="#" className="navbar-brand">user</a>
  </div>
</nav>

  )
}

export default Header;