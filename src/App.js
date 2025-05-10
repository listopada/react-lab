import logo from './logo.svg';
import { useState } from "react";

function App() {
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleLoginLogout() {
        if (isLoggedIn) {
            setEmail('');
        }
        setIsLoggedIn(prev => !prev);
    }

    const trimmedEmail = email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidFormat = emailRegex.test(trimmedEmail);

    let message = '';
    if (trimmedEmail.length === 0) {
        message = 'Wprowadź adres e-mail.';
    } else if (trimmedEmail.length < 10) {
        message = 'Adres e-mail jest zbyt krótki.';
    } else if (trimmedEmail.length > 30) {
        message = 'Adres e-mail jest zbyt długi.';
    } else if (!isValidFormat) {
        message = 'Adres e-mail ma niepoprawny format.';
    } else {
        message = 'Adres e-mail wygląda poprawnie.';
    }

    const canLogIn = trimmedEmail.length >= 10 &&
        trimmedEmail.length <= 30 &&
        isValidFormat;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Witamy w systemie do zapisów na zajęcia</h1>

            {isLoggedIn ? (
                <div>
                    <h2>Witaj {trimmedEmail}</h2>
                </div>
            ) : (
                <div>
                    <label htmlFor="email-input" style={{ display: 'block', marginBottom: '8px' }}>
                        Zaloguj się emailem
                    </label>
                    <input
                        id="email-input"
                        type="text"
                        value={email}
                        onChange={handleChange}
                        style={{ padding: '8px', width: '300px' }}
                    />

                    <div style={{ marginTop: '10px', marginBottom: '20px', color: 'gray' }}>
                        {message}
                    </div>
                </div>
            )}

            <button
                type="button"
                onClick={handleLoginLogout}
                disabled={!isLoggedIn && !canLogIn}
                style={{
                    padding: '10px 20px',
                    marginTop: '20px',
                    opacity: (!isLoggedIn && !canLogIn) ? 0.5 : 1,
                    cursor: (!isLoggedIn && !canLogIn) ? 'not-allowed' : 'pointer'
                }}
            >
                {isLoggedIn ? 'Wyloguj' : 'Logowanie'}
            </button>
        </div>
    );
}

export default App;
