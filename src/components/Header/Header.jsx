import { Container, Nav, Navbar } from "react-bootstrap"
import './header.css'

const Header = () => {
  return (
<>
<Navbar className=" border border-bottom-2 shadow-sm">
    <Container className="py-1">
        <Navbar.Brand className="fw-bold">
            Where in the world?
        </Navbar.Brand>
        <Nav className="ms-auto">
            <Nav.Link className="fw-semibold text-dark">
            <i className="bi bi-moon px-1"></i>
                Dark Mode
            </Nav.Link>
        </Nav>
    </Container>
</Navbar>
</>
  )
}

export default Header
