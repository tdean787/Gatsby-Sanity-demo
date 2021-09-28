import React from "react"
import Layout from "../components/layout"
import * as styles from "../../styles/general.module.css"
export default function general() {
  return (
    <Layout>
      <div className={styles.alignContainer}>
        <section className={styles.generalContainer}>
          <p>
            We are a full-service landscape design office. Although we are not a
            design-build firm (we do not do the installation), we can assist you
            in selecting and supervising the appropriate contractors for your
            project. Though the bulk of our work is in the San Antonio area, we
            have done a variety of projects around the state of Texas and
            several overseas. We are happy to help you no matter your location.
            Please see below for information regarding travel time charges.
          </p>
          <h3> Hours of Operation:</h3>
          <p>
            Our office is open Monday through Friday 9 a.m. to 5 p.m. We can
            often accommodate appointments outside our normal business hours,
            especially during Daylight Savings Time. Just call the office to
            make special arrangements.
          </p>
        </section>
      </div>
    </Layout>
  )
}
