import Messages from "./Messages";

export default function Chat() {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Mark</span>
                <div className="chatIcons">
                    <h3>profile</h3>
                </div>
            </div>
            <Messages />
            {/* <Input /> */}
        </div>
    )
}