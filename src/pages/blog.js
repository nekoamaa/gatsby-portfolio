import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import { Calendar, Clock } from 'react-feather'
import Img from "gatsby-image"
import { ContainerLayout, WorkPost, Intro, SubTitle, Title, Text, HeaderIntro, SubText, SmallText, UnderLink, ReadMore } from "../components/common"
import CategoriesTags from '../components/CategoriesTags/categoriesTags';
import kebabCase from "lodash/kebabCase"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <Layout>
        <SEO title="Blog" />
        <Intro>

          <SubTitle>
            Blog
          </SubTitle>

          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <WorkPost key={node.fields.slug}>
                <div className="media">
                  <Link to={node.fields.slug}>
                    <Img fluid={node.frontmatter.image.childImageSharp.fluid} title="work title" />
                  </Link>
                </div>

                <div className="content">
                  <header>
                    <Title>
                      <Link className="text-primary" style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </Title>
                    <SmallText>
                      <Calendar className="align-middle text-primary" width="18" height="18" />
                      <span className="align-middle"> date published : {node.frontmatter.date} </span>
                    </SmallText>
                    <SmallText>
                      <Clock className="align-middle text-primary" width="18" height="18" />
                      <span className="align-middle"> read time : {node.frontmatter.time} </span>
                    </SmallText>
                  </header>
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                  <Link to={node.fields.slug}>
                    <ReadMore className="lined-link"> read more &#8594; </ReadMore>
                  </Link>
                </div>
              </WorkPost>
            )
          })}


        </Intro>
      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            time
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            categories
            imageCredit
            description
          }
        }
      }
    }
  }
`