import './FavoriteArea.sass';
import React, { useState } from 'react';

export const FavoriteArea = () => {
    const [texto, setTexto] = useState("LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. INTEGER SED FEUGIAT NUNC, ET VARIUS RISUS?");

    const cambiarTexto = (nuevoTexto) => {
        setTexto(nuevoTexto);
    };

    const insertarTexto = (nuevoTexto) => {
        cambiarTexto(nuevoTexto);
    };

    return (
        <div className="container-f">
            <div className="simbolos">
                <img src="/preguntas-mas-frecuentes.png" alt="" />
                <img src="/star.png" alt="" />
            </div>
            <div className="favorite-text">
                <p>{texto}</p>
                <button onClick={() => insertarTexto("Nuevo texto aquí")}>
                    Cambiar Texto
                </button>
            </div>
            <div className="container-tag">
                <button>Etiqueta1</button>
                <button>Etiqueta1</button>
                <button>Etiqueta1</button>
            </div>
        </div>
    );
};
