import './header.sass';
import { SearchBarComponent } from '../SearchBar/SearchBar';

export const HeaderComponent = () => {
    // JS


    // HTML
    return (
        <header id='cabecera'>
            <img src='/logo.png' alt="" id='logo' />
            <div className='d-flex justify-content-between d-none d-sm-flex' id='search-container'>
                <input type="text" placeholder=' Search... ' className='form-control me-4' id='cabe' />
                <img src="/lupa.png" alt="" />
            </div>
            <img src="/circle-user.png" alt="" id='user' />
        </header>
    )
}