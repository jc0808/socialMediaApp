import { useEffect, useState } from "react";
import Messages from "./Messages";
import { useSelector } from "react-redux";
import { selectCurrentUserID, selectUserProfiles } from "./Store";
import Input from "./Input";



export default function Chat({ id, messages, goBack, receiver }) {


    const currentUserId = useSelector(selectCurrentUserID);

    const [chatMessages, setChatMessages] = useState([]);
    // const [chatId, setChatId] = useState(null)

    // const [guid, setGuid] = useState("");

    const mContainer = document.getElementById("messagesContainer");

    const profiles = useSelector(selectUserProfiles);

    const receiverProfile = profiles.filter(profile => profile.id === receiver)[0];

    // Math.random().toString(36).substring(2, 15)









    // ws.onmessage = (e) => {
    //     const data = JSON.parse(e.data)

    //     if (data.type === "ping") return;
    //     if (data.type === "welcome") return;
    //     if (data.type === "confimr_subscription") return;

    //     const message = data.message;

    //     console.log(message)


    //     postMessage(message);


    // }

    // console.log(messages)

    useEffect(() => {
        loadMessages();
    }, [])


    useEffect(() => {
        resetScroll();
    }, [chatMessages])



    const postMessage = (message) => {
        setChatMessages([...chatMessages, message])
        // mContainer.scrollTop = mContainer.scrollHeight;
        resetScroll();
    }

    const loadMessages = () => {
        // const response = await fetch("/chats/1");
        // const data = await response.json();



        // setChatMessages(messages);
        // setChatId(data.id);

        setChatMessages(messages)
    };

    const displayMessages = chatMessages.map(message => {
        return (
            <Messages key={message?.id} ownerId={currentUserId} profile_id={message?.profile_id} content={message?.content} />
        )
    });

    // console.log(messages)

    const sendMessage = (message) => {



        const newM = {
            chat_id: id,
            profile_id: currentUserId,
            receiver_id: receiver,
            content: message
        };

        fetch("/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newM)
        })
            .then(res => res.json())
            .then(m => postMessage(m))
    }



    const resetScroll = () => {
        if (!mContainer) return;
        mContainer.scrollTop = mContainer.scrollHeight;
    }

    const handleGoBack = () => {
        goBack();
    }


    return (
        <div className="chat">

            <div className="chatInfo">
                <button onClick={handleGoBack}>Back</button>
                <span>{receiverProfile.firstName}</span>
                <div className="chatIcons">
                    {/* <h3>profile</h3> */}
                </div>
            </div>

            <div id="messagesContainer">
                {displayMessages}
            </div>
            {/* <Messages /> */}
            {/* <Input /> */}
            <Input sendMessage={sendMessage} />
        </div>
    )
}