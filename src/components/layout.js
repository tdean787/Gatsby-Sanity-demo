/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../../styles/global.css"
import Header from "./header"
import Footer from "./Footer"
import * as styles from "../../styles/layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.site} style={{ fontFamily: "Roboto, sans-serif" }}>
      <Header />
      <main className={styles.siteContent}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
