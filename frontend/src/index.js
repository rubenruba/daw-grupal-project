import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.sass';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/Login/login';
import { RegisterPage } from './pages/Register/register';
import { LandginPage } from './pages/Landing/landing';
import { CreatePostPage } from './pages/CreatePost/createpost';
import { PostPage } from './pages/Post/post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <LandginPage/> } />
      <Route path="login" element={ <LoginPage/> } />
      <Route path="register" element={ <RegisterPage/> } />
      <Route path="create-post" element={ <CreatePostPage/> } />
      <Route path="post" element={ <PostPage/> } />
  </Routes>
</BrowserRouter>
);