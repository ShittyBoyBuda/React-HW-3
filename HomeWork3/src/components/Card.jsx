import React from 'react';

const Card = ({ id, title, description, level, onDelete }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Level: {level}</p>
      <button onClick={() => onDelete(id)}>Удалить</button>
    </div>
  );
};

export default Card;
