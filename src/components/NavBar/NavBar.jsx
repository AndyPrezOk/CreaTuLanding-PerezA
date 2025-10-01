import "./navbar.css";
import logoTenis from "../../assets/img/logoT.png";
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {

    return (
        /*<nav className="navbar">
            <img src={logoTenis} className="logo" alt="" />

            <ul className="items">
                <li>Raquetas</li>
                <li>Bolsos</li>
                <li>Calzado</li>
                <li>Indumentaria</li>
                <li>Accesorios</li>
            </ul>

            <CartWidget className="carrito"/>
        </nav>*/


        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">
                    <img src={logoTenis} className="logo" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mx-auto">
                        <Nav.Link href="#bolsos" >Bolsos</Nav.Link>
                        <Nav.Link href="#indumentaria">Indumentaria</Nav.Link>
                         <Nav.Link href="#" >Raquetas</Nav.Link>
                        <Nav.Link href="#accesorios">Accesorios</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <CartWidget className="carrito" />
            </Container>

        </Navbar>

    )
}
export default NavBar