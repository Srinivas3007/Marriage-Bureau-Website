import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header(){
    return (
    <div className="header">
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Medari Matrimony</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#login">Login</Nav.Link>
                        <NavDropdown title="Help" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">24x7 Help: <br/>INDIA: +91 9490331429
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">
                            Contact Us
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Feedback</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                            About Us
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
}