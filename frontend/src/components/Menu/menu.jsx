import './menu.sass';

export const MenuComponent = () => {
    // JS
    const urlLogout = 'http://localhost/testFinalProjects/logout.php';

    const logout = () => {
        fetch(urlLogout);
        document.cookie = "userId=; max-age=0"; // Destroy the cookie userId
        window.location = '/';
    }

    // HTML
    return (
        <div className="menu-container">
            <img src="/circle-user.png" alt="user" id='user'/>
            <ul className='menu'>
                <li><a href="/create-post">New post</a></li>
                <li><a href="/user-settings">Settings</a></li>
                <li onClick={logout}>Logout</li>
            </ul>
        </div>
    )
}