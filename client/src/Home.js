import { useEffect, useState } from "react";
import { Container, Col, Row, Card, Button, Dropdown } from "react-bootstrap";
import Chat from "./Chat";
import Chats from "./Chats";
import PostCard from "./PostCard";

import { selectCurrentUserID, selectMyFollowers, selectPosts } from './Store';
import { useDispatch, useSelector } from "react-redux";


// const ws = new WebSocket("ws://localhost:3000/cable")

// const gid = Math.random().toString(36).substring(2, 15);



export default function Home({ profiles }) {

    const [post, setPost] = useState(false);
    // const [allPosts, setAllPosts] = useState(useSelector(selectPosts));
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const allPosts = useSelector(selectPosts);
    const dispatch = useDispatch();



    const [chats, setChats] = useState([]);

    const [chatErrorMessage, setChatErrorMessage] = useState(null);

    // const [guid, setGuid] = useState("");

    // const [newMessage, setNewMessage] = useState(null);

    const currentUserId = useSelector(selectCurrentUserID);

    const [openSearchNewChat, setOpenSearchNewChat] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

    const myFollowers = useSelector(selectMyFollowers);



    const [chat, setChat] = useState({
        display: false,
        id: null,
        messages: [],
        receiver: null
    });



    // useEffect(() => {

    //     const ws = new WebSocket("ws://localhost:3000/cable")
    //     ws.onopen = () => {
    //         console.log("Connected to websocket server");
    //         setGuid(gid);



    //         ws.send(
    //             JSON.stringify({
    //                 command: "subscribe",
    //                 identifier: JSON.stringify({
    //                     id: guid,
    //                     channel: "ChatsChannel"
    //                 })
    //             })
    //         )
    //     }

    //     ws.onmessage = (e) => {
    //         const data = JSON.parse(e.data)

    //         if (data.type === "ping") return;
    //         if (data.type === "welcome") return;
    //         if (data.type === "confimr_subscription") return;

    //         console.log(data)
    //         const chat = data.message;
    //         if (chat !== undefined) {
    //             // postMessage(message)
    //             // console.log(message)
    //             setChats([...chats, chat])
    //         }


    //     }
    // }, [])





    useEffect(() => {
        fetch(`/chats`)
            .then(r => r.json())
            .then(data => setChats(data.filter(chat => {
                if (chat.profile_id === currentUserId) {
                    return chat
                } else if (chat.profile_two_id === currentUserId) {
                    return chat
                }
            })))

    }, [])

    console.log(chats)


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


        fetch('/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: content,
                image: image,
                profile_id: currentUserId
            })
        })
            .then(res => res.json())
            .then(post => {
                const addpost = {
                    type: 'addPost',
                    payload: {
                        id: post.id,
                        content: post.content,
                        image: post.image
                    }
                }

                dispatch(addpost);
            })



        setImage('')

    }

    const handleDisplayChat = (id) => {

        const chat = chats.filter(chat => chat.id === id)[0];

        const receiver = chat.profile_id !== currentUserId ? chat.profile_id : chat.profile_two_id
        setChat({
            display: true,
            id: id,
            messages: chat.messages,
            receiver: receiver
        });
    }

    const goBack = () => {
        setChat({
            display: false,
            id: null,
            messages: null,
            reciever: null
        })
    }

    const handleInput = e => {
        setSearchTerm(e.target.value);
    }

    console.log(chats)


    const handleCreateChat = (id) => {
        console.log(id)

        const findChat = chats.find(chat => {
            if (chat.profile_id === id) {
                return chat
            } else if (chat.profile_two_id === id) {
                return chat
            }
        });


        if (!findChat) {
            fetch('/chats', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": null,
                    "profile_id": currentUserId,
                    "profile_two_id": id
                })
            })
                .then(res => res.json())
                .then(newChat => setChats(chats => [...chats, newChat]))
                .then(setOpenSearchNewChat(false))
        } else {
            setChatErrorMessage("You already have a chat with this person")
        }
    }


    //add a unique key to the posts


    const displayPosts = allPosts?.map(post => {
        return (
            <PostCard key={post.id} id={post.id} firstName={post.firstName} lastName={post.lastName} content={post.content} image={post.image}
                comments={post.my_comments} likes={post.my_likes} dislikes={post.my_dislikes} profileId={post.profile_id} pImage={post.pImage} />
        )
    })

    const displayChats = chats.map(chat => {
        return (
            <Chats key={chat.id} id={chat.id} messages={chat.messages} handleDisplayChat={handleDisplayChat} user1={chat.profile_id} user2={chat.profile_two_id} />
        )
    })

    const newChat = () => {
        setOpenSearchNewChat(openSearchNewChat => !openSearchNewChat)
        setChatErrorMessage(null);
    }



    const displayFriendsProfiles = profiles?.filter(p => `${p.firstName.toLowerCase()} ${p.lastName.toLowerCase()}`.includes(searchTerm)).map(profile => {


        const followerFound = profile.followers.find(p => p.profile_id === currentUserId);

        const isFollowing = followerFound ? "✅" : null;
        return (


            <div key={profile.id} className="userChat" onClick={() => handleCreateChat(profile.id)}>
                <img src="https://cdn1.vectorstock.com/i/1000x1000/51/95/businessman-avatar-cartoon-character-profile-vector-25645195.jpg" alt="profile"></img>
                <div className="userChatInfo">
                    <span>{`${profile.firstName} ${profile.lastName}  `}</span>
                    <label>{isFollowing}</label>
                </div>
            </div>
        )
    })
    return (
        <div>
            <Container id='homeContainer'>
                <Row id='homeContainer'>

                    {/* This will only appear on small devices */}
                    {/* <Col className='mt-5 d-block d-sm-none d-flex justify-content-evenly p-2' style={{ backgroundColor: "yellow" }}>
                        <h3>Make a post</h3>
                        <h3>Messages</h3>
                    </Col> */}

                    {/* Left side */}
                    <Col className='mt-5 d-none d-lg-block homeC' id='left' >

                        <h1 className='text-center'>Create post</h1>

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
                        <Col className='mt-5 d-none d-md-block homeC' >

                            {/* <h1 className='text-center'>Chats</h1>


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

                            </Container> */}
                        </Col>


                    </Col>


                    {/* Middle side */}
                    <Col className='mt-5 postsCol homeC' id='middle'  >

                        {displayPosts ? displayPosts : null}



                    </Col>

                    {/* Right side */}
                    {/* This will only appear on large devices */}
                    <Col className='mt-5 d-none d-md-block homeC' id='right' >
                        {/* d-lg-none */}
                        <h1 className='text-center'>Chats</h1>


                        <Container>
                            {!chat.display ? <div className='chatBorder'>

                                <div className="chatSearchAndButton">

                                    {openSearchNewChat ? <input type="search" placeholder="Search profiles..." onChange={handleInput} /> : <input type="search" placeholder="Search Chat..." onChange={handleInput} />}
                                    {openSearchNewChat ? <button onClick={newChat}>Cancel</button> : <button onClick={() => setOpenSearchNewChat(openSearchNewChat => !openSearchNewChat)}>Create a new Chat</button>}
                                </div>

                                <div style={{ color: "red", textAlign: "center", padding: "3px" }}>
                                    <label >{chatErrorMessage}</label>
                                </div>

                                {!openSearchNewChat ? displayChats : displayFriendsProfiles}


                            </div>
                                :
                                <div className="mt-5">
                                    <Chat id={chat.id} messages={chat.messages} goBack={goBack} receiver={chat.receiver} />
                                </div>
                            }

                        </Container>
                    </Col>



                </Row >
            </Container >
        </div >
    )
}