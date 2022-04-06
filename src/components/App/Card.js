import React from 'react';
import './Card.css'

const Card = ({stance, name, obstacle, tutorial, id}) => {
  return (
    <div className='card'>
      <h3>{stance} {name}</h3>

      <p>Obstacle: {obstacle}</p>
      <p>Tutorial: {tutorial}</p>
    </div>
  )
}





export default Card;
