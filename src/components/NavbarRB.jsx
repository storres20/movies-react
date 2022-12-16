import { NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.scss';
import {
  Navbar, Container, Nav, NavDropdown,
} from 'react-bootstrap';
import styles from './NavbarRB.module.css';

export default function NavbarRB() {
  return (
    {/* <div>
      <ul>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
      </ul>
    </div> */}
    ,
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className={styles.NavTitle}><NavLink to="/">Movies</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><NavLink to="/" className={styles.NavSubTitle}>Home</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/about" className={styles.NavSubTitle}>About</NavLink></Nav.Link>
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
