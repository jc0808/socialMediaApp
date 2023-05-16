import { Col, Container, Row, Card, Button } from "react-bootstrap";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";
import { selectMyProfileInfo } from "./Store";


export default function Posts({ profileInfo }) {

    // const profileInfo = useSelector(selectMyProfileInfo);

    const displayPosts = profileInfo.posts.map(post => {
        return (
            <PostCard key={post.id} id={post.id} firstName={profileInfo.firstName} lastName={profileInfo.lastName} content={post.content} image={post.image}
                comments={post.my_comments} likes={post.my_likes} dislikes={post.my_dislikes} profileId={profileInfo.id} />
        )
    })

    return (
        <>

            <Row>
                <Col></Col>
                <Col >
                    <Container fluid>

                        {displayPosts}

                    </Container>
                </Col>
                <Col></Col>
            </Row>

        </>
    )
}