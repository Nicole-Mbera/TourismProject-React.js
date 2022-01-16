import React,{useState} from 'react';
import '../components/aboutlayout';
import {Drawer} from "antd";
import "antd/dist/antd.css";
import SingleTour from './Single-tour';



const Tourcard=({data})=>{


        const[drawerVisble, setDrawervisble]= useState(false);
        const handleclickDrawerVisible=()=>{
            setDrawervisble(true);
        }

        const closeDrawervisble=()=>{
            setDrawervisble(false)
        }

      

    return(  <>
        <Drawer placement="left" visible={drawerVisble} width={730} onClose={closeDrawervisble}>
        <SingleTour data={ data}/>
                </Drawer>

    <div className= "tour-container">
        <div className="card">
            <div className="container">
                <img src={data.images[0]}/>
</div>
<div className="details">
    <h1 onClick={()=>handleclickDrawerVisible()}>{data.title}</h1>
    <p>{data.summary}</p>
         <div className="variables">
    <div><h2>Date:{data.dateScheduled}</h2></div>
       <div className="last-section"> <h2> Available seats:{data.available} </h2>

       <h3 className="more" onClick={()=>handleclickDrawerVisible()}>Read more...</h3></div>

        {/* <h1>Read more...</h1> */}
  
</div>
</div>
</div>
</div>
</>
 );
}

export default Tourcard;