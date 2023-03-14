import React from 'react';
import './Card.css'; // Import CSS file for styling
function Card(props) {
    return (
      <div className="card">
        <img src={props.imageUrl} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    );
  }
  export default Card;

  