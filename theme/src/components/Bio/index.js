import React, { Component } from "react"
import { string } from "prop-types"

import ImageProfile from "../Image"

import "./style.scss"

class Bio extends Component {
  static propTypes = {
    name: string,
    description: string,
  }

  render() {
    const { name, description } = this.props

    return (
      <div className="bio-wrapper">
        <ImageProfile />
        <h1>{name}</h1>
        <p><b>{description}</b></p>
        <p>PT. Astrido Prima Mobilindo, Jalan Raya Serpong Sutera Niaga IV No 1, <br/> Pakulonan Serpong, Tangerang</p>
      </div>
    )
  }
}

export default Bio
