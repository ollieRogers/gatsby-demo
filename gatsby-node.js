const path = require(`path`)
const slash = require(`slash`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // we use the provided allContentfulPage query to fetch data from Contentful
  return graphql(
    `
      {
        allContentfulPage {
          edges {
            node {
              slug
              title
              id
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }
      // Resolve the paths to template
      const pageTemplate = path.resolve("./src/templates/page.js")
      // Then for each result create a page.
      result.data.allContentfulPage.edges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: slash(pageTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
