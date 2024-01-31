import "./userSettings.sass";
import { FooterComponent } from "../../components/Footer/footer";
import { SearchBarComponent } from "../../components/SearchBar/SearchBar";
import React, { useState } from 'react';
export const UserSettingsPage = () => {
  // JS
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
    oscurecer();
  }
  function oscurecer() {
      let he=document.getElementsByTagName("header")[0];
      let fo=document.getElementsByTagName("footer")[0];
      he.style.backgroundColor="#1A7D61";
      fo.style.backgroundColor="#003A4D";
      if(isChecked){
        he.style.backgroundColor="";
        fo.style.backgroundColor="";
      }
  }

  // HTML
  return (
    <>
      <header>
        <img src="/logo.png" alt="" id="logo" />
        <SearchBarComponent></SearchBarComponent>
        <img src="/circle-user.png" alt="" id="user" />
      </header>
      <div className="d-flex flex-column align-items-center p-4 settings-container">
        <div className="d-flex flex-column justify-content-center align-items-center p-3 sm-mx-300 recuadro">
          <div className="d-flex flex-column align-items-center">
            <img src="/circle-user-regular.svg" alt="user" id="user" />
            <h4>Welcome, name</h4>
          </div>
          <div class="container mt-3">
            <form action="#">
              <div class="row mb-3">
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

              <div class="row mb-3">
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
                <div className="col">
                  <div class="form-check form-switch d-flex flex-row justify-content-center mt-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="theme"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" for="theme">
                      Dark Theme
                    </label>
                  </div>
                </div>
              </div>
              <div class="input-group d-flex flex-column justify-content-start mt-4">
                <label>About me</label>
                <textarea
                  class="form-control w-100"
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
