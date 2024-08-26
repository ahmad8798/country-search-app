import { Container, Nav, Navbar } from "react-bootstrap";
import './header.css';
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";

const Header = () => {

    const {isDarkModeEnabled,toggleDarkMode} = useContext(themeContext)

  return (
    <Navbar className={`sticky-top shadow-sm ${isDarkModeEnabled?'dark-mode-element':'bg-light border-bottom-2 border'}`}>
      <Container className="py-1">
        <Navbar.Brand className={`fw-bold ${isDarkModeEnabled?'text-light':'text-dark'}`}>
          Where in the world?
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Item
            onClick={toggleDarkMode}
            className={`fw-semibold nav-item  ${isDarkModeEnabled?'text-light':'text-dark'}`}
            style={{ cursor: "pointer" }}
          >
            <i className="bi px-1 bi-moon"></i>
            Dark Mode
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
