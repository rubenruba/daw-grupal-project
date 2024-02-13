import './FavoriteArea.sass';
import React, { useEffect, useState } from 'react';

export const FavoriteArea = ({post}) => {
    // JS
    const addFav = 'http://localhost/testFinalProjects/new/actions/createData/createFavorite.php';
    const removeFav = 'http://localhost/testFinalProjects/new/actions/deleteData/deleteFavorite.php';
    const [starPath, setStarPath] = useState('/svg/star-outlined.svg');

    // Cookies del navegador
    const cookies = document.cookie.split(";");
    let userId;
    cookies.forEach((cookie) => {
      if (cookie.includes("userId")) userId = cookie.split("=")[1];
    });
    
    useEffect(() => {
        if(post.IsFavorite === 1){
            setStarPath('/svg/star-solid.svg');
        }
    })

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
        fetch(`${addFav}?postId=${post.PostId}&userId=${userId}`, { method: 'GET' });
    }

    const deleteFavourite = () => {
        fetch(`${removeFav}?postId=${post.PostId}&userId=${userId}`, { method: 'DELETE' });
    }

    const toPost = () => {
        window.location = '/post/' + post.PostId;
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
            <div className="favorite-text" onClick={() => toPost()}>
                <h2>{post.Title.toUpperCase()}</h2>
                <p>{post.Text}</p>
            </div>
            <div className="container-tag d-flex">
                {post.Labels.map(label => {
                    if(label !== '') return <button>{label.Name}</button>
                })}
            </div>
        </div>
    );
};
