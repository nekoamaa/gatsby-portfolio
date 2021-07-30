import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ButtonDefault } from "../components/common/buttons"
import { SectionIntro, ContainerLayout } from "../components/common";
import { IntroSection, Title, Text, Avatar, ActivityWrapper, ActivityFeed, ActivityEntry, ActivityEntryWrapper, ActivityEntryInfo, ActivityEntryTime, ActivityEntryDetails, ActivityEntryStatus } from '../components/styled/home';
import { SubTitle } from "../components/about/style";


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
          activities(userId: 567710, sort: ID_DESC) {
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
            }
          }
        }
      }
    }
  `)

  console.log(data.anilist.activity)
  console.log(data.anilist.activity.media)
  console.log(data.anilist.activity.activities)

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

          <ActivityWrapper>
            <SubTitle>Activity</SubTitle>
            <ActivityFeed>
              {data.anilist.activity.activities.map((activity) => {
                return (
                  <ActivityEntry>
                    <ActivityEntryWrapper>
                      <ActivityEntryInfo>
                        <ActivityEntryDetails>
                          <ActivityEntryStatus>
                            <img src={activity.media.coverImage.large}></img>
                            <p>{activity.status} {activity.progress} of {activity.media.title.userPreferred}</p>
                          </ActivityEntryStatus>
                        </ActivityEntryDetails>
                      </ActivityEntryInfo>
                      <ActivityEntryTime>
                        <p>24 hours ago</p>
                      </ActivityEntryTime>
                    </ActivityEntryWrapper>
                  </ActivityEntry>
                )
              })}

            </ActivityFeed>
          </ActivityWrapper>


          <SubTitle>Recent Posts - Blog & Reviews</SubTitle>

        </ContainerLayout>
      </SectionIntro>
    </Layout>
  )
}

export default IndexPage
