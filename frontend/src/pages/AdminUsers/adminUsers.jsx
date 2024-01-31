import { useEffect } from 'react';
import { FooterComponent } from '../../components/Footer/footer';
import { SearchBarComponent } from '../../components/SearchBar/SearchBar';
import './adminUsers.sass';

export const AdminUsersPage = () => {

    const urlGetUser = 'http://localhost/testFinalProjects/retrieveData/getUsers.php';
    const urlDeleteUser = 'http://localhost/testFinalProjects/deleteUser.php';

    let users = [];

    useEffect(() => {
        const fetchUsers = () => {
            fetch(urlGetUser, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los usuarios');
                }
                return response.json();
            })
            .then(data => {
                users = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        };
        
        fetchUsers();
        viewUsers();

    });

    const deleteUser = (userId) => {
        fetch(`${urlDeleteUser}?userId=${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            mode: 'no-cors'
        }).then(() => {
            const removeUser = document.getElementById(userId);
            removeUser.remove(); 
        })
    }

    const viewUsers = () => {
        setTimeout(() => {
            const container = document.getElementsByClassName('users-section')[0];

            users.forEach(user => {
                // Div element
                const div = document.createElement('div');
                div.className = 'user-info';
                div.id = user.UserId;

                // Image element
                const image = document.createElement('img');
                image.src = 'delete.svg';
                image.alt = 'delete icon';
                image.addEventListener('click', () => {
                    deleteUser(user.UserId);
                });
                
                // P element
                const userInfo = document.createElement('p');
                userInfo.textContent = `${user.Email} - ${user.Username}`;

                // Append to div element
                div.appendChild(userInfo)
                div.appendChild(image)
                
                container.appendChild(div);
            })
        }, 100)
    };

    
    return (
        <>
            {/* TO DO - Insert header component when finish */}
            <header>Header component</header>
            <article className='admin-users-container m-5'>
                <div className='title d-flex justify-content-between'>
                    <h1>Usuarios registrados</h1>
                    <SearchBarComponent></SearchBarComponent>
                </div>
                <section className='users-section'>
                    
                </section>
            </article>
            <FooterComponent></FooterComponent>
        </>
    )
}