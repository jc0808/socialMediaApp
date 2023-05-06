
import './App.css';
// import { Container, Col, Row, Card, Button } from "react-bootstrap";
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import { Routes, Route } from "react-router-dom";
import Account from './Account';
import Login from './Login';

function App() {
  return (
    <>
      <NavBar />

      {/* <Row style={{ textAlign: "center" }} className="mt-3"><h3>Your Feed</h3></Row> */}
      {/* className='d-flex justify-content-center' */}

      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myProfile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>

    </>
  );
}

export default App;
