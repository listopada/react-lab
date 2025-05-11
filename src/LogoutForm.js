import React from 'react';

export default function LogoutForm({ email, onLogout }) {
    return (
        <section>
            <h2>Witaj {email}</h2>
            <button type="button" onClick={onLogout}>
                Wyloguj
            </button>
        </section>
    );
}
