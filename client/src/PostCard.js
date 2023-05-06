import { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import CommentCard from "./CommentCard";

export default function PostCard({ content, image }) {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(false);
    const [ShowCommentSection, setShowCommentSection] = useState(false);
    // const f = new FileReader();
    // const i = f.readAsDataURL(image)






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
            <Card style={{ width: '25rem', height: 'fit-content' }} className="p-3 mt-3">
                <Card.Title className='text-center'> <img style={{ width: "40px" }} src='https://cdn-icons-png.flaticon.com/512/5556/5556529.png' alt="profile" />Joshua Campos</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
                <Card.Img variant="top" src={image} />

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