import React from 'react';
import Homelayout from '../components/aboutlayout';
import Tourcard from '../components/tourcard';
import allToursData from "../Assets/constants/tours.json";
import Aboutlayout from '../components/aboutlayout';


const Tours=()=>{
    return (
        
<Aboutlayout>
<div className="fgh">
                      <ul> 
                          <li>Explore with Rwanda Booking tours</li>
                           <li>At the Heart of Africa</li>
                      </ul>
                  </div>
<div className= "tour-container">
            
            {
                allToursData.map((data) => (<Tourcard data={data}/>))
                }
             
</div>

</Aboutlayout>
    
    )}

export default Tours;