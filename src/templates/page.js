import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const {
    contentfulPage: {
      title,
      slug,
      pageContent: {
        childMarkdownRemark: { html },
      },
    },
  } = data

  return (
    <Layout>
      <SEO title="page" />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      title
      slug
      id
      pageContent {
        pageContent
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
