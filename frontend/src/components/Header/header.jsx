import { ButtonsNavComponent } from '../ButtonsNav/buttonsNav';
import { MenuComponent } from '../Menu/menu';
import './header.sass';

export const HeaderComponent = () => {
    // JS
    const cookies = document.cookie.split(";");

    let userId;

    cookies.forEach((cookie) => {
        if (cookie.includes("userId")) userId = cookie.split("=")[1];
    });

    const showMenu = () => {
        if(userId){
            return <MenuComponent></MenuComponent>;
        } else {
            return <ButtonsNavComponent></ButtonsNavComponent>;
        }
    }

    // HTML
    return (
        <header>
            <a href='/'>
                <img src='/logo.png' alt="logo" id='logo' />
            </a>
            <div className='d-flex justify-content-between d-none d-sm-flex' id='search-container'>
                <input type="text" placeholder=' Search... ' className='form-control me-4' id='cabe' />
                <img src="/lupa.png" alt="search icon" />
            </div>
            {showMenu()}
        </header>
    )
}