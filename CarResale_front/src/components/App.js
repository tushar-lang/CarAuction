import React from 'react';
import { Route, Routes } from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Login from './Login';
import AddCar from './AddCar'
import Footer from './Footer';
import FutureAuctions from './FutureAuctions'
import Signup from './Signup';

const App = () => (

    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About title="About Us" />} />
        <Route path="/cart" element={<Cart  cartArray={Home.arraylist}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/FutureAuctions" element={<FutureAuctions />} />
      </Routes>
      <Footer/>
    </div>
);

export default App;
