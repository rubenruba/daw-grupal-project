import { useEffect, useState } from 'react';
import { FooterComponent } from '../../components/Footer/footer';
import { HeaderComponent } from '../../components/Header/header';
import { SearchBarComponent } from '../../components/SearchBar/SearchBar';
import { UserAdminComponent } from '../../components/UserAdmin/userAdmin';
import './adminUsers.sass';

export const AdminUsersPage = () => {
    // JS
    const urlGetUser = 'http://ec2-3-86-101-85.compute-1.amazonaws.com/testFinalProjects/new/actions/readData/getAllUsers.php';
    const [users, setUsers] = useState([]);

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
            .then(data => setUsers(data))
            .catch(error =>  console.error('Error:', error));
        };
        
        fetchUsers();

    }, []);
    
    // HTML
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <article className='admin-users-container m-5'>
                <div className='title d-flex justify-content-between'>
                    <h1>Usuarios registrados</h1>
                </div>
                <section className='users-section'>
                    {users.map(user => {
                        return <UserAdminComponent key={user} user={user}></UserAdminComponent>
                    })}
                </section>
            </article>
            <FooterComponent></FooterComponent>
        </>
    )
}