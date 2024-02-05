import './header.sass';
import { SearchBarComponent } from '../SearchBar/SearchBar';

export const HeaderComponent = () => {
    // JS


    // HTML
    return (
        <header>
            <img src='/logo.png' alt="" id='logo' />
            <img src='/logo_movil.png' alt="" id='logo2'/>
            <div className='d-flex justify-content-between d-none d-sm-flex' id='search-container'>
                <input type="text" placeholder=' Search... ' className='form-control me-4' id='cabe' />
                <img src="/lupa.png" alt="" />
            </div>
            <img src="/circle-user.png" alt="" id='user' />
        </header>
    )
}