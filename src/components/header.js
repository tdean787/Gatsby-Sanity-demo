import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../../styles/global.css"
import * as styles from "../../styles/header.module.css"
import * as headerStyles from "../../styles/header.module.scss"
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
    <nav className={headerStyles.topnav}>
      <img className={headerStyles.logo} src={"showsallenlogo.png"}></img>
      <Link class="active" to="/">
        Home
      </Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>

      <div className={headerStyles.social}>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="far fa-user-circle"></i>
      </div>
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
