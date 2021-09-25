import React from "react"
import { graphql } from "gatsby"
export default function blog({ data }) {
  return (
    <div>
      <p>this is a blog page</p>
      {data.allSanityBlogPost.edges.map(el => {
        return (
          <div>
            <li>{el.node.sponsor.name}</li>
            <li>{el.node.name}</li>
          </div>
        )
      })}
      {data.allSanityBlogPost.edges[0].node.id}
    </div>
  )
}

export const query = graphql`
  {
    allSanityBlogPost {
      edges {
        node {
          id
          name
          sponsor {
            name
            url
          }
        }
      }
    }
  }
`
