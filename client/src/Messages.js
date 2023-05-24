function Messages({ ownerId, profile_id, content }) {
    return (
        <div className="messages">
            <div className={ownerId === profile_id ? "message owner" : "message"}>
                <div className="messageInfo">
                    <img src="https://cdn1.vectorstock.com/i/1000x1000/51/95/businessman-avatar-cartoon-character-profile-vector-25645195.jpg" alt="profile"></img>
                    <span>Just Now</span>
                </div>
                <div className="messageContent">
                    <p>{content}</p>
                    <img src="" alt=""></img>
                </div>
            </div>

            {/* <div className="message">
                <div className="messageInfo">
                    <img src="https://cdn1.vectorstock.com/i/1000x1000/51/95/businessman-avatar-cartoon-character-profile-vector-25645195.jpg" alt="profile"></img>
                    <span>Just Now</span>
                </div>
                <div className="messageContent">
                    <p>hello</p>
                    <img src="" alt=""></img>
                </div>
            </div>

            <div className="message">
                <div className="messageInfo">
                    <img src="https://cdn1.vectorstock.com/i/1000x1000/51/95/businessman-avatar-cartoon-character-profile-vector-25645195.jpg" alt="profile"></img>
                    <span>Just Now</span>
                </div>
                <div className="messageContent">
                    <p>hello</p>
                    <img src="" alt=""></img>
                </div>
            </div> */}
        </div >
    )
}

export default Messages;