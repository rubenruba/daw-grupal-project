import { useEffect } from "react";
import { FavoriteArea } from "../../components/FavoritesArea/FavoriteArea";
import { FooterComponent } from "../../components/Footer/footer";
import { HeaderComponent } from "../../components/Header/header";
import "./search_favorites.sass";

export const Favorites = () => {
  // JS
  const url = "http://localhost/testFinalProjects/retrieveData/getAllPost.php";
  let posts = [];

  useEffect(() => {
    const fetchPosts = () => {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al obtener los usuarios");
          }
          return response.json();
        })
        .then((data) => {
          posts = data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchPosts();
  });

  // HTML
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="favorites-conatiner">
        <div className="filter ms-lg-5">
          <img src="/filtro.png" alt="" />
        </div>

        {
            setTimeout(() => {
                posts.map((post) => (<FavoriteArea></FavoriteArea>))
            }, 100)
        }

        <FooterComponent></FooterComponent>
      </div>
    </>
  );
};
