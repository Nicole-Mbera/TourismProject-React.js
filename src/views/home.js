import React from "react";
import "./home.css"
import Header from "../components/Header"
import Footer from "../components/footer"
import Homelayout from "../components/homeLayout";
import images from "../Assets/constants/home.json"



const Home = ({ data }) => {
    return (
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


                        {images.map((image) => (

                            <div className="container">
                                <img src={image.img} />
                                <ul>
                                    <p>{image.title}</p>
                                    <p> {image.location}</p>
                                </ul>
                            </div>

                        ))}





                    </div>



                </div>
            </Homelayout>

        </div>


    );
}

export default Home;
