import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

import "../styles/templates/blog.scss"

class BenefitPage extends Component {
  render() {
    const { data } = this.props
    const { markdownRemark: post } = data

    // console.log("benefit data: ", data)

    return (
      <Layout>
        <div className="blog-wrapper">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export default BenefitPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
