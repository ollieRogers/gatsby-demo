/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./header"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: "roboto",
    marginTop: theme.spacing(8),
  },
  footer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />

      <Container className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
        <footer className={classes.footer}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
