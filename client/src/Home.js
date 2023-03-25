import { Container, Col, Row, Card, Button } from "react-bootstrap";

export default function Home() {
    return (
        <div>
            <Container  >
                <Row style={{ backgroundColor: "blue" }}>

                    {/* This will only appear on small devices */}
                    <Col className='mt-5 d-block d-sm-none d-flex justify-content-evenly p-2' style={{ backgroundColor: "yellow" }}>
                        <h3>Make a post</h3>
                        <h3>Messages</h3>
                    </Col>

                    {/* Left side */}
                    <Col className='mt-5 d-none d-lg-block' style={{ backgroundColor: "yellow" }}>

                        <h1 className='text-center'>Left Side</h1>

                        <Container fluid>
                            <Card style={{ width: '25rem' }} className="p-3 align-items-center">
                                <Card.Title className='text-center'> Create Post</Card.Title>
                                <Card.Text>
                                    <input type="text" ></input>
                                </Card.Text>
                                {/* <Card.Img variant="top" src="https://media.istockphoto.com/id/980239992/vector/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-style.jpg?s=612x612&w=0&k=20&c=1ikVDLkafPxGOLqq4gtIs4HQFBQpdjuiaSchIoqW_M4=" /> */}

                                <Card.Body>
                                    <div className='d-flex p-1 justify-content-center'>

                                        {/* <Card.Text style={{ color: "grey" }}>0 comments</Card.Text> */}
                                    </div>
                                    <Button className="me-2" variant="primary"> Post</Button>
                                </Card.Body>
                            </Card>
                        </Container>


                        {/* This will only appear on medium devices */}
                        <Col className='mt-5 d-none d-md-block ' style={{ backgroundColor: "yellow" }}>

                            <h1 className='text-center'>Chats</h1>


                            <Container>

                                <div className='chatBoder'>

                                    <Card className='border border-3 border-success p-2'>
                                        <Card.Title>Mark G.</Card.Title>
                                        <Card.Body>Hi Joshua! How are you?</Card.Body>
                                    </Card>

                                    <Card className='border border-3 border-success p-2 rounded mt-2'>
                                        <Card.Title>Dayanara R.</Card.Title>
                                        <Card.Body>Hola Joshua!</Card.Body>
                                    </Card>


                                </div>

                            </Container>
                        </Col>


                    </Col>


                    {/* Middle side */}
                    <Col className='mt-5' style={{ backgroundColor: "red" }} >


                        <Container fluid>


                            <Card style={{ width: '25rem' }} className="p-3 mt-3">
                                <Card.Title className='text-center'> <img style={{ width: "40px" }} src='https://cdn-icons-png.flaticon.com/512/5556/5556529.png' alt="profile" />Joshua Campos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Img className="d-none" variant="top" src="https://media.istockphoto.com/id/980239992/vector/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-style.jpg?s=612x612&w=0&k=20&c=1ikVDLkafPxGOLqq4gtIs4HQFBQpdjuiaSchIoqW_M4=" />

                                <Card.Body>
                                    <div className='d-flex p-1 justify-content-center'>
                                        {/* <Card.Text className="me-5 " style={{ color: "grey" }}>0 ❤️ 0❌</Card.Text> */}
                                        <Card.Text style={{ color: "grey" }}>0 comments</Card.Text>
                                    </div>
                                    <Button className="me-2" variant="primary"> 0 Like</Button>
                                    <Button variant="danger">0 Dislike</Button>
                                </Card.Body>
                            </Card>


                            <Card style={{ width: '25rem' }} className="p-3 mt-3">
                                <Card.Title className='text-center'> <img style={{ width: "40px" }} src='https://cdn-icons-png.flaticon.com/512/5556/5556529.png' alt="profile" />Joshua Campos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Img variant="top" src="https://media.istockphoto.com/id/980239992/vector/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-style.jpg?s=612x612&w=0&k=20&c=1ikVDLkafPxGOLqq4gtIs4HQFBQpdjuiaSchIoqW_M4=" />

                                <Card.Body>
                                    <div className='d-flex p-1 justify-content-center'>
                                        {/* <Card.Text className="me-5 " style={{ color: "grey" }}>0 ❤️ 0❌</Card.Text> */}
                                        <Card.Text style={{ color: "grey" }}>0 comments</Card.Text>
                                    </div>
                                    <Button className="me-2" variant="primary"> 0 Like</Button>
                                    <Button variant="danger">0 Dislike</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '25rem' }} className="p-3 mt-3">
                                <Card.Title className='text-center'> <img style={{ width: "40px" }} src='https://cdn-icons-png.flaticon.com/512/5556/5556529.png' alt="profile" />Joshua Campos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Img variant="top" src="https://media.istockphoto.com/id/980239992/vector/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-style.jpg?s=612x612&w=0&k=20&c=1ikVDLkafPxGOLqq4gtIs4HQFBQpdjuiaSchIoqW_M4=" alt="profile" />

                                <Card.Body>
                                    <div className='d-flex p-1 justify-content-center'>
                                        {/* <Card.Text className="me-5 " style={{ color: "grey" }}>0 ❤️ 0❌</Card.Text> */}
                                        <Card.Text style={{ color: "grey" }}>0 comments</Card.Text>
                                    </div>
                                    <Button className="me-2" variant="primary"> 0 Like</Button>
                                    <Button variant="danger"> 0 Dislike</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '25rem' }} className="p-3 mt-3">
                                <Card.Title className='text-center'> <img style={{ width: "40px" }} src='https://cdn-icons-png.flaticon.com/512/5556/5556529.png' alt="profile" />Joshua Campos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Img variant="top" src="https://media.istockphoto.com/id/980239992/vector/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-style.jpg?s=612x612&w=0&k=20&c=1ikVDLkafPxGOLqq4gtIs4HQFBQpdjuiaSchIoqW_M4=" alt="profile" />

                                <Card.Body>
                                    <div className='d-flex p-1 justify-content-center'>
                                        {/* <Card.Text className="me-5 " style={{ color: "grey" }}>0 ❤️ 0❌</Card.Text> */}
                                        <Card.Text style={{ color: "grey" }}>0 comments</Card.Text>
                                    </div>
                                    <Button className="me-2" variant="primary"> 0 Like</Button>
                                    <Button variant="danger"> 0 Dislike</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '25rem' }} className="p-3 mt-3">
                                <Card.Title className='text-center'> <img style={{ width: "40px" }} src='https://cdn-icons-png.flaticon.com/512/5556/5556529.png' alt="profile" />Joshua Campos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Img variant="top" src="https://media.istockphoto.com/id/980239992/vector/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-style.jpg?s=612x612&w=0&k=20&c=1ikVDLkafPxGOLqq4gtIs4HQFBQpdjuiaSchIoqW_M4=" alt="profile" />

                                <Card.Body>
                                    <div className='d-flex p-1 justify-content-center'>
                                        {/* <Card.Text className="me-5 " style={{ color: "grey" }}>0 ❤️ 0❌</Card.Text> */}
                                        <Card.Text style={{ color: "grey" }}>0 comments</Card.Text>
                                    </div>
                                    <Button className="me-2" variant="primary"> 0 Like</Button>
                                    <Button variant="danger"> 0 Dislike</Button>
                                </Card.Body>
                            </Card>



                        </Container>


                    </Col>

                    {/* Right side */}
                    {/* This will only appear on large devices */}
                    <Col className='d-none d-md-block d-lg-none' style={{ backgroundColor: "yellow" }}>

                        <h1 className='text-center'>Chats</h1>


                        <Container>

                            <div className='chatBoder'>

                                <Card className='border border-3 border-success p-2'>
                                    <Card.Title>Mark G.</Card.Title>
                                    <Card.Body>Hi Joshua! How are you?</Card.Body>
                                </Card>

                                <Card className='border border-3 border-success p-2 rounded mt-2'>
                                    <Card.Title>Dayanara R.</Card.Title>
                                    <Card.Body>Hola Joshua!</Card.Body>
                                </Card>


                            </div>

                        </Container>
                    </Col>



                </Row>
            </Container>
        </div>
    )
}