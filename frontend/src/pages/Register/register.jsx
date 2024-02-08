import React, { useState } from "react";
import "./register.sass";

export const RegisterPage = () => {
  // JS
  //Username validation
  const [username, setUserName] = useState("");
  const [validUsername, setValidUsername] = useState(true);
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const validateUsernameLength = () => {
    const minLength = 3;
    const maxLength = 20;
    const numbers = /^[0-9]+$/;
    if (numbers.test(username.substring(0, 1))) {
      setValidUsername(false);
    } else if (numbers.test(username.substring(1, 2))) {
      setValidUsername(false);
    } else if (numbers.test(username.substring(2, 3))) {
      setValidUsername(false);
    } else {
      setValidUsername(
        username.length >= minLength && username.length <= maxLength
      );
    }
  };

  //Password validation
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const validatePasswordLength = () => {
    const minLength = 8;
    const maxLength = 20;
    setValidPassword(
      password.length >= minLength && password.length <= maxLength
    );
  };

  //Email validation
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const validateEmail = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(re.test(email));
  };

  //Submit button
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // HTML
  return (
    <div className="register-container d-flex align-items-center justify-content-center">
      <form action="" className="p-3 sm-mx-300">
        <h2 className="fw-bold">REGISTER NOW</h2>
        <label className="">Name</label>
        <input 
        id="name"
        className="form-control" 
        type="text" />
        <label>SurName</label>
        <input className="form-control" type="text" />
        <label>Password</label>
        <input
          id="password"
          value={password}
          className={`form-control ${!validPassword ? "is-invalid" : ""}`}
          onChange={handlePasswordChange}
          onBlur={validatePasswordLength}
          type="password"
        />
        {!validPassword && (
          <div className="invalid-feedback">
            Password has to be between 8 and 20 characters
          </div>
        )}
        <label>UserName</label>
        <input
          id="username"
          className={`form-control ${!validUsername ? "is-invalid" : ""}`}
          value={username}
          onChange={handleUserNameChange}
          onBlur={validateUsernameLength}
          type="text"
        />
        {!validUsername && (
          <div className="invalid-feedback">
            The username has to be between 3 and 20 characters and the first 3 characters musn't be numbers
          </div>
        )}
        <label>Email</label>
        <input
          id="email"
          className={`form-control ${!validEmail ? "is-invalid" : ""}`}
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail}
          type="email"
        />
        {!validEmail && (
          <div className="invalid-feedback">Email is not valid</div>
        )}
        <button className="btn btn-primary btn-md">Register</button>
        <a href="#" className="mt-4">
          ¿Ya tienes una cuenta?
        </a>
      </form>
    </div>
  );
};