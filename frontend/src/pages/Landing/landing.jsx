import "./landing.sass";
import { SearchBarComponent } from "../../components/SearchBar/SearchBar";
import { FooterComponent } from "../../components/Footer/footer";

export const LandginPage = () => {
  // JS

  // HTML
  return (
      <div className="d-flex flex-column justify-content-center align-items-center p-4 landing">
        <div>
          <SearchBarComponent></SearchBarComponent>
        </div>
        <div className="d-flex justify-content-center align-items-center p-5 container">
            <div className="d-flex flex-column justify-content-center align-items-center box1">
              <p>Find any type of files related to your studies and more</p>
              <button className="btn btn-primary btnStartSearch">Start searching</button>
            </div>
        </div>

        <FooterComponent></FooterComponent>
      </div> 
  );
};
