import React from 'react'
import "./card.css"


const Card = ({ details }) => {
    const { name, price, speed, limit } = details
    return (
        <div className='cardContainer'>
            <div className='name'>{name}</div>
            <div className='price'>{price} </div>
            <div>{speed}</div>
            <div>{limit}</div>
        </div>


    )
}

export default Card