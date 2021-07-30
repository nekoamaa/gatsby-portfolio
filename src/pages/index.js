import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ButtonDefault } from "../components/common/buttons"
import { SectionIntro, ContainerLayout } from "../components/common";
import { IntroSection, Title, Text, Avatar, PostTitle, PostText, ReviewPost, SubText, ActivityWrapper, ActivityFeed, ActivityEntry, ActivityEntryWrapper, ActivityEntryInfo, ActivityEntryTime, ActivityEntryDetails, ActivityEntryStatus, RecentActivities, RecentPosts } from '../components/styled/home';
import { SubTitle } from "../components/about/style";
import { ThumbsUp } from "react-feather"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "oregairu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 10000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      anilist {
        activity: Page(page: 1, perPage: 50) {
          pageInfo {
            total
            perPage
          }
          activities(userId: 567710, sort: ID_DESC, type:MEDIA_LIST) {
            ... on AniList_ListActivity {
              status
              progress
              media {
                title {
                  userPreferred
                }
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
              }
              createdAt
              siteUrl
            }
          }
        }
        reviews: Page(page: 1, perPage: 10) {
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
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <SectionIntro>
        <ContainerLayout>
          <IntroSection>
            <div>
              <Title>Hi, I'm <b className="text-primary text-highlight">nekoama</b></Title>
              <Text>Welcome to my site! Feel free to browse through my site and let me know what you think. </Text>
              <Link to="/about"><ButtonDefault>Learn more about me!</ButtonDefault></Link>
            </div>
            <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
          </IntroSection>

          <RecentActivities>
            <RecentPosts>
              <SubTitle>Recent Posts</SubTitle>
              {data.anilist.reviews.reviews.map((review) => {
                return (
                  <ReviewPost>
                    <img src={review.media.coverImage.extraLarge} alt="anime" />
                    <PostTitle>
                      {review.media.title.userPreferred}<span><ThumbsUp /> {review.rating}</span>
                      <SubText>Posted on {review.createdAt}</SubText>
                    </PostTitle>
                    <PostText><span>{review.summary}</span><a href="#">See full review</a></PostText>
                  </ReviewPost>
                )
              })}
            </RecentPosts>

            <ActivityWrapper>
              <SubTitle>Activity</SubTitle>
              <ActivityFeed>
                {data.anilist.activity.activities.map((activity) => {
                  const coverImageStyle = { backgroundImage: `url(${activity.media.coverImage.medium})`, backgroundPosition: "50%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }
                  return (
                    <ActivityEntry>
                      <ActivityEntryWrapper>
                        <ActivityEntryInfo>
                          <a href={activity.siteUrl} target="_blank" rel="noreferrer" style={coverImageStyle}></a>
                          <ActivityEntryDetails>
                            <ActivityEntryStatus>
                              <span>{activity.status}</span> {activity.progress} of <a href={activity.siteUrl} target="_blank" rel="noreferrer">{activity.media.title.userPreferred}</a>
                            </ActivityEntryStatus>
                          </ActivityEntryDetails>
                        </ActivityEntryInfo>
                        <ActivityEntryTime>
                          <time>24 hours ago</time>
                        </ActivityEntryTime>
                      </ActivityEntryWrapper>
                    </ActivityEntry>
                  )
                })}

              </ActivityFeed>
            </ActivityWrapper>
          </RecentActivities>

        </ContainerLayout>
      </SectionIntro>
    </Layout>
  )
}

export default IndexPage
