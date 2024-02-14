import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FavoriteArea } from "../../components/FavoritesArea/FavoriteArea";
import { FooterComponent } from "../../components/Footer/footer";
import { HeaderComponent } from "../../components/Header/header";
import "./search_favorites.sass";

export const Favorites = (prop) => {
  // JS
  const urlAllPosts =
    "http://ec2-52-200-109-82.compute-1.amazonaws.com/testFinalProjects/new/actions/readData/getAllPost.php";
  const urlSearch =
    "http://ec2-52-200-109-82.compute-1.amazonaws.com/testFinalProjects/new/actions/readData/searchPost.php";
  const urlFav =
    "http://ec2-52-200-109-82.compute-1.amazonaws.com/testFinalProjects/new/actions/readData/getAllFavPosts.php";

  const queryParams = new URLSearchParams(window.location.search);
  const title = queryParams.get('title');

  const [posts, setPosts] = useState([]);

  // Cookies
  const cookies = document.cookie.split(";");
  let userId;

  cookies.forEach((cookie) => {
    if (cookie.includes("userId")) userId = cookie.split("=")[1];
  });

  useEffect(() => {
    console.log(prop.fav);
    if (prop?.fav) {
      getAllFavPosts();
    } else if (title) {
      getSearched();
    } else {
      getAllPosts();
    }
  }, []);

  const getAllPosts = () => {
    fetch(`${urlAllPosts}?userId=${userId}`, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los posts");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error:", error));
  };

  const getSearched = () => {
    fetch(`${urlSearch}?title=${title}&userId=${userId}`, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los posts");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error:", error));
  };

  const getAllFavPosts = () => {
    fetch(`${urlFav}?userId=${userId}`, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los posts");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error:", error));
  };

  // HTML
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="favorites-container">
        {posts.map((post) => {
          return <FavoriteArea key={post.PostId} post={post}></FavoriteArea>;
        })}

        {posts.length <= 0 && <h2>No se ha encontrado ningún post</h2>}
      </div>

      <FooterComponent></FooterComponent>
    </>
  );
};
