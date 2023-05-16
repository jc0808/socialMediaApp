import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectMyProfileInfo } from "./Store";

export default function Account() {

    const myProfileInfo = useSelector(selectMyProfileInfo);

    const [currentView, setCurrentView] = useState(0);
    const [firstName, setFirstName] = useState(myProfileInfo.firstName);
    const [lastName, setLastName] = useState(myProfileInfo.lastName);
    const [location, setLocation] = useState(myProfileInfo.location);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [showError, setShowError] = useState(false);
    const [messageSuccessfull, setMessageSuccesfull] = useState(false);
    const [change, setChange] = useState(true);
    const dispatch = useDispatch();

    function changeView(view) {
        setCurrentView(view);
    }

    function changeFirstName(e) {
        setFirstName(e.target.value);
    }

    function changeLastName(e) {
        setLastName(e.target.value);
    }

    function changeLocation(e) {
        setLocation(e.target.value);
    }

    function changePassword(e) {

        e.preventDefault();
        if (password === confirmPassword && password !== null && confirmPassword !== null) {
            setChange(false);
            setMessageSuccesfull(true);
            setChange((change) => !change)
        } else {
            setShowError(true);
            setMessageSuccesfull(null);
        }
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleConfirmP(e) {
        setConfirmPassword(e.target.value);
    }

    const handleChangeInfo = e => {
        e.preventDefault()

        const changeInfo = {
            type: 'updateMyProfileInfo',
            payload: {
                firstName: firstName,
                lastName: lastName,
                location: location
            }
        };

        dispatch(changeInfo);
    }
    function cancel() {
        setPassword(null)
        setConfirmPassword(null)
        setChange(true)
        setShowError(false)
        setMessageSuccesfull(null);
        setCurrentView(0);
    }

    switch (currentView) {
        case 1:
            return (
                <>

                    <Container className="accountView">
                        <div className="goBackButton">
                            <button onClick={() => cancel()}>Go Back</button>
                        </div>

                        <h1>Personal Information</h1>


                        {change ?
                            <div className="info">
                                <h3>First Name ➡ <label>{firstName}</label></h3>

                                <h3>Last Name ➡ <label>{lastName}</label></h3>

                                <h3>Location ➡ <label>{location}</label></h3>

                                <button onClick={() => setChange((change) => !change)}>Change</button>

                            </div>
                            :
                            <div className="info">

                                <form onSubmit={handleChangeInfo}>
                                    <label>First Name:</label>
                                    <input type="text" onChange={changeFirstName} placeholder={firstName} />
                                    <label>Last Name:</label>
                                    <input type="text" onChange={changeLastName} placeholder={lastName} />
                                    <label>Location</label>
                                    <input type="text" onChange={changeLocation} placeholder={location} />

                                    <button onClick={() => setChange((change) => !change)}>Done</button>
                                </form>
                            </div>}




                    </Container>
                </>
            );
        case 2:
            return (
                <>

                    <Container className="accountView">

                        <div className="goBackButton">
                            <button onClick={() => cancel()}>Go Back</button>
                        </div>

                        <h1>Change Password</h1>

                        {change
                            ?
                            <div className="info">
                                {messageSuccessfull
                                    ?
                                    <label style={{ color: "green" }}>Your password has been changed!</label>
                                    : null}
                                <h3>Password ➡️ <input type="password" value="******" disabled /></h3>

                                <button onClick={() => setChange((change) => !change)}>Change</button>
                            </div>
                            :
                            <div className="info">
                                {showError
                                    ?
                                    <label style={{ color: "red" }}>Passwords do not match. Try again...</label>
                                    : null}

                                <form onSubmit={changePassword} className="info">
                                    <label>New Password :</label>
                                    <input type="password" onChange={handlePassword} />
                                    <label>Confirm Password</label>
                                    <input type="password" onChange={handleConfirmP} />

                                    <button>Change your Password</button>
                                </form>

                                <button className="cancelB" onClick={() => setChange((change) => !change)}>Cancel</button>



                            </div>
                        }


                    </Container>
                </>
            )

        case 3:
            return (
                <>

                    <Container className="accountView">

                        <div className="goBackButton">
                            <button onClick={() => cancel()}>Go Back</button>
                        </div>

                        <h1>Delete your Account</h1>

                        <h3>Your Profile and information will be deleted and
                            you will not be able to get it back.
                        </h3>

                        <div>
                            <button className="deleteAccountB">DELETE MY ACCOUNT</button>
                        </div>

                    </Container>
                </>
            )
        default:
            return (
                <>

                    <Container className="accountView">

                        <Row>
                            <h2 onClick={() => changeView(1)}>Change Profile Information</h2>
                        </Row>

                        <Row>
                            <h2 onClick={() => changeView(2)}>Change Password</h2>
                        </Row>

                        <Row>
                            <h2 onClick={() => changeView(3)}>Delete Account</h2>
                        </Row>

                    </Container>
                </>
            )
    }

}