import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "./style.scss"

const Benefit = () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(fields: { slug: { eq: "/components/Benefit/" } }) {
          html
        }
      }
    `}
    render={data => <div className="benefit-wrapper" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />}
  />
)

export default Benefit
