import React from 'react'
import '../styles/Navbars.css'
import { Navbar, Nav } from 'react-bootstrap'

function Navbars() {
    return (
        <Navbar collapseOnSelect expand="xl" variant="dark" className="bar">
          <Navbar.Brand href="Home">A-Game Media Co.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-right">
              <Nav.Link href="About">About</Nav.Link>
              <Nav.Link href="Blog">Blogs</Nav.Link>
              <Nav.Link href="Podcasts">Podcasts</Nav.Link>
              <Nav.Link href="Connect">Connect</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbars
