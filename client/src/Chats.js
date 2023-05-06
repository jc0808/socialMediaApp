import { Container, Col, Row, Card, Button } from "react-bootstrap";

export default function Chats() {
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

            <div className="userChat">
                <img src="https://cdn1.vectorstock.com/i/1000x1000/51/95/businessman-avatar-cartoon-character-profile-vector-25645195.jpg" alt="profile"></img>
                <div className="userChatInfo">
                    <span>Mark</span>
                    <p>Hi</p>
                </div>
            </div>


        </>
    )
}