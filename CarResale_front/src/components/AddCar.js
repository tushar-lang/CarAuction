import React, { useState } from "react";

function AddCar() {
  const [car, setCar] = useState({
    name: "",
    odometer: "",
    year: "",
    description: "",
    url:"img/Cars/inprogress.jpeg"
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(car);
    setIsSubmitted(true); // do something with the car data
    {isSubmitted ? <div>Car Added sucessfully</div> : "There is some problem in adding car"}


};

  const addcar = () => {
  
    const name = document.getElementById("name").value
    const year = document.getElementById("year").value
    const odometer = document.getElementById("odometer").value
    const description = document.getElementById("description").value

    if(name && year && odometer&&description){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name": name,
          "odometer": odometer,
          "year": year,
          "description": description,
          "url": "img/Cars/inprogress.jpeg" 
      })
    };
    fetch('https://api-car-aution.onrender.com/addcar', requestOptions)
      .then(response => response.json())
  }
}

  return (
    <div className="main-content">
      <div className="login-form">
      <div className="title">  Add Car</div>
        <form onSubmit={handleSubmit}>
          <label>
            Name :
            <input
              type="text"
              name="name"
              value={car.name}
              id="name"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Odometer:
            <input
              type="text"
              name="odometer"
              id="odometer"
              value={car.odometer}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Year:
            <select
              type="text"
              name="year"
              value={car.year}
              id="year"
              onChange={handleChange}
            >
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1994">1995</option>
              <option value="1995">1996</option>
              <option value="1996">1997</option>
              <option value="1997">1998</option>
              <option value="1998">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              className="lDescription"
              name="description"
              id="description"
              value={car.description}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit" onClick={addcar}>Add Car</button>
        </form>
      </div>
    </div>
  );
}

export default AddCar;
