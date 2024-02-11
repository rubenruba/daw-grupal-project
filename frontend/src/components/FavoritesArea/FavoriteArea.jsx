import './FavoriteArea.sass';
import React, { useState } from 'react';

export const FavoriteArea = ({post}) => {
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
        fetch(`${addFav}?postId=${post.PostId}`, { method: 'GET' });
    }

    const deleteFavourite = () => {
        fetch(`${removeFav}?postId=${post.PostId}`, { method: 'GET' });
    }

    const toPost = () => {
        window.location = 'post/' + post.PostId;
    }

    // HTML
    return (
        <div className="container-f" onClick={() => toPost()}>
            <div className="simbolos">
                <img src="/preguntas-mas-frecuentes.png" alt="" />
                <button className='star' onClick={changePath}>
                    <img src={starPath} alt="Star"/>
                </button>
            </div>
            <div className="favorite-text">
                <h2>{post.Title.toUpperCase()}</h2>
                <p>{post.Text}</p>
            </div>
            <div className="container-tag">
                <button>Etiqueta1</button>
                <button>Etiqueta1</button>
                <button>Etiqueta1</button>
            </div>
        </div>
    );
};
