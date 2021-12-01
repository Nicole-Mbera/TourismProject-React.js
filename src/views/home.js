import React from "react";
import "./home.css"
import Header from "../components/Header"
import Footer from "../components/footer"
import Homelayout from "../components/homeLayout";
import image from '../Assets/Antelope.jpg'; 
import sun from '../Assets/img.jpg';
import gorilla from '../Assets/rsz_gorilla.jpg';
import house from '../Assets/otherhouse.jpg';
import maldives from '../Assets/maldives.jpg';
import black from "../Assets/black.jpg";

const Home=()=>{
return(
    <div className="home-container">
    <Homelayout>

        <div className="home-bg">
            <h1> Rwanda Booking Tours</h1>
        </div>
        <div className="quote-div">
            <h2> Book a tour with us </h2>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Architecto explicabo officia accusamus perspiciatis magni laboriosam esse,
                 sit fuga tenetur aspernatur iusto inventore ipsam, 
                 voluptatibus earum cum itaque tempora sapiente illum!</p>
      </div> 
       <div className="place-container"><h1> Places to visit in Rwanda before you die!</h1>
            <div className="places">
                
               <div className="container">
                <img src={image}/>
                <ul> 
                    <p>Akagera National park tour</p>
                    <p> East Rwanda- Nyagatare</p>
                     </ul> 
               </div>

               
               <div className="container">
                <img src={sun}/>
                <ul> 
                    <p>Lake Kivu</p>
                    <p> West Rwanda- Rubavu</p>
                     </ul> 
               </div>

               <div className="container">
                <img src={gorilla}/>
                <ul> 
                    <p> Volcanoes park</p>
                    <p> North RWanda- Musanze</p>
                     </ul> 
               </div>


            </div> 
            <div className="place2">
            <div className="container">
                <img src={house}/>
                <ul> 
                    <p> Cultural meseum</p>
                    <p> South Rwanda- Rwanda</p>
                     </ul> 
               </div>

               <div className="container">
                <img src={maldives}/>
                <ul> 
                    <p> Kibuye beach Nights</p>
                    <p> West Rwanda- Karongi</p>
                     </ul> 
               </div>
               <div className="container">
                <img src= {black} />
                <ul> 
                    <p> Nyungwe Canopy walk</p>
                    <p> West Rwanda- Rusizi</p>
                     </ul> 
               </div>


            </div>



            </div>
            </Homelayout>
    
            </div>
   
   
);
} 

export default Home;
