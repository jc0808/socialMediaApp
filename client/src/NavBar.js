import { Container, Navbar, Form, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectMyProfileInfo } from "./Store";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({ profiles, profileView, logOut }) {

    const myProfileInfo = useSelector(selectMyProfileInfo);

    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();



    const handleInput = e => {
        setSearchTerm(e.target.value);
    }

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(logOut)
    }

    const displayCards = profiles?.filter(p => `${p.firstName.toLowerCase()} ${p.lastName.toLowerCase()}`.includes(searchTerm)).map(profile => {
        return (

            <Dropdown.Item>
                <ProfileCard key={profile.id} id={profile.id} firstName={profile.firstName} lastName={profile.lastName} image={profile.image} profileView={profileView} />
            </Dropdown.Item>

        )
    });



    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Container fluid>
                    <Navbar.Brand href="#">JC Media</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                            <Nav.Link onClick={() => navigate("/myProfile")}>Profile</Nav.Link>
                            <NavDropdown title="Settings" id="navbarScrollingDropdown">
                                <NavDropdown.Item onClick={() => navigate("/account")}>Account</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleLogout}>
                                    Log Out
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Hello, {`${myProfileInfo.firstName}`}!
                            </Nav.Link>
                        </Nav>

                        <Form className="d-flex" >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={handleInput}
                            />

                            {/* <Button variant="outline-success">Search</Button> */}

                        </Form>

                        {searchTerm === "" && !searchTerm ? null
                            :
                            <Dropdown show>
                                <Dropdown.Menu align="end" className="me-5 mt-4" >

                                    {searchTerm === "" && !searchTerm ? <Dropdown.Item>No Results</Dropdown.Item> : displayCards}

                                </Dropdown.Menu>
                            </Dropdown>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <div className="results"></div> */}
        </div >

    );
}