import './footer.sass';
import { SearchBarComponent } from '../SearchBar/SearchBar';

export const FooterComponent = () => {
    // JS
    
    // HTML
    return (
        <footer>
            <SearchBarComponent footer={true}></SearchBarComponent>
            <div className="d-flex flex-row justify-content-around w-100">
                <div>
                    <h2 className='ms-5 mt-4 fw-bold'>Navigation</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/search-and-favorites">All posts</a></li>
                        <li><a href="/create-post">Create a post</a></li>
                        <li><a href="/user-settings">User settings</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>
                <div id='logos-rrss' className='d-flex flex-column me-5 mt-5'>
                    <a href='https://instagram.com' target={'_blank'} className='d-flex align-items-center'>
                        <p className='mt-3 d-none d-sm-block'>Instagram</p>
                        <img src="/img/instagram.png" alt="Instagram logo" />
                    </a>
                    <a href='https://twitter.com' target={'_blank'} className='d-flex align-items-center my-3 m-sm-0'>
                        <p className='mt-3 d-none d-sm-block'>Twitter</p>
                        <img src="/img/twitter.png" alt="Twitter logo"/>
                    </a>
                    <a href='https://tiktok.com' target={'_blank'}  className='d-flex align-items-center'>
                        <p className='mt-3 d-none d-sm-block'>TikTok</p>
                        <img src="/img/TikTok.png" alt="Tik tok logo" />
                    </a>
                </div>
            </div>
            <p className='text-center mb-2'>Copyright ©2024 Helpya, Inc. Site design</p>
        </footer>
    )
}