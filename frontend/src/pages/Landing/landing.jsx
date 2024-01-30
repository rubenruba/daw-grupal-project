import "./landing.sass";
import { SearchBarComponent } from "../../components/SearchBar/SearchBar";
import { FooterComponent } from "../../components/Footer/footer";

export const LandginPage = () => {
  // JS
  window.open = () => {
    document
      .getElementsByClassName("btnStartSearch")[0]
      .addEventListener("click", () => {
        window.location.href = "/login";
      });
    document
      .getElementsByClassName("btnJoinNow")[0]
      .addEventListener("click", () => {
        window.location.href = "/register";
      });
  };

  // HTML
  return (
    <>
      <header>
        <img src="/logo.png" alt="" id="logo" />
        <SearchBarComponent></SearchBarComponent>
        <img src="/circle-user.png" alt="" id="user" />
      </header>
      <div className="row-fluid d-flex flex-row flex-wrap align-items-center justify-content-center p-4 main">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <div className="d-flex flex-column justify-content-center align-items-center p-3 mx-5 mt-5 box1">
            <p>Find any type of files related to your studies and more</p>
            <button className="btn btn-primary p-2 btnStartSearch">
              Start searching
            </button>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center p-3 mx-5 mt-5 box2">
            <p>Share files with other students around the world</p>
            <button className="btn btn-primary p-2 btnJoinNow">Join Now</button>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center p-3 mt-5 box3">
          <img src="/chat_comentarios.svg" alt="chats" className="mb-3 chats" />
          <p>
            Communicate with your friends to solve study problems through a chat
            and where you can create groups.
          </p>
          <br />
          <img
            src="/guardar_rellenado.svg"
            alt="guardar_post"
            className="mt-5 mb-3 guardarFavorito"
          />
          <p>
            Find the most outstanding answer to get the best option and
            understand the problem you had, you can hit save to raise the score
            to that answer and make it more popular and help more people who
            have the same problem.
          </p>
        </div>
      </div>
      <FooterComponent className="row"></FooterComponent>
    </>
  );
};
