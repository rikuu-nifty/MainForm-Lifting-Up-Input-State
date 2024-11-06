import React from 'react';
import { useState } from 'react';
import AdminPanel from './AdminPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './logadmin.css'; // Import the CSS file
import {useNavigate} from 'react-router-dom'; // import Navigation Method


function LogAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('');
    const [user, setUser] = useState(null);

    const [loginAttempts, setLoginAttempts] = useState(0); // Number of login attempt
    const [errorMessage, setErrorMessage] = useState(''); // String for Error Message

    const navigate = useNavigate(); // Hook to navigate between pages



    const handleLogin = () => {

        const validAdminCredentials = {
            username:'user123',
            password:'pass123'
        };


        const isAdmin = accountType ==='admin'

        if(isAdmin && (username === validAdminCredentials.username && password === validAdminCredentials.password)) {
            setUser({ name: username, isAdmin });

        } else if (!isAdmin && (username === validAdminCredentials.username && password === validAdminCredentials.password)) {
            setUser({ name: username, isAdmin : false });
        } else {
            setLoginAttempts(prevAttempts => prevAttempts +1 )
            setErrorMessage('Invalid Credentials');

            if(loginAttempts +1 >= 3){ 
                navigate('/auth-error')
            }

        }


        
        // const isAdmin = accountType === 'admin';
        // setUser({ name: username, isAdmin });
    };

    return (
        <div>
            {user ? (
                <AdminPanel user={user} />
            ) : (
                <div className="login-container">
                    <h1>Login</h1>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Account Type:</label>
                        <select
                            value={accountType}
                            onChange={(e) => setAccountType(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button onClick={handleLogin}>Login</button>
                    <button>Sign Up</button>

                    {errorMessage && <p style={{color: 'red'}}> {errorMessage} </p>}
                    {loginAttempts > 0 &&(
                        <p style={{color: 'red'}}> Login Attempts: {loginAttempts}/3</p>
                    )}

                </div>
            )}
        </div>
    );
}

export default LogAdmin;
