import './login.sass';

export const LoginPage = () => {
  // JS

  // HTML
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center p-4 login">
        <h1>SIGN IN</h1>
        <form action="#" className="d-flex flex-column justify-content-around">
          <label>Email</label>
          <input type="text" className="border-0 "  />

          <label>Contraseña</label>
          <input type="password" className="border-0 " />

          <label href="#" className="mt-3 mb-3">
            <a href="#">Olvidaste tu contraseña?</a>
          </label>
          <label href="#" className="mb-3">
            <a href="#">No tienes cuenta? Regístrate ahora</a>
          </label>

          <button className="btn btn-primary w-50 align-self-center btnLogin">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};
