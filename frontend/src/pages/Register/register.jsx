import "./register.sass";

export const RegisterPage = () => {
  // JS
  // const url = 'url del servidor en aws';
  const url = 'http://ec2-3-89-153-35.compute-1.amazonaws.com/testFinalProjects/new/auth/register.php';

  // HTML
  return (
    <div className="register-container d-flex align-items-center justify-content-center">
      <form action={url} method='post' className="p-3 sm-mx-300">
        <h2 className="fw-bold">REGISTER NOW</h2>
        <label>Name</label>
        <input className="form-control" type="text" name="name" required/>
        <label>SurName</label>
        <input className="form-control" type="text" name="surname" required/>
        <label>Password</label>
        <input className="form-control" type="password" name="password" required/>
        <label>UserName</label>
        <input className="form-control" type="text" name="username" required/>
        <label>Email</label>
        <input className="form-control" type="text" name="email" required/>
        <a href="/login" className="mt-4">¿Ya tienes una cuenta?</a>
        <button className="btn btn-primary btn-md">Register</button>
      </form>
    </div>
  );
};
