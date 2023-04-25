import { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import CommentCard from "./CommentCard";

export default function PostCard({ showImage }) {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(false);
    const [ShowCommentSection, setShowCommentSection] = useState(false);

    // The current user will only be able to like or dislike one time per post
    // and will only be able to like or dislike per porst
    function handleLikes() {
        if (!action) {
            setLikes(likes + 1);
            setAction((action) => !action);
        }

        if (likes > 0) {
            setLikes(likes - 1);
            setAction((action) => !action);
        }
    }

    function handleDislikes() {
        if (!action) {
            setDislikes(dislikes + 1);
            setAction((action) => !action);
        }

        if (dislikes > 0) {
            setDislikes(dislikes - 1);
            setAction((action) => !action);
        }
    }

    return (
        <>
            <Card style={{ width: '25rem' }} className="p-3 mt-3">
                <Card.Title className='text-center'> <img style={{ width: "40px" }} src='https://cdn-icons-png.flaticon.com/512/5556/5556529.png' alt="profile" />Joshua Campos</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Img className={`${showImage}`} variant="top" src="https://media.istockphoto.com/id/980239992/vector/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-style.jpg?s=612x612&w=0&k=20&c=1ikVDLkafPxGOLqq4gtIs4HQFBQpdjuiaSchIoqW_M4=" />

                <Card.Body>
                    <div className='d-flex p-1 justify-content-center'>
                        {/* <Card.Text className="me-5 " style={{ color: "grey" }}>0 ❤️ 0❌</Card.Text> */}
                        <Card.Text style={{ color: "grey", cursor: "pointer" }} onClick={() => setShowCommentSection((ShowCommentSection) => !ShowCommentSection)} >0 comments</Card.Text>


                    </div>
                    <Button className="me-2" variant="primary" onClick={() => handleLikes()}> {`${likes} Likes`} </Button>
                    <Button variant="danger" onClick={() => handleDislikes()}>{`${dislikes} Dislikes`}</Button>
                </Card.Body>
            </Card>

            {ShowCommentSection
                ?
                <Container className="commentsContainer">
                    <Container id="exitC">
                        <label onClick={() => setShowCommentSection((ShowCommentSection) => !ShowCommentSection)}>X</label>
                    </Container>

                    <CommentCard />

                    <CommentCard />

                    <CommentCard />

                    <CommentCard />

                    <CommentCard />

                    <CommentCard />

                    <CommentCard />

                    <CommentCard />

                    <Container className="commentInput">
                        <input id='cInput' type='text' placeholder='Comment here ✍️...' />
                    </Container>
                </Container>
                :
                null}

        </>
    )
}