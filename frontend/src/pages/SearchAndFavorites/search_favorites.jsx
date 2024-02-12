import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FavoriteArea } from "../../components/FavoritesArea/FavoriteArea";
import { FooterComponent } from "../../components/Footer/footer";
import { HeaderComponent } from "../../components/Header/header";
import "./search_favorites.sass";

export const Favorites = () => {
  // JS
  const urlAllPosts =
    "http://localhost/testFinalProjects/retrieveData/getAllPost.php";
  const urlSearch =
    "http://localhost/testFinalProjects/retrieveData/searchPost.php";

  const { title } = useParams("title");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!title) {
      getAllPosts();
    } else if (title) {
      getSearched();
    }
  }, []);

  const getAllPosts = () => {
    fetch(urlAllPosts, { method: "GET" })
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
    fetch(`${urlSearch}?title=${title}`, { method: "GET" })
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

        {posts.length <= 0 && (
          <h2>No se ha encontrado ningún post</h2>
        )}
      </div>

      <FooterComponent></FooterComponent>
    </>
  );
};
