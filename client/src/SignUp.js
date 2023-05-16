import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SignUp({ handleLogin }) {

    const navigate = useHistory();
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmP, setConfirmP] = useState(null);
    const [errors, setErrors] = useState([]);

    function handleFirstName(e) {
        setFirstName(e.target.value)
    }

    function handleLastName(e) {
        setLastName(e.target.value)
    }

    function handleUsername(e) {
        setUsername(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleConfirmP(e) {
        setConfirmP(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (password === confirmP) {

            setErrors(null)
            const newAdopter = {
                "firstName": firstName,
                "lastName": lastName,
                "credentials": {
                    "username": username,
                    "password": password
                }
            }

            fetch('/users', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newAdopter)
            })
                .then(r => {
                    if (r.ok) {
                        r.json().then(handleLogin).then(navigate.push('/home'))
                    } else {
                        r.json().then(e => setErrors(e.errors))
                    }
                })

        } else {
            setErrors("Passwords do not match")
        }
    }

    return (
        <div className="credentialsPage">
            <div className="signUpBox">
                <div className="goBackButton" onClick={() => navigate.push('/')}>Go Back</div>
                <h2>Create an Account</h2>

                <h3>Please Enter your Information</h3>
                <h3 style={{ color: "red" }}>{errors}</h3>

                <form className="form" onSubmit={handleSubmit}>


                    <input id="firstname" name="firstname" placeholder="Enter your firstname..." type="text" onChange={handleFirstName} required ></input>


                    <input id="lastname" name="lastname" placeholder="Enter your lastname..." type="text" onChange={handleLastName} required ></input>

                    <input id="username" name="username" placeholder="Enter your username..." type="text" onChange={handleUsername} required ></input>
                    <input id="password" name="password" placeholder="Enter your password..." type="password" onChange={handlePassword} required ></input>
                    <input id="confirmPassword" name="confirmPassword" placeholder="Confirm your password..." type="password" onChange={handleConfirmP} required ></input>

                    <div className="loginButton">
                        <button style={{ cursor: "pointer" }}>Create Account</button>
                    </div>
                </form>

            </div>
        </div>
    )
}