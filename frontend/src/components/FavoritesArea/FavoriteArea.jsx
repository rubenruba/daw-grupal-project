import './FavoriteArea.sass';
import React, { useState } from 'react';

export const FavoriteArea = () => {
    // JS


    // HTML
    return (
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
    );
};
