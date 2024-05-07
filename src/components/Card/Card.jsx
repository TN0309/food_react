import React from 'react'
import './Card.scss'

function Card({item}) {
  return (
    <div className='my_card'>
        <img src={item.img} alt="" />
        <h4>{item.title}</h4> <br />
        <span>{item.price} som</span>
    </div>
  )
}

export default Card
