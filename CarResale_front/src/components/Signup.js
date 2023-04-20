import React, { useState, useEffect } from "react";


const Signup = () => {
  const [message, setMessage] = useState('');

    const signupClick = (event) => {
      event.preventDefault();

      const firstName = event.target.elements.firstName.value || "";
      const lastName = event.target.elements.lastName.value || "";
      const email = event.target.elements.email.value || "";
      const password = event.target.elements.password.value || "";
      const confirmPassword = event.target.elements.confirmPassword.value || "";
     const statusMessage = document.querySelector("#statusMessage")

      statusMessage.style.color = 'red';

      if (firstName === "") {
        setMessage('Please enter first name');
        return
      } else if (lastName === "") {
        setMessage('Please enter last name');
        return
      } else if (email === "") {
        setMessage('Please enter email');
        return
      } else if (password === "") {
        setMessage('Please enter password');
        return
      } else if (password !== confirmPassword) {
        setMessage('Password and confirm password do not match');
        return
      } else {
        statusMessage.style.color = 'green';
        setMessage('Validation Successful');
      }

      const studentSignupRequest = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
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
              <label htmlFor="floatingInput">First Name</label>
              <input
                type="text" className="form-control" id="floatingInput" name="firstName"/>
              
            </div><br>
            </br>

            <div className="form-floating">
              <label htmlFor="floatingInput">Last Name</label>
              <input type="text" className="form-control" id="floatingInput" name="lastName"/>
              
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
          <div className="form-floating">
            <label htmlFor="floatingPassword">Confirm Password</label><br></br>
            <input type="password" className="form-control" id="floatingPassword" name="confirmPassword" />
            
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