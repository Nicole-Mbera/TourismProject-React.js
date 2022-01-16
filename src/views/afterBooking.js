import { Header } from 'antd/lib/layout/layout';
import React from 'react'
import Aboutlayout from "../components/aboutlayout";

const afterBooking = () => {
    return (
        <Aboutlayout>

            <div className="fgh">
                <ul>
                    <li>Explore with Rwanda Booking tours</li>
                    <li>At the Heart of Africa</li>
                </ul>
            </div>
            <div className="Message">
                <p>Thank you for choosing to travel with Rwanda booking tours. You have successfully booked your tour, and futher updates will be communicated via email.</p>
            </div>

        </Aboutlayout>
    );
}

export default afterBooking;