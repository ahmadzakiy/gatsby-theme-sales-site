import React, { Component } from "react"
import { node } from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../Header"
import WaButton from "../WaButton"

import "./style.scss"

class Layout extends Component {
  static propTypes = {
    children: node,
  }

  render() {
    const { children } = this.props

    console.log("develop by in.zakiy@gmail.com")

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                author
              }
            }
          }
        `}
        render={data => (
          <div className="layout-wrapper">
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <footer>
              <small>
                {`© ${new Date().getFullYear()}, ${
                  data.site.siteMetadata.title
                }`}
              </small>
            </footer>
            <WaButton />
          </div>
        )}
      />
    )
  }
}

export default Layout
