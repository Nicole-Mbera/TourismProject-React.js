import React from "react"
import Aboutlayout from "../components/aboutlayout"
import { LinkedinOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons';
import { TwitterOutlined  } from '@ant-design/icons';

const Contactus = () =>{
return(
    <Aboutlayout>
        
        <div className="fgh">
                    <ul>
                        <li>Explore with Rwanda Booking tours</li>
                        <li>At the Heart of Africa</li>
                    </ul>
                </div>


        <div className="contactus">
        <div class="map-responsive">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2041615.457967874!2d28.7589360887488!3d-1.9405376818070512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c29654e73840e3%3A0x7490b026cbcca103!2sRwanda!5e0!3m2!1sen!2srw!4v1637770902385!5m2!1sen!2srw" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
    </div>

<div className= "contactnow">

<div className= "message">
    <h1 className="Headers">Leave us a message</h1>
    <div className="email">
        <label for=" Email:"> Email:</label>
    <input type="email"></input></div>
    <div className="type">
    <label for="message"> Message:</label>
  <input></input>
  <button className="submit"> Submit</button>
    </div>

    </div>

    <div className= "our-contact">
          <h1 className="Headers"> Adress</h1>
        <ul>
        <li>Email: mberanicole@gmail.com</li>
        <li>Tel: +250787543448</li>
        <li> Office: 2nd foor Kigali city tower</li>
        <h1 className="Headers"> connect with us</h1>
        </ul>
        
        <div className="title"> Via our social medias: </div>
        <div className="social-media">
                    
                    <div className="medias">

                    <div className="icon"><a href="https://www.instagram.com/"><LinkedinOutlined /></a></div>
                    <div className="icon"><InstagramOutlined /></div>
                    <div className="icon"><TwitterOutlined /></div>

                    </div>
                </div>
    </div>
</div>

    

        </div>
    
    </Aboutlayout>
    
);

};

export default Contactus;