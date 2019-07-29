import React, { Component } from "react"
import "./style.scss"

class WaButton extends Component {

  render() {
    return <a className="wa-button-wrapper" target="_blank" href="https://api.whatsapp.com/send?phone=6285297161262&text=Halo%20Zakiy" rel="noopener noreferrer">Chat by WhatsApp</a>
  }
}

export default WaButton
