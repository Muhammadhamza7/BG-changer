import React, { useState } from 'react'

const BgColor = () => {

  const[color,setColor]=useState("White");
     
    
  return (
  
      <div style={{width:"100vw",height:"100vh",backgroundColor:color,display:"flex" ,justifyContent:"center",alignItems:"center"}}>
      <div style={{border:"solid 2px black", padding:"8px", backgroundColor:color}} >
        <button style={{ backgroundColor: "Green" ,margin:"4px"}} onClick={()=>setColor("Green")}>Green</button>
        <button style={{ backgroundColor: "Blue"  ,margin:"4px"}} onClick={()=>setColor("Blue")}>Blue</button>
        <button style={{ backgroundColor: "Cyan"  ,margin:"4px"}} onClick={()=>setColor("Cyan")}>Cyan</button>
        <button style={{ backgroundColor: "Pink"  ,margin:"4px"}} onClick={()=>setColor("Pink")}>Pink</button>
        <button style={{ backgroundColor: "White" ,margin:"4px"}} onClick={()=>setColor("White")}>White</button>
        <button style={{ backgroundColor: "Black" ,margin:"4px",color:"whitesmoke"}} onClick={()=>setColor("Black")}>Black</button>
        <button style={{ backgroundColor: "Violet",margin:"4px" }}onClick={()=>setColor("Violet")}>Violet</button>
        <button style={{ backgroundColor: "Grey"  ,margin:"4px" }} onClick={()=>setColor("Grey")}>Grey</button>
        <button style={{ backgroundColor: "Yellow",margin:"4px" }}onClick={()=>setColor("Yellow")}>Yellow</button>
        <button style={{ backgroundColor: "Red"   ,margin:"4px"}}  onClick={()=>setColor("Red")}>Red</button>
      </div>
      </div>
  
  )
}

export default BgColor