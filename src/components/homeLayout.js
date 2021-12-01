import React from "react";

import Header from "./Header";
import Footer from "./footer";
import reactDom from "react-dom";


const Homelayout=({children})=>{
return(
    <div className="home-container">
<Header></Header>
<div style={{height:"75%"}}>
{children}
</div>
<Footer></Footer>
    </div>
)} 

export default Homelayout;
