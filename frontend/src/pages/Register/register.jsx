import React, { useState } from "react";
import "./register.sass";

export const RegisterPage = () => {
  // JS
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const validateEmail = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(re.test(email));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // HTML
  return (
    <div className="register-container d-flex align-items-center justify-content-center">
      <form action="" className="p-3 sm-mx-300">
        <h2 className="fw-bold">REGISTER NOW</h2>
        <label className="">Name</label>
        <input className="form-control" type="text" />
        <label>SurName</label>
        <input className="form-control" type="text" />
        <label>Password</label>
        <input className="form-control" type="text" />
        <label>UserName</label>
        <input className="form-control" type="text" />
        <label>Email</label>
        <input className="form-control" type="text" />
        <button className="btn btn-primary btn-md">Register</button>
        <a href="" className="mt-4">¿Ya tienes una cuenta?</a>
      </form>
    </div>
  );
};