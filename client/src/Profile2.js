import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Friends from "./Friends";
import Posts from "./Posts";

import profilePic from "./profilePic.png";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUserID, selectMyProfileInfo, selectUserProfiles } from "./Store";

export default function Profile2({ id }) {

    const dispatch = useDispatch();

    const [changeView, setChangeView] = useState("posts");

    const myProfileInfo = useSelector(selectMyProfileInfo);
    const userProfiles = useSelector(selectUserProfiles);

    const profileInfo = userProfiles.find(user => user.id === id);





    const found = profileInfo.followers.find(follower => follower.profile_id === myProfileInfo.id);
    const follow = found ? true : false;

    console.log(profileInfo.followers)

    const followers = profileInfo.followers.map(follower => {

        return {
            id: follower.id,
            profile_id: follower.profile_id,
            firstName: follower.followers_profile.firstName,
            lastName: follower.followers_profile.lastName
        }
    })


    // console.log(profileInfo)
    // console.log(myProfileInfo)
    // console.log(found)


    function changeV(v) {
        setChangeView(v)
    }

    const handleFollow = () => {

        const followProfile = {
            type: 'followProfile',
            payload: {
                id: profileInfo.id
            }
        };

        dispatch(followProfile)

    }

    const handleRemoveFollower = () => {
        const removeFollower = {
            type: 'removeFollower',
            payload: {
                id: profileInfo.id
            }
        };

        dispatch(removeFollower)

    }


    return (
        <Container>

            <Container className="header border border-3">
                <h1 className="text-center">{`${profileInfo?.firstName} ${profileInfo?.lastName}`}</h1>

                <Container className="d-flex justify-content-center">
                    <div className="circle" style={{ backgroundImage: `url(${profilePic})` }}></div>
                </Container>
                <h3>Location: {profileInfo?.location}</h3>
                <h3>Age: {profileInfo?.age}</h3>

                <Container className="d-flex justify-content-around follow">
                    {follow ?
                        <>
                            <h3>Following ✅</h3>
                            <button onClick={handleRemoveFollower}>Remove Follower</button>
                        </>
                        :

                        <button className="followButton" onClick={handleFollow}>Follow</button>}
                </Container>

            </Container>


            <Container className="mt-3 text-center">
                <Row>
                    <Col style={{ backgroundColor: "lightGreen" }}>
                        <h2 id="profileButtons" onClick={() => changeV("posts")}>Posts {`(${profileInfo?.posts?.length})`} </h2>
                    </Col>
                    <Col style={{ backgroundColor: "lightGreen" }}>
                        <h2 id="profileButtons" onClick={() => changeV("photos")}>Photos (10) </h2>
                    </Col>

                    <Col style={{ backgroundColor: "lightGreen" }}>
                        <h2 id="profileButtons" onClick={() => changeV("friends")}>Followers {`(${profileInfo?.followers?.length})`} </h2>
                    </Col>
                </Row>


            </Container>

            <Container>

                <Row className="Prow">

                    {changeView === "posts" ? <Posts profileInfo={profileInfo} myProfileInfo={myProfileInfo} /> : null}
                    {changeView === "photos" ? "photos" : null}
                    {changeView === "friends" ? <Friends followers={followers} profileInfo={profileInfo} /> : null}

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