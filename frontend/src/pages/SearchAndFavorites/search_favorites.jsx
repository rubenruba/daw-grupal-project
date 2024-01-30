import { FavoriteArea } from "../../components/FavoritesArea/FavoriteArea";
import { FooterComponent } from "../../components/Footer/footer";
import "./search_favorites.sass";

export const Favorites = () => {
    // JS

    // HTML
    return (
        <>

            <header>
                <img src='/logo.png' alt="" id='logo' />
                <div className='d-flex justify-content-between d-none d-sm-flex' id='search-container'>
                    <input type="text" placeholder=' Search... ' className='form-control me-4' id='cabe' />
                    <img src="/lupa.png" alt="" />
                </div>
                <img src="/circle-user.png" alt="" id='user' />
            </header>
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