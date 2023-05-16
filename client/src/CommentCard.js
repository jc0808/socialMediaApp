import { Card, Container } from "react-bootstrap";

export default function CommentCard({ content, firstName, lastName }) {
    return (
        <>
            <Container className="mt-2">
                <Container id="profileImage">
                    <img src="https://cdn-icons-png.flaticon.com/512/5556/5556529.png" alt="profilePic" />
                    <label>{`${firstName} ${lastName}`}</label>
                    <label id="arrow">⤵</label>
                </Container>
                <Card>
                    <Card.Text>{content}</Card.Text>
                </Card>
            </Container>

        </>
    )
}