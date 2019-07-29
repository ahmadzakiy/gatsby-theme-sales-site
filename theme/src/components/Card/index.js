import React, { Component } from "react"
import { string, number, object } from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./style.scss"

class Card extends Component {
  static propTypes = {
    title: string,
    description: string,
    coverImage: object,
    dateTime: string,
    readTime: number,
    linkPost: string,
  }

  render() {
    const {
      title,
      description,
      coverImage,
      linkPost,
    } = this.props

    return (
      <Link to={linkPost} className="card-link">
        <div className="card-wrapper">
          <span className="detail-promo">check for promo</span>
          <div className="header">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <Img fluid={coverImage} className="card-image" />
      </Link>
    )
  }
}

export default Card
