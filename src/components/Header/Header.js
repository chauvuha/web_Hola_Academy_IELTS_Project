import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

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
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/ieltsinfo">IELTS Exam Information</Nav.Link>
                            <Nav.Link href="/ieltsprep">IELTS Prep</Nav.Link>
                            <Nav.Link href="/realtests">Real Tests</Nav.Link>
                            <Nav.Link href="/tips">Tips</Nav.Link>
                            <Nav.Link href="/yourcourses">Your courses</Nav.Link>
                            <Button id="login-header-button">Log In</Button>
                            <Button id="signup-header-button">Sign Up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}