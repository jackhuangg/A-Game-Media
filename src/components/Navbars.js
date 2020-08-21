import React from 'react'
import logo from './logo.jpeg'
import './Navbars.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function Navbars() {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="bar">
          <Navbar.Brand href="#home">A-Game Media Co.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-right">
              <Nav.Link href="About">About</Nav.Link>
              <Nav.Link href="Blog">Blogs</Nav.Link>
              <NavDropdown title="Podcasts" id="collasible-nav-dropdown">
                <NavDropdown.Item href="Podcasts">UnAthletic</NavDropdown.Item>
                <NavDropdown.Item href="Podcasts">A-Game Talks</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbars
