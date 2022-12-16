import { NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.scss';
import {
  Navbar, Container, Nav, NavDropdown,
} from 'react-bootstrap';
import styles from './NavbarRB.module.css';

export default function NavbarRB() {
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className={styles.NavTitle}><NavLink to="/">Movies</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${styles.NavBar}`}>
            <NavLink to="/" className={styles.NavSubTitle}>Home</NavLink>
            <NavLink to="/about" className={styles.NavSubTitle}>About</NavLink>
            <NavDropdown title="DropdownXXX" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><span>Action</span></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><span>Another action</span></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><span>Something</span></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><span>Separated link</span></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
