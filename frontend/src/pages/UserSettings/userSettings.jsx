import "./userSettings.sass";
import { FooterComponent } from "../../components/Footer/footer";
import { SearchBarComponent } from "../../components/SearchBar/SearchBar";

export const UserSettingsPage = () => {
  // JS

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
            <img src="/circle-user.png" alt="user" />
            <h4>Welcome, name</h4>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center configure">
            <form action="#">
              <label htmlFor="#">Nombre</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="#">Apellidos</label>
              <input type="text" name="surname" id="surname" />
              <label htmlFor="#">Email</label>
              <input type="text" name="email" id="email" />
              <label htmlFor="#">Nombre de usuario</label>
              <input type="text" name="username" id="username" />
              <button type="submit" className="btn btn-primary btn-md">
                Reset Password
              </button>
              <div class="form-check form-switch">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="theme"
                />
                <label className="form-check-label" for="theme">
                  Dark Theme
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
};
