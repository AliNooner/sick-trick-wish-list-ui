import React, { Fragment } from 'react';
import Card from './Card';
import './Tricks.css';

const Tricks = ({allTricks}) => {

  const trickCards = allTricks.map(trick => {
    return (
      <Card
        name={trick.name}
        stance={trick.stance}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
        id={trick.id}
        key={trick.id}
      />
    )
  })

  return (
    <div className='tricks-container'>
    {trickCards}
    </div>
  )
}




export default Tricks;
