import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import * as projectStyles from "../../styles/projects.module.scss"

export default function projects({ data }) {
  if (data) {
    return (
      <Layout>
        <div className={projectStyles.projectContainer}>
          <h1>Shows & Allen Portfolio</h1>
          <div className={projectStyles.projectList}>
            {data.allSanityProject.nodes.map(project => {
              return (
                <Link to={project.id}>
                  <div className={projectStyles.projectTile}>
                    <div className={projectStyles.projectHeader}>
                      <h3>{project.name}</h3>
                    </div>

                    <img
                      alt={project.description}
                      className={projectStyles.projectPhoto}
                      src={project.photo.asset.url}
                    ></img>
                    {/* <p>{project.description}</p> */}
                  </div>
                </Link>
              )
            })}
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
        id
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
