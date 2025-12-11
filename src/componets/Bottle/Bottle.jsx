import React from 'react';
import './Bottle.css'

const Bottle = ({ bottle }) => {
  const {
    id,
    category,
    name,
    seller,
    price,
    stock,
    ratings,
    ratingsCount,
    img,
    shipping,
    quantity
  } = bottle;

  return (
    <div className='bottle-card'>
      <img src={img} alt={name} />
      <h1>Bottle Name: {name}</h1>
      <p>Category: {category}</p>
      <p>Seller: {seller}</p>
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
      <p>Ratings: {ratings}</p>
      <p>Reviews: {ratingsCount}</p>
      <p>Shipping: ${shipping}</p>
      <p>Quantity: {quantity}</p>
      <button>Buy NOW ADD CART</button>
      {/* <p>ID: {id}</p> */}
    </div>
  );
};


export default Bottle;