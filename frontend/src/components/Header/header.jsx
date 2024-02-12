import { ButtonsNavComponent } from '../ButtonsNav/buttonsNav';
import { MenuComponent } from '../Menu/menu';
import { SearchBarComponent } from '../SearchBar/SearchBar';
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
            <img src='/logo.png' alt="" id='logo' className='d-none d-sm-block' />
            <img src='/logo_movil.png' alt="" id='mobile-logo' className='d-block d-sm-none'/>
            <SearchBarComponent footer={false}></SearchBarComponent>
            {showMenu()}
        </header>
    )
}