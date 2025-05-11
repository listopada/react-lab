import React, { useState } from 'react';
import "milligram";
import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

export default function App() {
    const [email, setEmail] = useState('');
    const [loggedInEmail, setLoggedInEmail] = useState(null);

    function login(inputEmail) {
        setLoggedInEmail(inputEmail.trim());
        setEmail('');
    }

    function logout() {
        setLoggedInEmail(null);
    }

    return (
        <div className="container">
            <h1>Witamy w systemie do zapisów na zajęcia</h1>

            {loggedInEmail ? (
                <LogoutForm email={loggedInEmail} onLogout={logout} />
            ) : (
                <LoginForm
                    email={email}
                    setEmail={setEmail}
                    onLogin={login}
                />
            )}
        </div>
    );
}
