import React from "react";


const SingleTour = ({ data }) => {
    return (
        <div className="singletour-container">
            <h1>{data.title}</h1>

            <img src={data.images} />
                <p>{data.description [0]}</p>
                <div><h2>Date:{data.dateScheduled}</h2></div>
                <div> <h2> Available seats:{data.available}</h2></div>
                <button className="book" htmlType="submit"> <a href="/afterBooking">Book now</a></button>
                
        </div>
    )
}









export default SingleTour;