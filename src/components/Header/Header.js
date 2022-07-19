import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function Header() {
    // const [count, setCount] = useState(0);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);



    const handleCloseLogIn = () => setShowLogin(false);
    const handleShowLogIn = () => setShowLogin(true);
    const handleCloseSignUp = () => setShowSignUp(false);
    const handleShowSignUp = () => setShowSignUp(true);



    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? 'var(--e-dark-yellow)' : 'white'
        }
    }


    return (
        <div className="header" id="header-container">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <div className="hello">Hello</div>
                        <div className="ielts">IELTS</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto align-items-center">
                            <NavLink style={navLinkStyle} to='/'>Home</NavLink>
                            <NavLink style={navLinkStyle} to='/ieltsinfo'>IELTS Exam Information</NavLink>
                            <NavLink style={navLinkStyle} to='/ieltsprep'>IELTS Prep</NavLink>
                            <NavLink style={navLinkStyle} to='/realtests'>Real Tests</NavLink>
                            <NavLink style={navLinkStyle} to='/tips'>Tips</NavLink>
                                <Button variant="primary" onClick={handleShowLogIn} id="login-header-button">
                                    Log in
                                </Button>

                                <Modal show={showLogin} onHide={handleCloseLogIn}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Log In</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Type your Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="name@example.com"
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                            >
                                                <Form.Label>Type your password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder=""
                                                    autoFocus
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseLogIn}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleCloseLogIn}>
                                            Log In
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            <Button variant="primary" onClick={handleShowSignUp} id="signup-header-button">
                                    Sign Up
                                </Button>

                                <Modal show={showSignUp} onHide={handleCloseSignUp}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Sign Up</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Type your Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="name@example.com"
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                            >
                                                <Form.Label>Type your name</Form.Label>
                                                <Form.Control
                                                    type="name"
                                                    placeholder="Nguyen Van A"
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                            >
                                                <Form.Label>Type your password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder=""
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                            >
                                                <Form.Label>Comfirm your password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Confirm password"
                                                    autoFocus
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseSignUp}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleCloseSignUp}>
                                            Sign up
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}