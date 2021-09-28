const path = require("path")

exports.createPages = async ({ page, actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query Projects {
      allSanityProject {
        nodes {
          name
          id
          date
        }
      }
    }
  `)

  data.allSanityProject.nodes.forEach(node => {
    actions.createPage({
      path: `/projects/${node.id}`,
      component: path.resolve("./src/pages/projects/project-details.js"),
      context: { slug: node.id },
    })
  })
  //   // page.matchPath is a special key that's used for matching pages
  //   // only on the client.
  //   if (page.path.match(/^\/projects/)) {
  //     page.matchPath = "/projects/*"

  //     // Update the page.
  //     createPage(page)
  //   }
}
