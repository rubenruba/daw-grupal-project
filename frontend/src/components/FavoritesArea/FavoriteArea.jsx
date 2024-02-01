import './FavoriteArea.sass';
import React, { useState } from 'react';

export const FavoriteArea = (post) => {
    // JS
    const addFav = 'http://localhost/testFinalProjects/insertData/addFavourite.php';
    const removeFav = 'http://localhost/testFinalProjects/deleteFavourite.php';
    const [starPath, setStarPath] = useState('/svg/star-outlined.svg');

    const changePath = () => {
        if(starPath === '/svg/star-outlined.svg'){
            setStarPath('/svg/star-solid.svg');
            addFavourite();
        } else {
            setStarPath('/svg/star-outlined.svg');
            deleteFavourite();
        }
    }

    const addFavourite = () => {
        console.log(post.post.PostId);
        fetch(`${addFav}?postId=${post.post.PostId}`, { method: 'GET' });
    }

    const deleteFavourite = () => {
        fetch(`${removeFav}?postId=${post.post.PostId}`, { method: 'GET' });
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
                <p>{post.post.Title.toUpperCase()}</p>
            </div>
            <div className="container-tag">
                <button>Etiqueta1</button>
                <button>Etiqueta1</button>
                <button>Etiqueta1</button>
            </div>
        </div>
    );
};
