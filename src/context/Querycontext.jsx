
import React, { createContext ,useState} from "react";

export const querycontext=createContext();


 export const Querycontextprovider=({children})=>{
   const[query,setQuery]=useState("london");

 const Queryupdate=(data)=>{
   setQuery(data)
 }


     
    return(
   <querycontext.Provider value={{query,Queryupdate}}>{children}</querycontext.Provider>
    )
 };