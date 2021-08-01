import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ButtonDefault } from "../components/common/buttons"
import { SectionIntro, ContainerLayout } from "../components/common";
import { IntroSection, Title, Text, Avatar, PostTitle, PostText, ReviewPost, SubText, ActivityWrapper, ActivityScrollbar, ActivityFeed, ActivityEntry, ActivityEntryWrapper, ActivityEntryInfo, ActivityEntryTime, ActivityEntryDetails, ActivityEntryStatus, RecentActivities, RecentPosts, HomeCharacters, HomeEntries } from '../components/styled/home';
import { CurrentEntries, CurrentEntryTitles, EntryCard, EntryCardViewMore, EntryProgress, EntryScore, EntryStatus } from '../components/about/style';
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
            siteUrl
          }
        }
        User(id: 567710) {
          favourites {
            characters(page: 1, perPage: 10) {
              nodes {
                image {
                  large
                  medium
                }
              }
            }
          }
        }
        Yukino: Character(id: 67067) {
          name {
            userPreferred
          }
          image {
            large
            medium
          }
        }
        Yui: Character(id: 67069) {
          name {
            userPreferred
          }
          image {
            large
            medium
          }
        }
        Yumiko: Character(id: 79593) {
          name {
            userPreferred
          }
          image {
            large
            medium
          }
        }
        Iroha: Character(id: 88727) {
          name {
            userPreferred
          }
          image {
            large
            medium
          }
        }
        Shizuka: Character(id: 67077) {
          name {
            userPreferred
          }
          image {
            large
            medium
          }
        }
        Haruno: Character(id: 79589) {
          name {
            userPreferred
          }
          image {
            large
            medium
          }
        }
        Saki: Character(id: 74587) {
          name {
            userPreferred
          }
          image {
            large
            medium
          }
        }
        YahariBackground: Media(id: 108489) {
          bannerImage
        }
        anime: Page(page: 1, perPage: 20) {
          mediaList(userId: 567710, status: CURRENT, type: ANIME, sort: UPDATED_TIME_DESC) {
            media {
              title {
                userPreferred
              }
              coverImage {
                medium
                large
                extraLarge
              }
              mediaListEntry {
                progress
                score
                media {
                  episodes
                  status
                }
              }
              siteUrl
            }
          }
        }
        manga: Page(page: 1, perPage: 50) {
          mediaList(userId: 567710, status: CURRENT, type: MANGA, sort: UPDATED_TIME_DESC) {
            media {
              title {
                userPreferred
              }
              coverImage {
                medium
                large
                extraLarge
              }
              mediaListEntry {
                progress
                score
                media {
                  chapters
                  status
                }
              }
              siteUrl
            }
          }
        }
        mangaTwo: Page(page: 2, perPage: 50) {
          mediaList(userId: 567710, status: CURRENT, type: MANGA, sort: UPDATED_TIME_DESC) {
            media {
              title {
                userPreferred
              }
              coverImage {
                medium
                large
                extraLarge
              }
              mediaListEntry {
                progress
                score
                media {
                  chapters
                  status
                }
              }
              siteUrl
            }
          }
        }
      }
    }
  `)

  const allManga = data.anilist.manga.mediaList.concat(data.anilist.mangaTwo.mediaList)

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
                    <PostText><span>{review.summary}</span><a href={review.siteUrl}>See full review</a></PostText>
                  </ReviewPost>
                )
              })}
            </RecentPosts>

            <ActivityWrapper>
              <SubTitle>Activity</SubTitle>
              <ActivityScrollbar>
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
              </ActivityScrollbar>
            </ActivityWrapper>
          </RecentActivities>

          <HomeCharacters>
            <img src={data.anilist.Yui.image.large} alt="Yui Yuigahama" />
            <img src={data.anilist.Yukino.image.large} alt="Yukino Yukinoshita" />
            <img src={data.anilist.Yumiko.image.large} alt="Yumiko Miura" />
            <img src={data.anilist.Iroha.image.large} alt="Iroha Isshiki" />
            <img src={data.anilist.Shizuka.image.large} alt="Shizuka Hiratsuka" />
          </HomeCharacters>

          <HomeEntries>
            <SubTitle>Watching <span>View More</span></SubTitle>
            <CurrentEntries style={{ display: "flex", flexDirection: "row", justifyContent: "spaceEvenly", gridGap: "20px" }}>
              {data.anilist.anime.mediaList.slice(0, 7).map(({ media }) => {
                return (
                  <EntryCard>
                    <img src={media.coverImage.extraLarge} alt="anime cover"></img>
                    <CurrentEntryTitles><a href={media.siteUrl} target="_blank" rel="noreferrer">{media.title.userPreferred}</a></CurrentEntryTitles>
                    <EntryScore>{media.mediaListEntry.score}</EntryScore>
                    <EntryProgress>{media.mediaListEntry.progress}/{media.mediaListEntry.media.episodes}</EntryProgress>
                    <EntryStatus></EntryStatus>
                  </EntryCard>
                )
              })}
            </CurrentEntries>
          </HomeEntries>

          <HomeEntries>
            <SubTitle>Reading</SubTitle>
            <CurrentEntries style={{ display: "flex", flexDirection: "row", justifyContent: "spaceEvenly", gridGap: "20px" }}>
              {allManga.slice(0, 7).map(({ media }) => {
                return (
                  <EntryCard>
                    <img src={media.coverImage.extraLarge} alt="manga cover"></img>
                    <CurrentEntryTitles><a href={media.siteUrl} target="_blank" rel="noreferrer">{media.title.userPreferred}</a></CurrentEntryTitles>
                    <EntryScore>{media.mediaListEntry.score}</EntryScore>
                    <EntryProgress>{media.mediaListEntry.progress}/{media.mediaListEntry.media.chapters}</EntryProgress>
                    <EntryStatus></EntryStatus>
                  </EntryCard>
                )
              })}
            </CurrentEntries>
          </HomeEntries>

        </ContainerLayout>
      </SectionIntro>
    </Layout>
  )
}

export default IndexPage
