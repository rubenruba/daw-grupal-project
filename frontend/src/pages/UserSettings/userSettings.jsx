import React from 'react';
import { FooterComponent } from "../../components/Footer/footer";
import { HeaderComponent } from "../../components/Header/header";
import "./userSettings.sass";


export const UserSettingsPage = () => {
  //JS 

  // HTML
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="d-flex flex-column align-items-center p-4 settings-container">
        <div className="d-flex flex-column justify-content-center align-items-center p-3 sm-mx-300 recuadro">
          <div className="d-flex flex-column align-items-center">
            <img src="/circle-user-regular.svg" alt="user" id="user" />
            <h4>Welcome, name</h4>
          </div>
          <div className="container mt-3">
            <form action="#">
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="#">Nombre</label>
                  <br />
                  <input type="text" name="name" id="name" />
                </div>
                <div className="col">
                  <label htmlFor="#">Apellidos</label>
                  <br />
                  <input type="text" name="surname" id="surname" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="#">Email</label>
                  <br />
                  <input type="text" name="email" id="email" />
                </div>
                <div className="col">
                  <label htmlFor="#">Nombre de usuario</label>
                  <br />
                  <input type="text" name="username" id="username" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <button type="submit" className="btn btn-primary btn-md">
                    Reset Password
                  </button>
                </div>
              </div>
              <div className="input-group d-flex flex-column justify-content-start mt-4">
                <label>About me</label>
                <textarea
                  className="form-control w-100"
                  aria-label="With textarea"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
};
