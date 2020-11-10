import React from 'react'

 const Display=({msges,deleteitem})=> {
   
   const msglist=msges.length ?( msges.map(m => {
        return(                     // this is the return of the map method
            <div class="container " key={m.id}>
                <span onClick={()=>{deleteitem(m.id)}}>
                <h3>{m.msg}</h3> 
                </span>    
            </div>   
        )   
   })):(<p><h1>NOTHING TO DO</h1></p>)
   return(                        //this is the return statment of the render menthod
       <div class="container ">
           {msglist}
       </div>
   )
}

export default Display
