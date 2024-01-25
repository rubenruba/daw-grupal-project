import './register.sass';

export const RegisterPage = () => {
    // JS
    

    // HTML 
    return (
        <>
        <body className='d-flex flex-column align-items-center'>
        <form action="" className='mt-4'>
            <div className='cuadrado p-3 sm-mx-300'>
            <h2>REGISTER NOW</h2>
            <label className=''>Name</label>
            <input className='form-control in'  type="text"/>
            <label>SurName</label>
            <input className='form-control in' type="text" />
            <label>Password</label>
            <input className='form-control in' type="text" />
            <label>UserName</label>
            <input className='form-control in' type="text" />
            <label>Email</label>
            <input className='form-control in' type="text" />
            <button className='btn btn-primary btn-md btn'>Register</button>
            <a href="">¿Ya tienes una cuenta?</a>
            </div>
        </form>
        </body>
            
        </>
    )
}