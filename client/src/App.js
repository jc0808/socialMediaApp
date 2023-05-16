
import './App.css';
// import { Container, Col, Row, Card, Button } from "react-bootstrap";
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import { Routes, Route, useNavigate } from "react-router-dom";
import Account from './Account';
import Login from './Login';
import { useState, useEffect } from 'react';
import { store, selectMyProfileInfo, selectCurrentUserID, selectUserProfiles } from './Store';
import { useSelector } from 'react-redux';
import Profile2 from './Profile2';

function App() {

  const [logedIn, setLogedIn] = useState(true);





  const [viewP, setViewP] = useState(null);
  // let viewP = null;

  const navigate = useNavigate();

  const currentUserId = useSelector(selectCurrentUserID);

  const profiles = useSelector(selectUserProfiles).filter(profile => profile.id !== currentUserId);





  //auto login
  useEffect(() => {
    // fetch('/auth')
    //   .then(r => {
    //     if (r.ok) {
    //       r.json().then(user => setCurrentUser(user)).then(setLogedIn(true)).then(console.log(currentUser));
    //     }
    //   });

    console.log(store.getState())

    // .followers_posts[0].posts.comments




  }, [])


  // useEffect(async () => {
  //   const loadData = await fetch('/profiles')

  //   const data = await loadData.json()

  //   setProfiles(data.filter(profile => profile.id !== currentUserId));


  // }, [])


  function handleLogin(user) {
    // setCurrentUser(user)
    setLogedIn(true)
  }

  function profileView(id) {

    const findUser = profiles.filter(p => p.id === id);
    setViewP(findUser[0].id);
    // viewP = findUser


    navigate(`/viewprofile`)
  }




  return (
    <>
      {logedIn
        ?
        <>
          <NavBar profiles={profiles} profileView={profileView} />

          {/* <Row style={{ textAlign: "center" }} className="mt-3"><h3>Your Feed</h3></Row> */}
          {/* className='d-flex justify-content-center' */}

          {/* <Home /> */}


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myProfile" element={<Profile />} />
            <Route path="/account" element={<Account />} />
            <Route path={`/viewprofile`} element={<Profile2 id={viewP} />} />
          </Routes>
        </>
        :
        <>
          <Routes>
            <Route path="/" element={<Login handleLogin={handleLogin} />} />
          </Routes>
        </>}

    </>
  );
}

export default App;
