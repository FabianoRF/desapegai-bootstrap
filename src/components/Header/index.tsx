import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './styles.css';

interface HeaderProps {
  showLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLogo = true }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="bg-primary border-bottom border-info"
    >
      <Navbar.Brand href="/" className="logo">
        {showLogo && 'Desapega-aí'}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="font-weight-bold text-light">
          <Nav.Link href="/" className="nav-item font-weight-bold text-light">
            Home
          </Nav.Link>
          <Nav.Link
            href="/register-products"
            className="nav-item font-weight-bold text-light"
          >
            Vender
          </Nav.Link>

          <NavDropdown
            title="Categorias"
            id="collasible-nav-dropdown"
            className="font-weight-bold text-light"
          >
            <NavDropdown.Item href="/cars">Automóveis</NavDropdown.Item>
            <NavDropdown.Item href="/home-objects">Casa</NavDropdown.Item>
            <NavDropdown.Item href="/objects">Pessoal</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/sign-in" className="font-weight-bold text-light">
            Entrar
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
