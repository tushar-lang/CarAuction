import React, { useState } from "react";
import ReactDOM from "react-dom";
import users from "../data/users.js";
import { SignUps } from "./Signup";
// import React, { Component } from 'react';

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // User Login info
  const database = users;

  const errors = {
    username: "invalid username",
    password: "invalid password",
  };

 
 const handleSubmit = (event) => {
    event.preventDefault();
    var { username, password } = document.logins[0];
    const userData = database.find((user) => user.username === username.value);
    if (userData) {
      if (userData.password !== password.value) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  const login = () => {

    const inputusername = document.getElementById("username").value
    const inputpassword = document.getElementById("password").value
    
    if(inputusername && inputpassword){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "email": inputusername,
          "password": inputpassword 
      })
    };
    fetch('http://localhost:7000/login', requestOptions)
        .then(response => response.json())
        setIsSubmitted(true);
    }
    }
    
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            placeholder="Usernme@example.com"
            id="username"
            name="username"
            required
          />
          {renderErrorMessage("username")}
        </div>
        <div className="input-container">
          <label>password </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
            required
          />
          {renderErrorMessage("password")}
        </div>
        <div className="input-container">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary bg-dark"  type="submit" onClick={login}>
          Log in                  
        </button>
        <label htmlFor="createAccount" className="signup-link"></label>
        <a href="/signup" className="account-button">
          {" "}
          Don't have an account? Sign up
        </a>
      </form>
    </div>
  );

  return (
    <div className="main-content">
      <div className="login-form">
        <div className="title"> Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
