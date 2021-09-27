import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../../styles/global.css"
import * as styles from "../../styles/header.module.css"
import Helmet from "react-helmet"

const Header = ({ siteTitle }) => (
  <header>
    <Helmet>
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
    </Helmet>
    <nav className={styles.topnav}>
      <img className={styles.logo} src={"showsallenlogo.png"}></img>
      <Link class="active" to="/">
        Home
      </Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
