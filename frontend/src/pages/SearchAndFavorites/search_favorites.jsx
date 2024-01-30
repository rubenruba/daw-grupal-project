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

                <div className="container-f">
                    <div className="simbolos">
                        <img src="/preguntas-mas-frecuentes.png" alt="" />
                        <img src="/star.png" alt="" />
                    </div>
                    <div className="favorite-text">
                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. INTEGER SED FEUGIAT NUNC, ET VARIUS RISUS?</p>
                    </div>
                    <div className="container-tag">
                        <button>Etiqueta1</button>
                        <button>Etiqueta1</button>
                        <button>Etiqueta1</button>
                    </div>

                </div>

                <div className="container-f">
                    <div className="simbolos">
                        <img src="/preguntas-mas-frecuentes.png" alt="" />
                        <img src="/star.png" alt="" />
                    </div>
                    <div className="favorite-text ms-lg-0">
                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. INTEGER SED FEUGIAT NUNC, ET VARIUS RISUS?</p>
                    </div>
                    <div className="container-tag">
                        <button>Etiqueta1</button>
                        <button>Etiqueta1</button>
                        <button>Etiqueta1</button>
                    </div>
                    
                </div>

                <div className="container-f">
                    <div className="simbolos">
                        <img src="/preguntas-mas-frecuentes.png" alt="" />
                        <img src="/star.png" alt="" />
                    </div>
                    <div className="favorite-text">
                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. INTEGER SED FEUGIAT NUNC, ET VARIUS RISUS?</p>
                    </div>
                    <div className="container-tag">
                        <button>Etiqueta1</button>
                        <button>Etiqueta1</button>
                        <button>Etiqueta1</button>
                    </div>
                    
                </div>

                <div className="container-f">
                    <div className="simbolos">
                        <img src="/preguntas-mas-frecuentes.png" alt="" />
                        <img src="/star.png" alt="" />
                    </div>
                    <div className="favorite-text">
                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. INTEGER SED FEUGIAT NUNC, ET VARIUS RISUS?</p>
                    </div>
                    <div className="container-tag">
                        <button>Etiqueta1</button>
                        <button>Etiqueta1</button>
                        <button>Etiqueta1</button>
                    </div>
                    
                </div>

                <div className="container-f">
                    <div className="simbolos">
                        <img src="/preguntas-mas-frecuentes.png" alt="" />
                        <img src="/star.png" alt="" />
                    </div>
                    <div className="favorite-text">
                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. INTEGER SED FEUGIAT NUNC, ET VARIUS RISUS?</p>
                    </div>
                    <div className="container-tag">
                        <button>Etiqueta1</button>
                        <button>Etiqueta1</button>
                        <button>Etiqueta1</button>
                    </div>
                    
                </div>

                <FooterComponent></FooterComponent>
            </div>
           


        </>
    );
};