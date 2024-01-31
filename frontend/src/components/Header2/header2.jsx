import './header2.sass';
import { SearchBarComponent } from '../SearchBar/SearchBar';

export const Header2Component = () => {
    // JS


    // HTML
    return (
        <header id='cabecera2'>
            <img src='/logo.png' alt="" id='logo2' />
            <div className='d-flex justify-content-between d-none d-sm-flex' id='search-container'>
                <input type="text" placeholder=' Search... ' className='form-control me-4' id='cabe' />
                <img src="/lupa.png" alt="" />
            </div>
            <div className='p-3 regilo d-flex align-items-center'>
                <a href="" className='me-4'>sing in</a>
                <button className='me-lg-3'>Register</button>
            </div> 
        </header>
    )
}