import React from "react"
import "./footer.css";
import { LinkedinOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons';
import { TwitterOutlined  } from '@ant-design/icons';

const Footer = () => {
    return (
        <div className="footer">
            {/* <h3>&copy; Mbera Nicole</h3> */}
            <div className="footer-main">
                <div className="ourservices">
                    <h1> Our Services</h1>
                    <ul className="list"> <li>landscape Tours</li>
                        <li> cultural meseum tours</li>
                        <li>Kwita izina tours</li>
                        <li>Hotel room reservation</li>
                    </ul>



                </div>
                <div className="contact">
                    <h1> contact</h1>
                    <ul className="list"> <li> Tel: +250787543448</li>
                        <li> Emal:mberanicole@gmail.com</li>
                        <li> P.O.Box: Kigali 250</li>

                    </ul>



                </div>


                <div className="Adress">
                    <h1> Adress</h1>
                    <ul className="list"> <li> Kigali-Rwanda</li>
                        <li>  KN 737 St</li>
                        <li>2nd floor Kigali city tower</li>

                    </ul>



                </div>

                <div className="social-media">
                    <h1> follow us</h1>
                
                    <div className="media-container">
                    <div className="icon"><LinkedinOutlined /></div>
                    <div className="icon"><InstagramOutlined /></div>
                    <div className="icon"><TwitterOutlined /></div>

                    </div>
                </div>


            </div>



        </div>

    )

}
export default Footer;