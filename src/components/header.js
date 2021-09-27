import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../../styles/global.css"
import * as headerStyles from "../../styles/header.module.scss"
import Helmet from "react-helmet"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

const Header = ({ siteTitle }) => (
  <header>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
        integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Shows and Allen Logo"
            className={headerStyles.logo}
            src={"/showsallenlogo.png"}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={headerStyles.links} href="/about">
              About
            </Nav.Link>
            <Nav.Link className={headerStyles.links} href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className={headerStyles.links} href="#">
              Contact Us
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="justify-content-end">
            <Nav.Link href="https://facebook.com">
              <i class="fab fa-facebook"></i>
            </Nav.Link>
            <Nav.Link eventKey={2} href="https://instagram.com">
              <i class="fab fa-instagram"></i>
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://showsandallen.sanity.studio/desk"
            >
              <i class="far fa-user-circle"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <nav className={headerStyles.topnav}>
      <img className={headerStyles.logo} src={"showsallenlogo.png"}></img>
      <Link class="active" to="/">
        Home
      </Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>

      <div className={headerStyles.social}>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>

        <Link target="_blank" href="https://showsandallen.sanity.studio/desk">
          <i class="far fa-user-circle"></i>
        </Link>
      </div>
    </nav> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
