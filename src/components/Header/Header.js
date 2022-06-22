import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return (
        <div className="header" id="header-container">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className="hello">Hello</div>
                        <div className="ielts">IELTS</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">IELTS Exam Information</Nav.Link>
                            <Nav.Link href="#features">IELTS Prep</Nav.Link>
                            <Nav.Link href="#features">Real Tests</Nav.Link>
                            <Nav.Link href="#features">Tips</Nav.Link>
                            <Nav.Link href="#features">Your courses</Nav.Link>
                            <Button id="login-header-button">Log In</Button>
                            <Button id="signup-header-button">Sign Up</Button>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}