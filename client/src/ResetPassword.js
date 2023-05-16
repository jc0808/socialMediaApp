import { useState } from "react";
import { useHistory } from "react-router-dom"

export default function ResetPassword() {

    const navigate = useHistory();
    const [isFound, setIsFound] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [id, setId] = useState(null);
    const [error, setError] = useState(null);


    function handleUsername(e) {
        setUsername(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleConfirmP(e) {
        setConfirmPassword(e.target.value);
    }

    function handleForm(e) {
        e.preventDefault()

        if (username) {
            e.target["username"].value = "";
        }

        if (password) {
            e.target["password"].value = "";
            e.target["confirmPassword"].value = "";
        }


        if (!isFound) {
            if (username !== null && username !== "") {
                fetch('/credentials')
                    .then(r => {
                        if (r.ok) {
                            r.json().then(a => {

                                const findUsername = a.find(credential => credential.username === username);
                                if (findUsername) {
                                    setId(findUsername.id)
                                    setIsFound(true)
                                    setError(null)
                                } else {
                                    setError("User Not Found.")
                                }
                            });
                        }
                    });
            }
        } else {
            if (password !== null && password !== "") {
                if (password === confirmPassword) {
                    fetch(`/password`, {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ id, password })
                    })
                        .then(navigate.push('/'))
                } else {
                    setPassword(null)
                    setConfirmPassword(null)
                    setError("Passwords do not match")
                }
            } else {
                setError("error")
            }
        }

    }

    return (
        <div className="credentialsPage">
            <div className="resetPasswordBox">
                <div className="goBackButton" onClick={() => navigate.push('/')} style={{ color: "blue", marginRight: "85%", cursor: "pointer" }}>Go Back</div>
                <h2>Reset Your Password</h2>

                <h3>Please Enter your Information</h3>
                <h3 style={{ color: "red" }}>{error}</h3>

                <form className="form" onSubmit={handleForm}>

                    {isFound
                        ?
                        <>
                            <input id="password" name="password" placeholder="Enter your password..." type="password" onChange={handlePassword} ></input>
                            <input id="confirmPassword" name="confirmPassword" placeholder="Confirm your password..." type="password" onChange={handleConfirmP}></input>
                            <div className="loginButton">
                                <button style={{ cursor: "pointer" }}>Reset Password</button>
                            </div>
                        </>
                        :
                        <>
                            <input id="username" name="username" placeholder="Enter your username..." type="text" onChange={handleUsername} ></input>
                            <div className="loginButton">
                                <button style={{ cursor: "pointer" }} >Find Account</button>
                            </div>
                        </>
                    }


                </form>

            </div>
        </div >
    )
}