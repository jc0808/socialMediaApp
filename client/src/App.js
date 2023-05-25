
import './App.css';
// import { Container, Col, Row, Card, Button } from "react-bootstrap";
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import { Routes, Route, useNavigate } from "react-router-dom";
import Account from './Account';
import Login from './Login';
import { useState, useEffect, useRef } from 'react';
import { selectCurrentUserID, selectUserProfiles, selectLoadData, fetchData } from './Store';
import { useDispatch, useSelector } from 'react-redux';
import Profile2 from './Profile2';
import SignUp from './SignUp';

// const ws = new WebSocket("ws://localhost:3000/cable")



// const g1 = Math.random().toString(36).substring(2, 15);
// const g2 = Math.random().toString(36).substring(2, 15);

function App() {




  const [logedIn, setLogedIn] = useState(false);





  const [viewP, setViewP] = useState(parseInt(localStorage.getItem('profileId')));
  // let viewP = null;

  // let viewP = useRef(localStorage.getItem('id'));

  const navigate = useNavigate();

  const currentUserId = useSelector(selectCurrentUserID);

  const { error, loading, data } = useSelector(selectLoadData);

  // const dispatch = useDispatch();

  const profiles = useSelector(selectUserProfiles)?.filter(profile => profile.id !== currentUserId);

  const [userID, setUserID] = useState(null);
  const [proceed, setProceed] = useState(false);

  // const [guid, setGuid] = useState('');

  // const [guid2, setGuid2] = useState('');

  // const [newMessage, setNewMessage] = useState(null);



  // ws.onopen = () => {
  //   console.log("Connected to websocket server");
  //   setGuid(Math.random().toString(36).substring(2, 15));

  //   ws.send(
  //     JSON.stringify({
  //       command: "subscribe",
  //       identifier: JSON.stringify({
  //         id: guid,
  //         channel: "MessagesChannel"
  //       })
  //     })
  //   )

  // ws.send(
  //   JSON.stringify({
  //     command: "subscribe",
  //     identifier: JSON.stringify({
  //       id: guid,
  //       channel: "ChatsChannel"
  //     })
  //   })
  // )
  // }

  // ws.onmessage = (e) => {
  //   const data = JSON.parse(e.data)

  //   if (data.type === "ping") return;
  //   if (data.type === "welcome") return;
  //   if (data.type === "confimr_subscription") return;



  //   const message = data.message;
  //   setNewMessage(message)
  //   console.log(data.message)

  // }


  // useEffect(() => {

  //   setGuid(g1)
  //   setGuid2(g2)


  //   ws.onopen = () => {
  //     console.log("Connected to websocket server");
  //     // setGuid(Math.random().toString(36).substring(2, 15));
  //     // setGuid2(Math.random().toString(36).substring(2, 15))



  //     ws.send(
  //       JSON.stringify({
  //         command: "subscribe",
  //         identifier: JSON.stringify({
  //           id: guid,
  //           channel: "MessagesChannel"
  //         })
  //       })
  //     )

  //     ws.send(
  //       JSON.stringify({
  //         command: "subscribe",
  //         identifier: JSON.stringify({
  //           id: guid2,
  //           channel: "ChatsChannel"
  //         })
  //       })
  //     )
  //   }

  //   ws.onmessage = (e) => {
  //     const data = JSON.parse(e.data)

  //     if (data.type === "ping") return;
  //     if (data.type === "welcome") return;
  //     if (data.type === "confimr_subscription") return;

  //     console.log(data)
  //     const chat = data.message;
  //     if (chat !== undefined) {
  //       // postMessage(message)
  //       // console.log(message)
  //       // setChats([...chats, chat])

  //       console.log(data)
  //     }


  //   }
  // }, [])










  //auto login
  useEffect(() => {
    fetch('/auth')
      .then(r => {
        if (r.ok) {
          r.json().then(user => setUserID(user)).then(setLogedIn(true)).then();
        }
      });

    // console.log(store.getState())

    // .followers_posts[0].posts.comments




  }, [])



  // useEffect(async () => {
  //   const loadData = await fetch('/profiles')

  //   const data = await loadData.json()

  //   setProfiles(data.filter(profile => profile.id !== currentUserId));


  // }, [])

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
    // // viewP.current = findUser[0].id
    localStorage.setItem('profileId', findUser[0].id);
    // // viewP = findUser


    navigate(`/viewprofile`)
  }

  const logOut = () => {
    setLogedIn(false)
    setUserID(false)
    setProceed(false)
  }

  // console.log(data)






  // console.log(parseInt(localStorage.getItem('profileId')))

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

            {/* <Row style={{ textAlign: "center" }} className="mt-3"><h3>Your Feed</h3></Row> */}
            {/* className='d-flex justify-content-center' */}

            {/* <Home /> */}


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


// return (
//   <>
//     {logedIn
//       ?
//       <>
//         <NavBar profileView={profileView} />

//         {/* <Row style={{ textAlign: "center" }} className="mt-3"><h3>Your Feed</h3></Row> */}
//         {/* className='d-flex justify-content-center' */}

//         {/* <Home /> */}


//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/myProfile" element={<Profile />} />
//           <Route path="/account" element={<Account />} />
//           <Route path={`/viewprofile`} element={<Profile2 id={viewP} />} />
//         </Routes>
//       </>
//       :
//       <>
//         <Routes>
//           <Route path="/" element={<Login handleLogin={handleLogin} />} />
//         </Routes>
//       </>}

//   </>
// );
