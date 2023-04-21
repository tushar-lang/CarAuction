import React, { useState, useEffect } from "react";


const Signup = () => {
  const [message, setMessage] = useState('');

    const signupClick = (event) => {
      event.preventDefault();

      const username = event.target.elements.username.value || "";
      const email = event.target.elements.email.value || "";
      const password = event.target.elements.password.value || "";
      const statusMessage = document.querySelector("#statusMessage")

      statusMessage.style.color = 'red';

      if (username === "") {
        setMessage('Please enter first name');
        return
      } else if (email === "") {
        setMessage('Please enter email');
        return
      } else if (password === "") {
        setMessage('Please enter password');
        return
      } else {
        statusMessage.style.color = 'green';
        setMessage('Submitted');
      }
      if(username && email && password){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "username":username,
            "email": email,
            "password": password 
        })
      };
      fetch('http://localhost:7000/signup', requestOptions)
          .then(response => response.json())
          setIsSubmitted(true);
      }
      

      const studentSignupRequest = {
        username,
        email,
        password,
      };

      authservice.signup(studentSignupRequest)
      .then(response => {
        let student = response.data
        console.log(student)
        event.target.reset()
        setMessage('User Created Successfully');

      })
      .catch(error => {
        statusMessage.style.color = 'red';
        console.log(error.response.data);
        setMessage(error.response.data);
      })
  }

  return (
    <div className="main-content">
      <div className="login-form">
        <form onSubmit={signupClick}>

          <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
          <div className="form-group">

            <div className="form-floating">
              <label htmlFor="floatingInput">Username</label><br></br>
              <input
                type="text" className="form-control" id="floatingInput" name="username"/>
              
            </div>
      

          </div>
          <div className="form-floating">
            <label htmlFor="floatingInput">Email</label><br></br>
            <input type="email" className="form-control" id="floatingInput" name="email"/>
            

          </div>
          <div className="form-floating">
            <label htmlFor="floatingPassword">Password</label><br></br>
            <input type="password" className="form-control" id="floatingPassword" name="password" />
            
          </div>
        
          <br />
          

          <input value="Submit" className="w-100 btn btn-lg btn-primary bg-dark" type="submit" />
        </form>

        <div id="statusMessage" style={{ color: 'red' }}>{message}</div>

      </div>
    </div>

  );
};
export default Signup;