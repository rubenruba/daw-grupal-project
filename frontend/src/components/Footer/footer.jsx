import './footer.sass';
import { SearchBarComponent } from '../SearchBar/SearchBar';

export const FooterComponent = () => {
    // JS


    // HTML
    return (
        <footer>
            <div id='searchbar-movil' class="d-sm-none">
                <SearchBarComponent></SearchBarComponent>
            </div>
            <h2>Legal advise</h2>
            <div id="logos-links" class="d-flex flex-row">
                <ul>
                    <li><a href="#">Legal</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cookie Settings</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
                <div id='logos-rrss' className='d-flex flex-column'>
                    <img src="/img/instagram.png" alt="" />
                    <img src="/img/twitter.png" alt="" />
                    <img src="/img/TikTok.png" alt="" />
                </div>
            </div>
            <p>Copyright ©2024 Helpya, Inc. Site design / logo © 2024</p>
        </footer>
    )
}