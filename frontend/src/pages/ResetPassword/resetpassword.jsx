import "./resetpassword.sass";
import { HeaderComponent } from "../../components/Header/header";
import { FooterComponent } from "../../components/Footer/footer";

export const ResetPasswordPage = () => {
  // JS


  //HTML
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main className="d-flex flex-column justify-content-center align-items-center reset-container">
        <div className="d-flex flex-column justify-content-center align-items-center p-3 sm-mx-300 recuadro">
          <h4>Reset Password</h4>
          <form className="p-3 sm-mx-300">
            <label className="form-label">New Password</label>
            <input type="password" className="form-control" />
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" />
            <button className="btn btn-primary mt-4">Reset</button>
          </form>
        </div>
      </main>
      <FooterComponent></FooterComponent>
    </>
  );
};
