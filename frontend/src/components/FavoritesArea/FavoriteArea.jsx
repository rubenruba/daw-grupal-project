import './FavoriteArea.sass';
import React, { useState } from 'react';

export const FavoriteArea = (post) => {
    // JS
    const url = 'http://localhost/testFinalProjects/insertData/addFavourite.php';
    const [starPath, setStarPath] = useState('/svg/star-outlined.svg');

    const changePath = () => {
        if(starPath === '/svg/star-outlined.svg'){
            setStarPath('/svg/star-solid.svg');
        } else {
            setStarPath('/svg/star-outlined.svg');
            console.log('CAMBIA')
        }
    }

    const addFavourite = () => {
        fetch(`${url}?postId=${post.PostId}`, {
            method: 'POST',
            // body
        })
    }

    // HTML
    return (
        <div className="container-f">
            <div className="simbolos">
                <img src="/preguntas-mas-frecuentes.png" alt="" />
                <button className='star' onClick={changePath}>
                    <img src={starPath} alt="Star"/>
                </button>
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
