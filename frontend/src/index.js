import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.sass';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/Login/login';
import { RegisterPage } from './pages/Register/register';
import { LandginPage } from './pages/Landing/landing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ '' } />
      <Route path="login" element={ <LoginPage/> } />
      <Route path="register" element={ <RegisterPage/> } />
  </Routes>
</BrowserRouter>
);