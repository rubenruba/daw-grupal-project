import { FavoriteArea } from "../../components/FavoritesArea/FavoriteArea";
import { FooterComponent } from "../../components/Footer/footer";
import { HeaderComponent } from "../../components/Header/header";
import "./search_favorites.sass";

export const Favorites = () => {
    // JS

    // HTML
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <div className="favorites-conatiner">
                <div className="filter ms-lg-5">
                    <img src="/filtro.png" alt="" />
                </div>

              <FavoriteArea></FavoriteArea>
              <FavoriteArea></FavoriteArea>
              <FavoriteArea></FavoriteArea>
              

                <FooterComponent></FooterComponent>
            </div>
           


        </>
    );
};