import React, { useEffect, useState } from 'react';
import questionsImage from '../../assets/img/questions.png';
import starSolidImage from '../../assets/svg/star-solid.svg';
import starOutlinedImage from '../../assets/svg/star-outlined.svg';
import './FavoriteArea.sass';

export const FavoriteArea = ({post}) => {
    // JS
    const addFav = 'http://ec2-52-200-109-82.compute-1.amazonaws.com/testFinalProjects/new/actions/createData/createFavorite.php';
    const removeFav = 'http://ec2-52-200-109-82.compute-1.amazonaws.com/testFinalProjects/new/actions/deleteData/deleteFavorite.php';
    const [starPath, setStarPath] = useState(starOutlinedImage);

    // Cookies del navegador
    const cookies = document.cookie.split(";");
    let userId;
    cookies.forEach((cookie) => {
      if (cookie.includes("userId")) userId = cookie.split("=")[1];
    });
    
    useEffect(() => {
        if(post.IsFavorite === 1){
            setStarPath(starSolidImage);
        }
    }, [])

    const changePath = () => {
        if(starPath === starOutlinedImage){
            setStarPath(starSolidImage);
            addFavourite();
        } else {
            setStarPath(starOutlinedImage);
            deleteFavourite();
        }
    }

    const addFavourite = () => {
        fetch(`${addFav}?postId=${post.PostId}&userId=${userId}`, { method: 'POST' });
    }

    const deleteFavourite = () => {
        fetch(`${removeFav}?postId=${post.PostId}&userId=${userId}`, { method: 'DELETE' });
    }

    const toPost = () => {
        window.location = '/post?postId=' + post.PostId;
    }

    // HTML
    return (
        <div className="container-f">
            <div className="simbolos">
                <img src={questionsImage} alt="" />
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
