import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import darkLogo from '../../img/logo.jpg'
import lightLogo from '../../img/lightLogo.png'
import './Header.css'
import Switch from 'react-switch';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

type HeaderProps = {
    setDarkMode: () => void
    darkMode: boolean
}

export default function Header({ setDarkMode, darkMode }: HeaderProps) {
    return (
        <header style={darkMode ? {backgroundColor: '#0D1B2A'} : {backgroundColor: '#E0E1DD'}} className='p-4'>
            <Navbar style={darkMode ? {backgroundColor: '#0D1B2A'} : {backgroundColor: '#E0E1DD'}} key='md' expand='md' className='navbar'>
                <Container fluid>
                    <Navbar.Brand href='#'>
                        {darkMode ? <img className='headerLogo' src={darkLogo} alt="" /> : <img className='headerLogo' src={lightLogo} alt="" />}
                    </Navbar.Brand>
                    <Navbar.Toggle style={darkMode ? {backgroundColor: '#415A77'} : {backgroundColor: '#E0E1DD'}}aria-controls='offcanvasNavbar-expand-md'></Navbar.Toggle>
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
                        <Offcanvas.Body style={darkMode ? {backgroundColor: '#0D1B2A'} : {backgroundColor: '#E0E1DD'}}>
                            <Nav style={darkMode ? {backgroundColor: '#0D1B2A'} : {backgroundColor: '#E0E1DD'}} className="justify-content-end align-items-center flex-grow-1 pe-3">
                                <Switch onChange={setDarkMode} checked={darkMode} offColor='#0D1B2A' onColor='#E0E1DD' checkedIcon={<CiLight size={24} color='black' />} uncheckedIcon={<CiDark size={24} color='white' />} />
                                <Nav.Link style={darkMode ? {color: 'white'} : {color: '#0D1B2A'}} className='navbarLink' href='#personalProjectsSect'>Projetos</Nav.Link>
                                <Nav.Link style={darkMode ? {color: 'white'} : {color: '#0D1B2A'}} className='navbarLink' href='#whoAmISect'>Sobre mim</Nav.Link>
                                <Nav.Link style={darkMode ? {color: 'white'} : {color: '#0D1B2A'}} className='navbarLink' href='#'>Contato</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    )
}