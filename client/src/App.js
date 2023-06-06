
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import { Routes, Route, useNavigate } from "react-router-dom";
import Account from './Account';
import Login from './Login';
import { useState, useEffect } from 'react';
import { selectCurrentUserID, selectUserProfiles, selectLoadData, fetchData } from './Store';
import { useDispatch, useSelector } from 'react-redux';
import Profile2 from './Profile2';
import SignUp from './SignUp';

import ActionCable from "actioncable";



function App() {

  const [logedIn, setLogedIn] = useState(false);

  const [viewP, setViewP] = useState(parseInt(localStorage.getItem('profileId')));

  const navigate = useNavigate();

  const currentUserId = useSelector(selectCurrentUserID);

  const { error, loading, data } = useSelector(selectLoadData);

  const profiles = useSelector(selectUserProfiles)?.filter(profile => profile.id !== currentUserId);

  const [userID, setUserID] = useState(null);
  const [proceed, setProceed] = useState(false);

  // const [newMessage, setNewMessage] = useState(null);
  // const [newChat, setNewChat] = useState(null);

  // const dispatch = useDispatch();


  // const cable = ActionCable.createConsumer("ws://localhost:3000/cable");



  // const createSubscriptionForMessages = () => {
  //   cable.subscriptions.create(
  //     { channel: "MessagesChannel" },
  //     { received: (message) => handleReceivedMessage(message) }
  //   );
  // };

  // const handleReceivedMessage = (message) => {
  //   setNewMessage(message);
  // };

  // const createSubscriptionForChats = () => {
  //   cable.subscriptions.create(
  //     { channel: "ChatsChannel" },
  //     { received: (chat) => handleReceivedChat(chat) }
  //   );
  // };

  // const handleReceivedChat = (chat) => {
  //   setNewChat(chat);
  // };


  // const createSubscriptionForPosts = () => {
  //   cable.subscriptions.create(
  //     { channel: "PostsChannel" },
  //     { received: (post) => handleReceivedPost(post) }
  //   );
  // };

  // const handleReceivedPost = (post) => {
  //   if (post.profile_id !== currentUserId) {
  //     const addPost = {
  //       type: 'addPostToFP',
  //       payload: {
  //         id: post.id,
  //         profile_id: post.profile_id,
  //         content: post.content,
  //         image: post.image,
  //         my_likes: post.my_likes,
  //         my_dislikes: post.my_dislikes,
  //         my_comments: post.my_comments
  //       }
  //     }

  //     dispatch(addPost);
  //   }
  // };


  // useEffect(() => {
  //   createSubscriptionForMessages();
  //   createSubscriptionForChats();
  //   createSubscriptionForPosts();
  // }, [])

  // console.log(newMessage)
  // console.log(newChat)



  //auto login
  useEffect(() => {
    fetch('/auth')
      .then(r => {
        if (r.ok) {
          r.json().then(user => setUserID(user)).then(setLogedIn(true)).then();
        }
      });
  }, [])


  const countDown = () => {
    setTimeout(() => {
      setProceed(true);
    }, 2000)
  };

  useEffect(() => {
    if (userID) {
      fetchData(userID);
      console.log(userID)

      countDown()

    }

  }, [userID])


  function handleLogin(id) {
    setUserID(id)
    console.log(id)
    setLogedIn(true)

  }

  function profileView(id) {

    const findUser = profiles.filter(p => p.id === id);
    setViewP(findUser[0].id);
    localStorage.setItem('profileId', findUser[0].id);

    navigate(`/viewprofile`)
  }

  const logOut = () => {
    setLogedIn(false)
    setUserID(false)
    setProceed(false)
    navigate("/")
  }

  if (error) {
    return <div>Error!</div>
  }

  if (loading) {
    return <div>Loading...</div>
  } else {


    return (
      <>
        {logedIn && proceed
          ?
          <>
            <NavBar profileView={profileView} profiles={profiles} logOut={logOut} />

            <Routes>
              <Route path="/" element={<Home profiles={profiles} />} />
              <Route path="/myProfile" element={<Profile />} />
              <Route path="/account" element={<Account />} />
              <Route path={`/viewprofile`} element={<Profile2 id={viewP} />} />
            </Routes>
          </>
          :
          <>
            <Routes>
              <Route path="/" element={<Login handleLogin={handleLogin} />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
          </>}

      </>
    );
  }


}

export default App;