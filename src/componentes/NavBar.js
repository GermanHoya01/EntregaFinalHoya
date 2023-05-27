import { Container, Nav, Navbar as BNavbar } from "react-bootstrap";
import CartWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return (
        
            <BNavbar bg="dark" variant="dark">
                <Container>
                    <BNavbar.Brand as={Link} to="/">
                        Mi Tienda
                    </BNavbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/category/Yoda">
                            Yoda
                        </Nav.Link>
                        <Nav.Link as={Link} to="/category/Darth Vader">
                            Darth Vader
                        </Nav.Link>
                        <Nav.Link as={Link} to="/category/Mando">
                            Mando
                        </Nav.Link>
                        <NavLink to="/cart" className="header__link link"><CartWidget /></NavLink>

                    </Nav>
                </Container>
            </BNavbar>
        
    );
}

export default Navbar;
