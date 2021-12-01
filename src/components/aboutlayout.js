import React from "react";
import Header from "./Header";
import Footer from "./footer";
import './aboutlayout.css';

const Aboutlayout= ({children})=>{

return( 
    <div className="aboutus-container">
<Header></Header>

<div style={{height:"75%"}}>
{children}
</div>
<Footer></Footer>


    </div>

     


)}


export default Aboutlayout;