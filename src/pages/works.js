import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Tag, ContainerLayout, WorkPost, Category, Intro, SubTitle, Title, Text, ReviewPost } from "../components/common"

const WorkIndex = ({ data }) => {
  const works = data.allMarkdownRemark.edges
  const reviews = data.anilist.Page.reviews

  return (
    <>
      <Layout>
        <SEO title="Reviews" />
        <Intro>

          <SubTitle className="text-secondary">
            Reviews
          </SubTitle>

          {reviews.map((review) => {
            return (
              <ReviewPost>
                <Title>{review.media.title.userPreferred} - {review.createdAt}</Title>
                <img src={review.media.coverImage.large} alt="media image" />
                <Text>{review.summary}</Text>
              </ReviewPost>
            )
          })}


          {works.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <WorkPost key={node.fields.slug}>
                <div>
                  <header>
                    <Title>
                      <Link className="text-primary lined-link" style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </Title>
                    <Link to={node.fields.slug}>
                      <Img fluid={node.frontmatter.image.childImageSharp.fluid} title="work title" />
                    </Link>
                  </header>
                </div>

                <div>
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              </WorkPost>
            )
          })}
        </Intro>
      </Layout>
    </>
  )
}

export default WorkIndex

export const pageQuery = graphql`
  query {
    anilist {
      Page(page: 1, perPage: 10) {
        pageInfo {
          total
          perPage
        }
        reviews(userId: 567710, sort: CREATED_AT_DESC) {
          media {
            title {
              romaji
              english
              native
              userPreferred
            }
            coverImage {
              extraLarge
              large
              medium
              color
            }
          }
          summary
          score
          rating
          ratingAmount
          createdAt
          body
        }
      }
    }
    
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(works)/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            category
            description
          }
        }
      }
    }

  }
`