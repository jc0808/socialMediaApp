import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUserProfiles } from "./Store";

export default function Chats({ id, messages, handleDisplayChat }) {

    const userProfiles = useSelector(selectUserProfiles);

    const user = userProfiles.filter(profile => profile.id === messages[messages.length - 1].receiver_id)[0];

    console.log(user)

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
                    <p>{messages[messages.length - 1].content}</p>
                </div>
            </div>


        </>
    )
}