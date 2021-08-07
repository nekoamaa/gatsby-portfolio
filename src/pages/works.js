import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { ContainerLayout } from "../components/common";
import { WorkPost, Intro, SubTitle, PostTitle, PostText, ReviewPost, SubText } from "../components/common"
import { ThumbsUp } from 'react-feather'

const WorkIndex = ({ data }) => {
  const works = data.allMarkdownRemark.edges
  const reviews = data.anilist.Page.reviews

  return (
    <>
      <Layout>
        <SEO title="Reviews" />
        <Intro>
          <ContainerLayout>
            <SubTitle>
              Reviews
            </SubTitle>
            {reviews.map((review) => {
              return (
                <ReviewPost>
                  <img src={review.media.coverImage.extraLarge} alt="anime" class="coverImage" />
                  <img src={review.media.bannerImage} alt="anime" class="bannerImage" />
                  <PostTitle>
                    {review.media.title.userPreferred}<span><ThumbsUp /> {review.rating}</span>
                    <SubText>Posted on {review.createdAt}</SubText>
                  </PostTitle>
                  <PostText><span>{review.body}</span><a href="#">See full review</a></PostText>
                </ReviewPost>
              )
            })}

            {/* {works.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <WorkPost key={node.fields.slug}>
                <div>
                  <header>
                    <PostTitle>
                      <Link className="text-primary lined-link" style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </PostTitle>
                    <Link to={node.fields.slug}>
                      <Img fluid={node.frontmatter.image.childImageSharp.fluid} title="work title" />
                    </Link>
                  </header>
                </div>

                <div>
                  <PostText
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              </WorkPost>
            )
          })} */}
          </ContainerLayout>
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