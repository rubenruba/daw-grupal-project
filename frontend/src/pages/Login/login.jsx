import React, { useState } from 'react';
import "./login.sass";

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value); // Llama a la función de validación al cambiar el valor del correo electrónico
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(re.test(value)); // Valida el correo electrónico y actualiza el estado de validación
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales, como enviar los datos al servidor
    // console.log("Email:", email);
    // console.log("Password:", password);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-4 login-container">
      <form onSubmit={handleSubmit} className="p-3 sm-mx-300">
        <h2 className="fw-bold">SIGN IN</h2>
        <label>Email</label>
        <input
          type="text"
          className={`border-0 form-control ${!validEmail ? 'is-invalid' : ''}`}
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        {!validEmail && <div className="invalid-feedback">Correo electrónico inválido</div>}

        <label>Contraseña</label>
        <input
          type="password"
          className="border-0 form-control"
          name="password"
          value={password}
          onChange={handlePasswordChange}
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
