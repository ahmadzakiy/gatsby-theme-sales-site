import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Bio from "../components/Bio"
import Card from "../components/Card"
import Seo from "../components/Seo"

import "../styles/pages/homepage.scss"

class IndexPage extends Component {
  render() {
    const { data } = this.props
    const {
      site: { siteMetadata },
      allMarkdownRemark: { edges },
    } = data

    // console.log("site meta data: ", siteMetadata)
    // console.log("site node data: ", edges)

    return (
      <Layout>
        <Seo title="Home" keywords={[`daihatsu`, `promo`, `murah`]} />
        <Bio
          name={siteMetadata.author}
          description={siteMetadata.authorDescription}
        />
        <div className="card-list">
          {edges.map(({ node }) => {
            return (
              <Card
                key={node.id}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                dateTime={node.frontmatter.date}
                readTime={node.timeToRead}
                coverImage={node.frontmatter.cover.childImageSharp.fluid}
                linkPost={node.fields.slug}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        authorDescription
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC },
      filter: {
      frontmatter: {
        templateKey: {
          eq: "blog-page"
        }
      }
    }
    ) {
      totalCount
      edges {
        node {
          id
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
          timeToRead
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
