import React, { Component } from "react";

function Cars(props) {
  let car = props.carDetails;
  return (
    
    
    <div>
    <div className="card">
      <div>
        <img src={car.url} alt="car"></img>
      </div>
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      <h3>Vehicle Profile</h3>
      <ul>
        <li>
          <strong>Odometer:</strong> {car.odometer}{" "}
        </li>
        <li>
          <strong>Model:</strong> {car.year}
        </li>
      </ul>
      <button
        className="buttonAddCart"
        onClick={() => props.AddToCartButtonAction(car._id)}
      >
        <h4>Add to cart</h4>
      </button>
    </div>
    </div>
  );
}

export default Cars;
