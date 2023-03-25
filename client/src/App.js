
import './App.css';
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <div>
      <NavBar />

      {/* <Row style={{ textAlign: "center" }} className="mt-3"><h3>Your Feed</h3></Row> */}
      {/* className='d-flex justify-content-center' */}

      {/* <Home /> */}

      <Profile />

    </div >
  );
}

export default App;
