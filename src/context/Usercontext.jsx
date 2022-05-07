
import {createContext,useState} from "react";

export const Usercontext=createContext("Usercontext");


export const Usercontextprovider=({children})=>{

 const[data,setData]=useState([]);
   
 const updateuserdata=(user)=>{
     setData(user)
 }
   

    return(
        <Usercontext.Provider value={{data,updateuserdata}}>{children}</Usercontext.Provider>
    )

}