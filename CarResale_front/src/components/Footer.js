import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink exact to="/about">About Us</NavLink></li>
    </ul>    
  </header>
);

export default Footer;