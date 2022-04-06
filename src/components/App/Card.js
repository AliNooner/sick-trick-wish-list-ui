import React from 'react';
import './Card.css'

const Card = ({stance, name, obstacle, tutorial, id, deleteTrick}) => {
  return (
    <div className='card'>
      <h3>{stance} {name}</h3>
      <p>Obstacle: {obstacle}</p>
      <p>Tutorial: {tutorial}</p>
      <button onClick= {() => deleteTrick(id)}>trash bruh</button>
    </div>
  )
}





export default Card;
