import "./login.sass";

export const LoginPage = () => {
  // JS
  const url = 'http://localhost/testFinalProjects/login.php';

  // HTML
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-4 login-container">
      <form action={url} method="post" className="p-3 sm-mx-300">
        <h2 className="fw-bold">SIGN IN</h2>
        <label>Email</label>
        <input type="text" className="border-0 " name="email" />

        <label>Contraseña</label>
        <input type="password" className="border-0 " name="password" />

        <label href="#" className="mt-3 mb-3">
          <a href="#">Olvidaste tu contraseña?</a>
        </label>
        <label href="#" className="mb-3">
          <a href="/register">No tienes cuenta? Regístrate ahora</a>
        </label>

        <button className="btn btn-primary btn-md w-50">
          Log in
        </button>
      </form>
    </div>
  );
};
