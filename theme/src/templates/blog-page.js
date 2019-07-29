import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Benefit from "../components/Benefit"

import "../styles/templates/blog.scss"

class BlogPage extends Component {
  render() {
    const { data } = this.props
    const { markdownRemark: post } = data

    // console.log("blog data: ", data)

    return (
      <Layout>
        <Seo title={post.frontmatter.title} keywords={post.frontmatter.title.split(" ")} />
        <div className="blog-wrapper">
          <h1>{post.frontmatter.title}</h1>
          <h3>{post.frontmatter.description}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Benefit/>
      </Layout>
    )
  }
}

export default BlogPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        description
        cover {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
