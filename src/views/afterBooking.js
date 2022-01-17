import { Header } from 'antd/lib/layout/layout';
import React from 'react'
import Aboutlayout from "../components/aboutlayout";

const afterBooking = () => {
    return (
        <Aboutlayout>

            <div className="fgh">
                <ul>
                    <li>Thank you for choosing to travel with Rwanda booking tours.</li>
                    <li>  You have successfully booked your tour,</li>
                    <li>  and futher updates will be communicated soon.</li>
                </ul>
            </div>
            <div className='additionalContents'>
<div className='additionalService'>
<p> Rwanda booking tours is really excited to have a trip with you! We offer free guiders, tents, and meal package. Your hapiness is our mission; Let us mark those memories that will never die! </p>

</div>
                
                <div className='Photos'>
{<img src="  https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>}
{<img src=" https://images.pexels.com/photos/6324179/pexels-photo-6324179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 "/>}          
{<img src="https://images.pexels.com/photos/3758132/pexels-photo-3758132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>}  
                </div>

            </div>

        </Aboutlayout>
    );
}

export default afterBooking;