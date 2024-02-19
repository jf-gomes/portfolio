import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import logo from '../../img/logo.jpg'
import './Header.css'
import { FunctionComponent } from 'react';

export default function Header() {
    return (
        <header className='p-4'>
            <Navbar key='md' expand='md' className='navbar'>
                <Container fluid>
                    <Navbar.Brand href='#'>
                        <img className='headerLogo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md'></Navbar.Toggle>
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand-md'
                        aria-labelledby='offcanvasNavbarLabel-expand-md'
                        placemend='end'
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
                                João Gomes
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='navbarOffcanvas'>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className='navbarLink text-white' href='#personalProjectsSect'>Projetos</Nav.Link>
                                <Nav.Link className='navbarLink text-white' href='#whoAmISect'>Sobre mim</Nav.Link>
                                <Nav.Link className='navbarLink text-white' href='#'>Contato</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    )
}