import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"
import { useStaticQuery, navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuBtn: {
    color: "white",
  },
}))

export default function Header() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query menuQuery {
      allContentfulPage {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)

  const {
    allContentfulPage: { edges },
  } = data
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate(`/`)} className={classes.menuBtn}>
            Home
          </Button>

          <div className={classes.grow} />

          {edges.map(edge => (
            <Button
              key={edge.node.id}
              onClick={() => navigate(`/${edge.node.slug}`)}
              className={classes.menuBtn}
            >
              {edge.node.slug}
            </Button>
          ))}

        </Toolbar>
      </AppBar>
    </div>
  )
}
