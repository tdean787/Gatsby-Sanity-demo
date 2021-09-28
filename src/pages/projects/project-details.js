import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

export default function Component({ data }) {
  return (
    <Layout>
      <div>test</div>
      {data.sanityProject.name}
      {data.sanityProject.description}
      {/* <p>{data}</p> */}
    </Layout>
  )
}

export const query = graphql`
  query Project($slug: String) {
    sanityProject(id: { eq: $slug }) {
      name
      description
    }
  }
`
