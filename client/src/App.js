
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import { Routes, Route, useNavigate } from "react-router-dom";
import Account from './Account';
import Login from './Login';
import { useState, useEffect } from 'react';
import { selectCurrentUserID, selectUserProfiles, selectLoadData, fetchData } from './Store';
import { useSelector } from 'react-redux';
import Profile2 from './Profile2';
import SignUp from './SignUp';



function App() {

  const [logedIn, setLogedIn] = useState(false);

  const [viewP, setViewP] = useState(parseInt(localStorage.getItem('profileId')));

  const navigate = useNavigate();

  const currentUserId = useSelector(selectCurrentUserID);

  const { error, loading, data } = useSelector(selectLoadData);

  const profiles = useSelector(selectUserProfiles)?.filter(profile => profile.id !== currentUserId);

  const [userID, setUserID] = useState(null);
  const [proceed, setProceed] = useState(false);



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