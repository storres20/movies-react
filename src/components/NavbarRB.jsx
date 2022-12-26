import { NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.scss';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import styles from './NavbarRB.module.css';

import Footer from './Footer/Footer';

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
          </Nav>
          <Footer />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
