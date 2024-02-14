import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.sass";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/Login/login";
import { RegisterPage } from "./pages/Register/register";
import { LandginPage } from "./pages/Landing/landing";
import { CreatePostPage } from "./pages/CreatePost/createpost";
import { Favorites } from "./pages/SearchAndFavorites/search_favorites";
import { AdminUsersPage } from "./pages/AdminUsers/adminUsers";
import { UserSettingsPage } from "./pages/UserSettings/userSettings";
import { PostPage } from './pages/Post/post';
import { NotFoundPage } from './pages/NotFound/NotFound';
import { ResetPasswordPage } from './pages/ResetPassword/resetpassword';
import { ContactUs } from './pages/ContacUs/contactus';

const urlLogged = "http://ec2-54-208-219-192.compute-1.amazonaws.com/testFinalProjects/new/auth/isLogged.php";
const urlAdmin = "http://ec2-54-208-219-192.compute-1.amazonaws.com/testFinalProjects/new/auth/isAdmin.php";
const cookies = document.cookie.split(";");

let userId;

cookies.forEach((cookie) => {
  if (cookie.includes("userId")) userId = cookie.split("=")[1];
});

Promise.all([
  fetch(`${urlLogged}?userId=${userId}`, { method: "GET" }),
  fetch(`${urlAdmin}?userId=${userId}`, { method: "GET" }),
])
  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  )
  .then((data) => {
    const [loggedData, adminData] = data;
    const isLogged = loggedData;
    const isAdmin = adminData;
    renderApp(isLogged, isAdmin);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const renderApp = (isLogged, isAdmin) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="contact-us" element={ <ContactUs/> } />
        <Route path="post/:postId" element={ <PostPage/> } />
        <Route path="posts" element={<Favorites />} />
        <Route path="posts/search/:title" element={<Favorites />} />
        <Route path="user/:username" element={<UserSettingsPage />} />
        {!isLogged && (
          <>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="reset-password" element={ <ResetPasswordPage/> } />
          </>
        )}
        {isLogged && (
          <>
            <Route path="create-post" element={<CreatePostPage />} />
            <Route path="posts/favorites" element={<Favorites fav={true} />} />
          </>
        )}
        {isAdmin && <Route path="admin-users" element={<AdminUsersPage />} />}
      </Routes>
    </BrowserRouter>
  );
};
