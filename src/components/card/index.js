import React from "react";

const Card = ({ people }) => {
  return (
    <div>
      <img src={people.photo} alt={people.name} />
      <p>{people.name}</p>
    </div>
  );
};

export default Card;
