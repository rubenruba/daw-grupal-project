import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.sass';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/Login/login';
import { RegisterPage } from './pages/Register/register';
import { LandginPage } from './pages/Landing/landing';
import { CreatePostPage } from './pages/CreatePost/createpost';
import { PostPage } from './pages/Post/post';
import { Favorites } from './pages/SearchAndFavorites/search_favorites';
import { AdminUsersPage } from './pages/AdminUsers/adminUsers';
import { UserSettingsPage } from './pages/UserSettings/userSettings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <LandginPage/> } />
      <Route path="login" element={ <LoginPage/> } />
      <Route path="register" element={ <RegisterPage/> } />
      <Route path="create-post" element={ <CreatePostPage/> } />
      <Route path="post" element={ <PostPage/> } />
      <Route path="search-and-favorites" element={ <Favorites/> } />
      <Route path="admin-users" element={ <AdminUsersPage/> } />
      <Route path="user-settings" element={ <UserSettingsPage/> } />
  </Routes>
</BrowserRouter>
);