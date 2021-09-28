import React from "react"
import * as styles from "../../styles/footer.module.scss"
import Card from "react-bootstrap/Card"

export default function Footer() {
  return (
    <footer>
      <Card.Footer className="text-muted" className={styles.footer}>
        <p>Shows & Allen Landscape Architects, LLC </p>
        <p>17320 Classen Road San Antonio, Texas 78247 </p>
        <p>Phone: (210) 497-3222 Fax: (210) 497-3007</p>
        <p>
          E-mail:
          <a href="mailto:info@showsandallen.com?subject=Landscape Architecture Services">
            // info@showsandallen.com
          </a>
        </p>
      </Card.Footer>
    </footer>
  )
}
