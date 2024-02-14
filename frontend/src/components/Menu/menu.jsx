import './menu.sass';
import user from '../../assets/img/user.png';

export const MenuComponent = () => {
    // JS
    const urlLogout = 'http://ec2-52-200-109-82.compute-1.amazonaws.com/testFinalProjects/new/auth/logout.php';

    const logout = () => {
        fetch(urlLogout);
        document.cookie = "userId=; max-age=0"; // Destroy the cookie userId
        window.location = '/';
    }

    // HTML
    return (
        <div className="menu-container">
            <img src={user} alt="user" id='user'/>
            <ul className='menu'>
                <li><a href="/create-post">New post</a></li>
                <li><a href="/posts/favorites">Favorites</a></li>
                <li onClick={logout}>Logout</li>
            </ul>
        </div>
    )
}