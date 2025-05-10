import logo from './logo.svg';
import { useState } from "react";

function App() {
    const [email, setEmail] = useState('listopad@agh.edu.pl');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message;
    if (email.length < 8) {
        message = 'Adres e-mail jest zbyt krótki.';
    } else if (email.length > 20) {
        message = 'Adres e-mail jest zbyt długi.';
    } else {
        message = 'Adres e-mail wygląda poprawnie.';
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <input type="text" value={email} onChange={handleChange}/>
            <div>{message}</div>
        </div>
    );
}

export default App;
