
import React from 'react'

const UserCityweather = () => {

  let a=7;
  return (
    <div style={{backgroundColor:"black",color:"white",textAlign:"center"}} >
      {/* <h1 ><em>Know Your city weather</em></h1> */}
     { a%2==0?<h1>hello</h1>: <h1 ><em>Know Your city weather</em></h1> }
    </div>
  )
}

export default UserCityweather;