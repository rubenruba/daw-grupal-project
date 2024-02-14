import React, { useState } from 'react';
import "./login.sass";

export const LoginPage = () => {
  // JS
  const url = 'http://ec2-52-200-109-82.compute-1.amazonaws.com/testFinalProjects/new/auth/login.php';
  const [validEmail, setValidEmail] = useState(true);

  const validateEmail = (event) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(regex.test(event.target.value)); // Valida el correo electrónico y actualiza el estado de validación
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validEmail === true) e.target.submit();
  };

  // HTML
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-4 login-container">
      <form action={url} onSubmit={(e) => handleSubmit(e)} method='post' className="p-3">
        <h2 className="fw-bold">SIGN IN</h2>
        <label>Email</label>
        <input type="text"
          className={`border-0 form-control ${!validEmail ? 'is-invalid' : ''}`}
          name="email"
          onBlur={(e) => validateEmail(e)}
        />
        {!validEmail && <div className="invalid-feedback">Correo electrónico inválido</div>}

        <label>Contraseña</label>
        <input
          type="password"
          className="border-0 form-control"
          name="password"
        />

        <label className="mt-3 mb-3">
          <a href="#">Olvidaste tu contraseña?</a>
        </label>
        <label className="mb-3">
          <a href="/register">No tienes cuenta? Regístrate ahora</a>
        </label>

        <button type="submit" className="btn btn-primary btn-md w-50">
          Log in
        </button>
      </form>
    </div>
  );
};
