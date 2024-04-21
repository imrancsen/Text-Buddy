import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Home from './Home';

const NavBar = () => {
    const [isLoggedIn, setisLoggedIn] = useState(null)
    const navigate = useNavigate()

    const logIn = ()=>{
        setisLoggedIn(true)
        alert("Login Successfully")
        navigate("/textform")
    }
    const logOut = ()=>{
        setisLoggedIn(false)
        alert("Logout Successfully")
        navigate("/home")
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Text Buddy</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/textform">Texting Area</Nav.Link>
                    </Nav>
                    {!isLoggedIn ? <form className='d-flex'>
                        <button className='btn btn-primary mx-1' onClick={logIn}>Login</button>
                        <button className='btn btn-primary mx-1'>Signup</button>
                    </form> : <button className='btn btn-primary mx-1' onClick={logOut}>Logout</button>}


                </Container>
            </Navbar>

        </div>
    )
}

export default NavBar
