import React from "react";
import { useState } from "react";

function ListingCard({id, description, image, location}) {

const [favorite, setFavorite] = useState(false)

function handleClick() {
  setFavorite(!favorite)
  console.log(favorite)
}

function handleDelete() {
  console.log(id)
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE"
  })
  //console.log(listings)
}


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
