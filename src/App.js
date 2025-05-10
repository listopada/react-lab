import logo from './logo.svg';
function App() {
    let email = 'listopad@agh.edu.pl';

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}.</h2>
            <input type="text" onChange={handleChange}/>
        </div>
    );
}

export default App;
