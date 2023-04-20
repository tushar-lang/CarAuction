import React, { Component } from "react";
import Cars from "./Cars";
import AddCar from "./AddCar";
import Cart from "./Cart";

class Home extends Component {
  state = {
    cars: [],
    count: 0
    
  };
  static arraylist = []
  
  componentDidMount() {
    fetch("https://api-car-aution.onrender.com/getcars")
      .then(response => response.json())
      .then(data => {
        this.setState({ cars: data })
      })
      .catch(error => console.log(error));
  }

  add = (carsData) => {
    this.setState(state => ({

    }))
  }

  AddToCart = (id) => {
    const addCart = this.state.cars.filter((car) => car._id == id);
    Home.arraylist.push(addCart[0]);
    console.log(Home.arraylist);
    return Home.arraylist;
    // console.log(this.state.count)
  };

  

  searchByName = (searchTerm) => {
    fetch(`http://localhost:7000/getcars/${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ cars: data });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="main-content home">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              size="100"
              className="search-input"
              placeholder="Search Car by Brand.."
              onChange={(e) => this.searchByName(e.target.value)}
            />
          </label>
        </div>
        <div className="Carcontainer">
          {this.state.cars.map((car, index) => (
            <Cars
              carDetails={car}
              key={String(car._id)}
              AddToCartButtonAction={this.AddToCart}
              count= {this.state.count}
              handleDelete = {this.handleDelete}
            />
          ))}
        </div>
        {/* <Cart cartArray={Home.arraylist} handleDelete={this.handleDelete} /> */}
        <hr />
      </div>
    );
  }
}

export default Home;
