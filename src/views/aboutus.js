import React from "react";
import Aboutlayout from "../components/aboutlayout";
import black from "../Assets/black.jpg";


const About = () => {
    return (
        <div className="about-container">
            <Aboutlayout>

                <div className="fgh">
                    <ul>
                        <li>Explore with Rwanda Booking tours</li>
                        <li>At the Heart of Africa</li>
                    </ul>
                </div>
                <div className="main">

                    <div className="introduction">
                        <p>
                            Known as the land of a thousand hills,
                            Rwanda’s stunning scenery and warm,
                            friendly people offer unique experiences in one
                            of the most remarkable countries in the world.
                            It is blessed with extraordinary biodiversity,
                            with incredible wildlife living throughout its volcanoes,
                            montains, rainforest and sweeping plains.



                            Travellers come from far and wide to
                            catch a glimpse of the magnificent gorillas,
                            yet there is so much more to see and experience.

                        </p>
                        <p>Rwanda Booking tours offers the opportunity to explore the ever green 
                            Rwanda a country of thousand hills. You can book a ticket for tours, 
                            and we surely help you with hotel room reservation. More importantly,
                            We have expert tour guiders who make your tour unforgettable!
                         </p>

                    </div>
                    <h1>Discover the land of thousand hills</h1>
                  <div className="pictures">
                    { <img src= "https://images.pexels.com/photos/7624837/pexels-photo-7624837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
                      <img src={black}/>
                      {<img src="https://images.pexels.com/photos/6796901/pexels-photo-6796901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>}

                    </div>
                    <div className="pictures">
                    { <img src= "https://images.pexels.com/photos/4577567/pexels-photo-4577567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />}
                      <img src= "https://images.pexels.com/photos/1069710/pexels-photo-1069710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                      {<img src="https://images.pexels.com/photos/1427744/pexels-photo-1427744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>}

                    </div>



                </div>




            </Aboutlayout>
        </div>


    )
}
export default About;