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

const urlLogged = "http://localhost/testFinalProjects/isLogged.php";
const urlAdmin = "http://localhost/testFinalProjects/isAdmin.php";
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
        {!isLogged && (
          <>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </>
        )}
        {isLogged && (
          <>
            <Route path="post" element={ <PostPage/> } />
            <Route path="create-post" element={<CreatePostPage />} />
            <Route path="search-and-favorites" element={<Favorites />} />
            <Route path="user-settings" element={<UserSettingsPage />} />
          </>
        )}
        {isAdmin && <Route path="admin-users" element={<AdminUsersPage />} />}
      </Routes>
    </BrowserRouter>
  );
};
