import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FooterComponent } from "../../components/Footer/footer";
import { HeaderComponent } from "../../components/Header/header";
import userImage from '../../assets/img/user-white.png';
import "./userSettings.sass";


export const UserSettingsPage = () => {
  //JS 
  const urlUser = "ec2-52-200-109-82.compute-1.amazonaws.com/testFinalProjects/new/actions/readData/getOneUser.php";
  const { username } = useParams('username');
  const [user, setUser] = useState({});

  // Cookies
  const cookies = document.cookie.split(";");
  let userId;

  cookies.forEach((cookie) => {
    if (cookie.includes("userId")) userId = cookie.split("=")[1];
  });

  useEffect(() => {
    fetch(`${urlUser}?username=${username}`, { method: 'GET' })
    .then((response) => {
      if(!response.ok) throw new Error('No existe el usuario');
      return response.json();
    })
    .then((data) => {
      setUser(data[0])
    })
    .catch((error) => console.log(error));
  }, [])

  // HTML
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="d-flex flex-column align-items-center justify-content-center p-4 settings-container">
        <div className="d-flex flex-column justify-content-center align-items-center p-3 sm-mx-300 recuadro">
          <div className="d-flex flex-column align-items-center">
            <img src={userImage} alt="user" id="user" />
            <h4>{user.Username}</h4>
          </div>
          <div className="container mt-3">
            <form action="#">
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" name="name" readOnly value={user.Name}/>
                </div>
                <div className="col">
                  <label htmlFor="surname">Apellidos</label>
                  <input type="text" name="surname" readOnly value={user.Surname}/>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" readOnly value={user.Email}/>
                </div>
                <div className="col">
                  <label htmlFor="username">Nombre de usuario</label>
                  <input type="text" name="username" readOnly value={user.Username}/>
                </div>
              </div>
              {userId == user.UserId && (
                <div className="row mb-3">
                  <div className="col">
                    <button type="submit" className="btn btn-primary btn-md">
                      Reset Password
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
};
