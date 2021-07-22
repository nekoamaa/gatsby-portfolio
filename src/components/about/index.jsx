import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Avatar, Title, Text, SubTitle, CurrentEntries, CurrentEntryTitles, EntryCard, EntryProgress, EntryScore } from './style';
import { SectionIntro, ContainerLayout } from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {   
      placeholderImage: file(relativePath: { eq: "vivy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      anilist {
        Page(page: 1, perPage: 20) {
          mediaList(userId: 567710, status: CURRENT, type: ANIME, sort: SCORE_DESC) {
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
                }
              }
            }
          }
        }
        User(id: 567710) {
          statistics {
            anime {
              count
              episodesWatched
            }
            manga {
              count
              chaptersRead
            }
          }
          favourites {
            anime(page: 1, perPage: 10) {
              nodes {
                title {
                  userPreferred
                }
              }
            }
            manga(page: 1, perPage: 10) {
              nodes {
                title {
                  userPreferred
                }
              }
            }
          }
        } 
      }
    }
  `)
  const currentAnimeTitles = data.anilist.Page.mediaList.map(({ media }) => {
    console.log(media.title.userPreferred)
    return (
      media.title.userPreferred
    )
  })

  const favoriteAnimeTitles = data.anilist.User.favourites.anime.nodes.map(node => node.title.userPreferred)
  const favoriteMangaTitles = data.anilist.User.favourites.manga.nodes.map(node => node.title.userPreferred)

  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> Anime & Manga Enthusiast </SubTitle>
            </div>
            <div>
              <Title> Hi, I'm <b className="text-primary text-highlight">nekoama</b> </Title>
              <Text>
                I am a <b>high school student</b> with loads of free time on my hands.
                During my free time, I like to watch <b>anime</b>, read <b>manga</b>,
                play some <b>video games</b>, or design some cool <b>websites</b>.
              </Text>
              <Text>
                I am an anime and manga enthusiast with <b>{data.anilist.User.statistics.anime.count}</b> anime watched
                and <b>{data.anilist.User.statistics.manga.count}</b> manga read. I have consumed quite a bit of anime and manga
                if I do say so myself. Some of my favorite anime include {favoriteAnimeTitles.slice(0, -1).join(', ') + ' and ' + favoriteAnimeTitles.slice(-1)}.
                For manga, I enjoyed reading {favoriteMangaTitles.slice(0, -1).join(', ') + ' and ' + favoriteMangaTitles.slice(-1)}
              </Text>
            </div>
          </AboutSection>

          <SubTitle>Watching</SubTitle>

          <CurrentEntries>
            {data.anilist.Page.mediaList.map(({ media }) => {
              return (
                <EntryCard>
                  <img src={media.coverImage.extraLarge} alt="anime cover"></img>
                  <CurrentEntryTitles><a href="#">{media.title.userPreferred}</a></CurrentEntryTitles>
                  <EntryScore>{media.mediaListEntry.score}</EntryScore>
                  <EntryProgress>{media.mediaListEntry.progress}/{media.mediaListEntry.media.episodes}</EntryProgress>
                </EntryCard>
              )
            })}
          </CurrentEntries>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About