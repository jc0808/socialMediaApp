import { useState } from "react";

function Input({ sendMessage }) {

    const [message, setMessage] = useState(null);


    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSend = () => {
        // e.preventDefault();

        const input = document.getElementById("input");

        input.value = "";

        sendMessage(message);
        // console.log(message)
    }
    return (
        <div className="input">

            <input type="text" placeholder="Send a Message..." id="input" onChange={handleMessage}></input>
            <div className="send">
                {/* <img src="" alt="" ></img>
                <input type="file" style={{ display: "none" }} id="file"></input>
                <label htmlFor="file">
                    <img src="" alt=""></img>
                </label> */}
                <button onClick={handleSend}>Send</button>
            </div>

        </div>
    )
}

export default Input;