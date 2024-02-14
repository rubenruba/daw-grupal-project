import React, { useState } from 'react';
import { FooterComponent } from '../../components/Footer/footer';
import { HeaderComponent } from '../../components/Header/header';
import './contactus.sass'

export const ContactUs = () => {
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const validateEmail = () => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setValidEmail(re.test(email));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <div className='contact_container d-flex justify-content-center'>
                <form className='form-control m-3 m-lg-5' onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-center fw-bold'>
                        <h2>Contact</h2>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input 
                            type="email" 
                            className={`form-control ${!validEmail ? 'is-invalid' : ''}`} 
                            id="email" 
                            placeholder="Ingrese correo electrónico" 
                            value={email} 
                            onChange={handleEmailChange} 
                            onBlur={validateEmail} 
                        />
                        {!validEmail && <div className="invalid-feedback">Correo electrónico inválido</div>}
                    </div>
                    <div className="form-group mb-5">
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea className="form-control" id="mensaje" rows="3" placeholder="Ingrese su mensaje" maxLength={300}></textarea>
                    </div>
                    <div className='d-flex justify-content-center' >
                        <button type="submit" className="btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
            <FooterComponent></FooterComponent>
        </>
    )
}
