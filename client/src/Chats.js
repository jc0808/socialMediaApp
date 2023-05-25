import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUserProfiles } from "./Store";

export default function Chats({ id, messages, handleDisplayChat, user2 }) {

    const userProfiles = useSelector(selectUserProfiles);

    const user = userProfiles.filter(profile => profile.id === user2)[0];

    const handleChat = () => {
        handleDisplayChat(id)
    }

    return (
        <>

            {/* <Card className='border border-3 border-success p-2'>
                <Card.Title>Mark G.</Card.Title>
                <Card.Body>Hi Joshua! How are you?</Card.Body>
            </Card>

            <Card className='border border-3 border-success p-2  mt-2'>
                <Card.Title>Dayanara R.</Card.Title>
                <Card.Body>Hola Joshua!</Card.Body>
            </Card> */}

            <div className="userChat" onClick={handleChat}>
                <img src="https://cdn1.vectorstock.com/i/1000x1000/51/95/businessman-avatar-cartoon-character-profile-vector-25645195.jpg" alt="profile"></img>
                <div className="userChatInfo">
                    <span>{`${user.firstName} ${user.lastName}`}</span>
                    <p>{messages.length > 0 ? messages[messages.length - 1].content : null}</p>
                </div>
            </div>


        </>
    )
}