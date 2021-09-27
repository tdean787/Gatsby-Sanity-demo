import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../../styles/projects.module.css"

export default function projects({ data }) {
  if (data) {
    return (
      <Layout>
        <div className={styles.projectContainer}>
          <h1>Shows & Allen Portfolio</h1>
          {console.log(data)}
          <div>
            <div className={styles.projectsGrid}>
              {data.allSanityProject.nodes.map(el => {
                return (
                  <div className={styles.projectTile}>
                    <h3>{el.name}</h3>
                    <img
                      className={styles.projectPhoto}
                      src={el.photo.asset.url}
                    ></img>
                    <p>{el.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <div>project list</div>
      {}
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityProject {
      nodes {
        name
        photo {
          asset {
            url
          }
        }
        date
        description
      }
    }
  }
`
