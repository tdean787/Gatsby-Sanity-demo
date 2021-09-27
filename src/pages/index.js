import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../../styles/reset.css"
// import * as styles from "../../styles/home.module.css"
import * as homeStyles from "../../styles/home.module.scss"

const IndexPage = () => (
  <Layout>
    <div className={homeStyles.hero}>
      <Seo title="Home" />
      <div className={homeStyles.heroOverlay}>
        <h1>Over 38 Years of Combined Experience</h1>
        <button className={homeStyles.btn}>
          <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          <span>Contact Us</span>
        </button>{" "}
      </div>
      {/* <img
        className={homeStyles.heroImage}
        src={"pexels-mike-145685.jpg"}
      ></img>{" "} */}
      {/* <div className={styles.buttonContainer}>
          <button className={styles.contactButton}>Get in Touch</button>
          <button className={styles.aboutButton}>About Us</button>
        </div> */}
    </div>
    <getData />
  </Layout>
)

export default IndexPage
