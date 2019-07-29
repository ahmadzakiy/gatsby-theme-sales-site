import React, { Component } from "react"
import { string } from "prop-types"
import { Link } from "gatsby"

import "./style.scss"

class Header extends Component {
  static propTypes = {
    sitTitle: string,
  }

  static defaultProps = {
    siteTitle: "",
  }

  render() {
    const { siteTitle } = this.props

    return (
      <nav className="header-wrapper">
        <Link to="/">
          <h4 className="logo-title">{siteTitle}</h4>
        </Link>
      </nav>
    )
  }
}

export default Header
