import "./register.sass";

export const RegisterPage = () => {
  // JS
  // const url = 'url del servidor en aws';
  const url = 'ec2-52-200-109-82.compute-1.amazonaws.com/testFinalProjects/new/auth/register.php';

  // HTML
  return (
    <div className="register-container d-flex align-items-center justify-content-center">
      <form action={url} method='post' className="p-3 sm-mx-300">
        <h2 className="fw-bold">REGISTER NOW</h2>
        <label className="">Name</label>
        <input className="form-control" type="text" name="name"/>
        <label>SurName</label>
        <input className="form-control" type="text" name="surname"/>
        <label>Password</label>
        <input className="form-control" type="password" name="password"/>
        <label>UserName</label>
        <input className="form-control" type="text" name="username"/>
        <label>Email</label>
        <input className="form-control" type="text" name="email"/>
        <a href="/login" className="mt-4">¿Ya tienes una cuenta?</a>
        <button className="btn btn-primary btn-md">Register</button>
      </form>
    </div>
  );
};
