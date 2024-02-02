import { FooterComponent } from '../../components/Footer/footer';
import { HeaderComponent } from '../../components/Header/header';
import './contactus.sass'

export const ContactUs = () => {
    // JS

    // HTML
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <div className='contact_container d-flex justify-content-center'>
                <form className='form-control m-3 m-lg-5'>
                    <div className='d-flex justify-content-center fw-bold'>
                        <h2>Contact</h2>
                    </div>
                    <div class="form-group mb-3">
                        <label for="email">Correo electrónico:</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingrese correo electrónico"></input>
                    </div>
                    <div class="form-group mb-5">
                        <label for="mensaje">Mensaje:</label>
                        <textarea class="form-control" id="mensaje" rows="3" placeholder="Ingrese su mensaje"></textarea>
                    </div>
                    <div className='d-flex justify-content-center' >
                        <button type="submit" class="btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
            <FooterComponent></FooterComponent>
        </>
    )
}