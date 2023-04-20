import React from 'react';
import { NavLink , Link} from 'react-router-dom';

const Header = () => (
  <header class="animate__animated animate__bounce">
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/addcar">Add Car</NavLink></li>
      <li><NavLink to="/about">About us</NavLink></li>
      <li><NavLink to="/cart">Cart</NavLink></li>
      <li><NavLink to="/FutureAuctions">Future Auctions</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/signup">Signup</NavLink></li>

     
      <li className='linkmain-nav'>
      <Link exact to="/">
      <img  class="animate__animated animate__bounce" className="logo" src="img/app.ico" alt="car"></img>
        </Link>
        </li>
      
    </ul>    
  </header>
);

export default Header;