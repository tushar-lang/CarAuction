import React, { useState, useEffect }  from "react";
import arraylist  from "./Home";
import Cars from "./Cars";
import Home from "./Home";

function Cart(props) {
  
  
  let count = props.count;

  const [cartdata, setCart] = useState(Home.arraylist)
  const [data, setdata] = useState(null)

 const handleDelete = (id) => {
    const updatedCartData = cartdata.filter((car) => {
      return car._id !== id
    });
    Home.arraylist = updatedCartData
    setCart(updatedCartData)

  };

  useEffect(()=> {
   
   const cart = cartdata.map((car) => {
      return (
        <div className="cart">
        <li className="cart" key={car._id}>
          <img className="cart-img" src={car.url} alt="cart" />
          <h3>{car.name}</h3>
          <p>{car.year}</p>
          <button name="Delete" onClick={() => handleDelete(car._id)}> 
            <i className="fas fa-trash-alt"></i> Delete
          </button>
        </li>
        </div>
      );
    });

setdata(cart)
console.log(cartdata.length)


  }, [cartdata])

  return (
    <div className="main-content">
      <h2>Cart Items : {cartdata.length}</h2>
      <ul className="group">{data}</ul>
      
    </div>
  );
}

export default Cart;
