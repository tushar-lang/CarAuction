import React from "react";
import Cars from "./Cars";
import 'animate.css';

const About = (props) => (
  <div className="main-content">
    <h2 >{props.title}</h2>
    <p>
      Car resale application is a software platform that enables users to buy
      and sell used cars online. The application provides a marketplace where
      individuals or dealerships can list their used cars for sale, and
      interested buyers can browse the listings and make offers.
    </p>
    <p>The features of a car resale application typically include:</p>
    <ol>
      <li>User registration: Users can create accounts on the platform and provide their personal details</li>
      <li>Car listing: Sellers can list their used cars by providing the make and model, year of manufacture, mileage, condition, and price</li>
      <li>Car search: Buyers can search for used cars based on their preferences, such as make and model, year of manufacture, price range, and location.</li>
      <li>Car details: The application provides detailed information about each car listed for sale, including photos, descriptions, and vehicle history reports.</li>
      <li>Offer and negotiation: Buyers can make offers on the cars they are interested in, and sellers can negotiate the price and terms of the sale.</li>
     
    </ol>
    <img className="aboutImage" src="img/CarResaleLogo.gif" alt="car" />
    
    

  </div>
);


export default About;
