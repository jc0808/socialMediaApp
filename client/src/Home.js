import { useEffect, useState } from "react";
import { Container, Col, Row, Card, Button, Dropdown } from "react-bootstrap";
import Chat from "./Chat";
import Chats from "./Chats";
import PostCard from "./PostCard";

import { currentUser, selectCurrentUserID, selectPosts } from './Store';
import { useDispatch, useSelector } from "react-redux";

const ws = new WebSocket("ws://localhost:3000/cable")


export default function Home() {

    const [post, setPost] = useState(false);
    // const [allPosts, setAllPosts] = useState(useSelector(selectPosts));
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const allPosts = useSelector(selectPosts);
    const dispatch = useDispatch();

    const [chats, setChats] = useState([]);

    const [guid, setGuid] = useState("");

    const [newMessage, setNewMessage] = useState(null);

    const currentUserId = useSelector(selectCurrentUserID);

    const [chat, setChat] = useState({
        display: false,
        id: null,
        messages: []
    });

    ws.onopen = () => {
        console.log("Connected to websocket server");
        setGuid(Math.random().toString(36).substring(2, 15));

        ws.send(
            JSON.stringify({
                command: "subscribe",
                identifier: JSON.stringify({
                    id: guid,
                    channel: "MessagesChannel"
                })
            })
        )
    }

    ws.onmessage = (e) => {
        const data = JSON.parse(e.data)

        if (data.type === "ping") return;
        if (data.type === "welcome") return;
        if (data.type === "confimr_subscription") return;

        const message = data.message;

        console.log(message)

        setNewMessage(message)


        // postMessage(message);



    }


    useEffect(async () => {
        await fetch(`/chats`)
            .then(r => r.json())
            .then(data => setChats(data.filter(chat => chat.profile_id === currentUserId)))

        // console.log(useSelector(selectPosts))




    }, [])

    console.log(chats[0]?.messages)


    function createPost() {
        setPost((post) => !post)
    }

    const convert2base64 = file => {
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result.toString());
        };

        reader.readAsDataURL(file)

    }

    function handleContent(e) {
        setContent(e.target.value);
    }

    function handleSubmitForm(e) {
        e.preventDefault();

        // convert2base64(e.target['imageUpload'].files[0])

        // const newPost = {
        //     id: 0,
        //     profile_id: 0,
        //     content: content,
        //     image: image
        // }

        const addpost = {
            type: 'addPost',
            payload: {
                content: content,
                image: image
            }
        }

        dispatch(addpost);

        setImage('')

    }

    const handleDisplayChat = (id) => {
        setChat({
            display: true,
            id: id,
            messages: chats.filter(chat => chat.id === id)[0].messages
        });
    }

    const goBack = () => {
        setChat({
            display: false,
            id: null,
            messages: null
        })
    }

    console.log(chat.messages)

    const displayPosts = allPosts.map(post => {
        return (
            <PostCard key={post.id} id={post.id} firstName={post.firstName} lastName={post.lastName} content={post.content} image={post.image}
                comments={post.my_comments} likes={post.my_likes} dislikes={post.my_dislikes} profileId={post.profile_id} />
        )
    })

    const displayChats = chats.map(chat => {
        return (
            <Chats key={chat.id} id={chat.id} messages={chat.messages} handleDisplayChat={handleDisplayChat} />
        )
    })
    return (
        <div>
            <Container id='homeContainer'>
                <Row id='homeContainer' style={{ backgroundColor: "blue" }}>

                    {/* This will only appear on small devices */}
                    <Col className='mt-5 d-block d-sm-none d-flex justify-content-evenly p-2' style={{ backgroundColor: "yellow" }}>
                        <h3>Make a post</h3>
                        <h3>Messages</h3>
                    </Col>

                    {/* Left side */}
                    <Col className='mt-5 d-none d-lg-block' id='left' style={{ backgroundColor: "yellow" }}>

                        <h1 className='text-center'>Left Side</h1>

                        <Container fluid>

                            <Container className="text-center">
                                <button onClick={() => createPost()}>{post ? "Cancel" : "Create a Post"}</button>
                            </Container>

                            {post ? <Card style={{ width: '25rem' }} className="p-3 align-items-center">
                                <Card.Title className='text-center'> Create Post</Card.Title>
                                <Card.Text>
                                    <form onSubmit={handleSubmitForm}>
                                        <label htmlFor="content">Content: </label>
                                        <input id="content" type="text" onChange={handleContent}></input>
                                        <input id="imageUpload" type="file" onChange={(e) => convert2base64(e.target.files[0])} />
                                        <button className="me-2" variant="primary"> Post</button>
                                    </form>

                                </Card.Text>
                                {/* <Card.Img variant="top" src="https://media.istockphoto.com/id/980239992/vector/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-style.jpg?s=612x612&w=0&k=20&c=1ikVDLkafPxGOLqq4gtIs4HQFBQpdjuiaSchIoqW_M4=" /> */}

                                <Card.Body>
                                    <div className='d-flex p-1 justify-content-center'>

                                        {/* <Card.Text style={{ color: "grey" }}>0 comments</Card.Text> */}
                                    </div>

                                </Card.Body>
                            </Card> : null}
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
                    <Col className='mt-5 postsCol ' id='middle' style={{ backgroundColor: "red" }} >


                        {/* <Container fluid> */}

                        {/* <PostCard showImage="d-none" />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard showImage="d-none" />
                        <PostCard showImage="d-none" />
                        <PostCard showImage="d-none" />
                        <PostCard showImage="d-none" /> */}

                        {displayPosts ? displayPosts : null}






                        {/* </Container> */}


                    </Col>

                    {/* Right side */}
                    {/* This will only appear on large devices */}
                    <Col className='mt-5 d-none d-md-block ' id='right' style={{ backgroundColor: "yellow" }}>
                        {/* d-lg-none */}
                        <h1 className='text-center'>Chats</h1>


                        <Container>
                            {!chat.display ? <div className='chatBorder'>

                                {/* <Card className='border border-3 border-success p-2'>
                                    <Card.Title>Mark G.</Card.Title>
                                    <Card.Body>Hi Joshua! How are you?</Card.Body>
                                </Card>

                                <Card className='border border-3 border-success p-2  mt-2'>
                                    <Card.Title>Dayanara R.</Card.Title>
                                    <Card.Body>Hola Joshua!</Card.Body>
                                </Card> */}

                                <div>
                                    <input type="search" placeholder="Search Chat..." />
                                    <button>Create a new Chat</button>
                                </div>

                                {/* <div>
                                    <Dropdown show>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>chat1</Dropdown.Item>
                                            <Dropdown.Item>chat2</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div> */}

                                {/* <Chats />
                                <Chats />
                                <Chats />
                                <Chats />
                                <Chats />
                                <Chats />
                                <Chats />
                                <Chats />
                                <Chats />
                                <Chats /> */}

                                {displayChats}


                            </div>




                                :
                                <div className="mt-5">
                                    <Chat id={chat.id} messages={chat.messages} goBack={goBack} ws={ws} newMessage={newMessage} />
                                </div>
                            }




                            {/* <div className="chat">
                                <div className="messages">
                                    <div className="right">
                                        <label>Hello Joshua!</label>
                                    </div>

                                    <div className="left">
                                        <label>Hello Carlos!</label>
                                    </div>
                                </div>




                                <div className="inputText">
                                    <input type="text" placeholder="Send a Message ✍️..." />
                                </div>

                            </div> */}

                        </Container>
                    </Col>



                </Row >
            </Container >
        </div >
    )
}