import { ButtonsNavComponent } from '../ButtonsNav/buttonsNav';
import { MenuComponent } from '../Menu/menu';
import { SearchBarComponent } from '../SearchBar/SearchBar';
import desktopLogo from '../../assets/img/desktop-logo.png';
import mobileLogo from '../../assets/img/mobile-logo.png';
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

    const toLanding = () => {
        window.location.href = '/';
    }

    // HTML
    return (
        <header>
            <img src={desktopLogo} onClick={toLanding} alt="Desktop logo" id='logo' className='d-none d-sm-block' />
            <img src={mobileLogo} onClick={toLanding} alt="Mobile logo" id='mobile-logo' className='d-block d-sm-none'/>
            <SearchBarComponent footer={false}></SearchBarComponent>
            {showMenu()}
        </header>
    )
}