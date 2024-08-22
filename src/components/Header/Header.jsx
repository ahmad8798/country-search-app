import { Container, Nav, Navbar } from "react-bootstrap";
import './header.css';

const Header = ({ isDarkModeEnabled, toggleDarkMode }) => {
  return (
    <Navbar className={`border border-bottom-2 shadow-sm ${isDarkModeEnabled ? "dark-mode-element border-0" : ""}`}>
      <Container className="py-1">
        <Navbar.Brand className={`fw-bold ${isDarkModeEnabled ? "text-light" : ""}`}>
          Where in the world?
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Item
            onClick={toggleDarkMode}
            className={`fw-semibold nav-item ${isDarkModeEnabled ? "text-light" : "text-dark"}`}
            style={{ cursor: "pointer" }}
          >
            <i className={`bi px-1 ${isDarkModeEnabled ? "text-light bi-moon-fill" : "bi-moon"}`}></i>
            Dark Mode
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
