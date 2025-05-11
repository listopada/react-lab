import React from 'react';

export default function LoginForm({ email, setEmail, onLogin }) {
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

    const canLogIn =
        trimmedEmail.length >= 10 &&
        trimmedEmail.length <= 30 &&
        isValidFormat;

    function handleSubmit() {
        onLogin(email);
    }

    return (
        <section>
            <label htmlFor="email-input">Zaloguj się emailem</label>
            <input
                id="email-input"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Twój email"
            />
            <p>{message}</p>
            <button
                type="button"
                onClick={handleSubmit}
                disabled={!canLogIn}
            >
                Logowanie
            </button>
        </section>
    );
}
