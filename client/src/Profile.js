import { useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Routes } from "react-router-dom";
import Friends from "./Friends";
import Posts from "./Posts";

import profilePic from "./profilePic.png";

export default function profile() {




    return (
        <Container>

            <Container className="header border border-3">
                <h1 className="text-center">Joshua Campos</h1>

                <Container className="d-flex justify-content-center">
                    <div className="circle" style={{ backgroundImage: `url(${profilePic})` }}></div>
                </Container>
                <h3>Location: USA</h3>
                <h3>Age: 21</h3>

            </Container>


            <Container className="mt-3 text-center">
                <Row>
                    <Col style={{ backgroundColor: "lightGreen" }}>
                        <h2 id="profileButtons" >My Posts</h2>
                    </Col>
                    <Col style={{ backgroundColor: "lightGreen" }}>
                        <h2 id="profileButtons" >My Photos</h2>
                    </Col>

                    <Col style={{ backgroundColor: "lightGreen" }}>
                        <h2 id="profileButtons"  >My Friends</h2>
                    </Col>
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