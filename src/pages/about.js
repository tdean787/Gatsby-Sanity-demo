import React from "react"
import Layout from "../components/layout"
import * as styles from "../../styles/about.module.css"

export default function about() {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <section className={styles.aboutText}>
          <p>
            We are a landscape architecture firm offering a wide variety of
            design services. These services range from simple one-time
            consultations to the development of fully detailed plans and
            specifications. Below is a brief list of some of the services we can
            provide, individually or in combination:
          </p>
          <br></br>
          <li>Consultation – either on site or in our office </li>
          <li>
            Site Survey & Inventory (extensive site survey may require a
            professional surveyor)
          </li>
          <li>Site Planning </li>
          <li>Conceptual Design </li>
          <li>Complete Site Design to include</li>
          <li> Hardscape, Grading & Drainage, and Planting plans</li>
          <li>
            Design of Outdoor Structures (swimming pools, water features,
            arbors, cabanas, etc.)
          </li>
          <li>Construction Details and Specifications </li>
          <li>Project Monitoring </li>
          <li>Phased Landscape Planning</li>
        </section>
      </div>
    </Layout>
  )
}
