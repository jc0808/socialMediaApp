import { Card, Container } from "react-bootstrap";

export default function CommentCard() {
    return (
        <>
            <Container className="mt-2">
                <Container id="profileImage">
                    <img src="https://cdn-icons-png.flaticon.com/512/5556/5556529.png" alt="profilePic" />
                    <label>Joshua Campos</label>
                    <label id="arrow">⤵</label>
                </Container>
                <Card>
                    <Card.Text>Hello</Card.Text>
                </Card>
            </Container>

        </>
    )
}