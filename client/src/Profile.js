import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Friends from "./Friends";
import Posts from "./Posts";

import profilePic from "./profilePic.png";
import { useSelector } from "react-redux";
import { selectMyProfileInfo } from "./Store";

export default function Profile() {

    const [changeView, setChangeView] = useState("posts");


    const profileInfo = useSelector(selectMyProfileInfo);

    function changeV(v) {
        setChangeView(v)
    }


    const followers = profileInfo.followers.map(follower => {

        return {
            id: follower.id,
            profile_id: follower.profile_id,
            firstName: follower.followers_profiles.firstName,
            lastName: follower.followers_profiles.lastName
        }
    })

    return (
        <Container >

            <Container className="header border border-3">
                <h1 className="text-center">{`${profileInfo.firstName} ${profileInfo.lastName}`}</h1>

                <Container className="d-flex justify-content-center">
                    <div className="circle" style={{ backgroundImage: `url(${profileInfo.image})` }}></div>
                </Container>
                <h3>Location: {profileInfo.location}</h3>
                <h3>Age: {profileInfo.age}</h3>

            </Container>


            <Container className="mt-3 text-center">
                <Row>
                    <Col style={{ backgroundColor: "lightGreen" }}>
                        <h2 id="profileButtons" onClick={() => changeV("posts")}>My Posts {`(${profileInfo.posts.length})`} </h2>
                    </Col>
                    {/* <Col style={{ backgroundColor: "lightGreen" }}>
                        <h2 id="profileButtons" onClick={() => changeV("photos")}>My Photos (10) </h2>
                    </Col> */}

                    <Col style={{ backgroundColor: "lightGreen" }}>
                        <h2 id="profileButtons" onClick={() => changeV("friends")}>My Followers {`(${profileInfo.followers.length})`} </h2>
                    </Col>
                </Row>


            </Container>

            <Container>

                <Row className="Prow">

                    {changeView === "posts" ? <Posts profileInfo={profileInfo} /> : null}
                    {/* {changeView === "photos" ? "photos" : null} */}
                    {changeView === "friends" ? <Friends profileInfo={profileInfo} followers={followers} /> : null}

                </Row>

            </Container>

            {/* <h2 className="text-center mt-5">Your posts</h2>
            <Container className="d-flex justify-content-center"> */}


            {/* <Card style={{ width: '25rem' }} className="p-3 mt-3">
                <Card.Title className='text-center'> <img style={{ width: "40px" }} src='https://cdn-icons-png.flaticon.com/512/5556/5556529.png' alt="profile" />Joshua Campos</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Img className="d-none" variant="top" src="https://media.istockphoto.com/id/980239992/vector/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-style.jpg?s=612x612&w=0&k=20&c=1ikVDLkafPxGOLqq4gtIs4HQFBQpdjuiaSchIoqW_M4=" />

                <Card.Body>
                    <div className='d-flex p-1 justify-content-center'>
                        <Card.Text className="me-5 " style={{ color: "grey" }}>0 ❤️ 0❌</Card.Text>
                        <Card.Text style={{ color: "grey" }}>0 comments</Card.Text>
                    </div>
                    <Button className="me-2" variant="primary"> 0 Like</Button>
                    <Button variant="danger">0 Dislike</Button>
                </Card.Body>
            </Card>
        </Container> */}


        </Container >
    )
}