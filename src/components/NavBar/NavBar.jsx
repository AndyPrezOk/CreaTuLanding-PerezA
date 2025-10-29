import "./navbar.css";
import logoTenis from "../../assets/img/logoT.png";
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">
                    <Link to={"/"}>
                        <img src={logoTenis} className="logo" alt="" />
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/bolsos">Bolsos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/raquetas">Raquetas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget className="carrito" />
            </Container>
        </Navbar>
    )
}

export default NavBar


