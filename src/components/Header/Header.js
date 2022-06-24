import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import useState from 'react';
import {NavLink } from 'react-router-dom'


export default function Header() {
    const navLinkStyle = ({isActive}) => {
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
                            <Button id="login-header-button">Log In</Button>
                            <Button id="signup-header-button">Sign Up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}