import './footer.sass';
import { SearchBarComponent } from '../SearchBar/SearchBar';

export const FooterComponent = () => {
    // JS


    // HTML
    return (
        <footer>
            <div id='searchbar-movil' className="d-sm-none d-flex flex-row justify-content-center">
                <SearchBarComponent></SearchBarComponent>
            </div>
            <h2 className='ms-5 mt-4 fw-bold'>Legal advise</h2>
            <div id="logos-links" className="d-flex flex-row ">
                <ul>
                    <li><a href="#">Legal</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cookie Settings</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
                <div id='logos-rrss' className='d-flex flex-column me-5'>
                    <div className='d-flex align-items-center'>
                        <p className='mt-3 me-3 desaparecer'>Instagram</p>
                        <img src="/img/instagram.png" alt="" />
                    </div>
                    <div className='d-flex align-items-center'>
                        <p className='mt-3 me-4 desaparecer'>Twitter</p>
                        <img src="/img/twitter.png" alt="" />
                    </div>
                    <div className='d-flex align-items-center'>
                        <p className='mt-3 me-4 desaparecer'>TikTok</p>
                        <img src="/img/TikTok.png" alt="" />
                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright ©2024 Helpya, Inc. Site design / logo © 2024</p>
        </footer>
    )
}