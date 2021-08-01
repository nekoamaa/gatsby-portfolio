import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ChevronDown } from 'react-feather'
import { AboutSection, Title, Text, SubTitle, FavoriteCharacters, FavoriteCharactersContainer, CurrentEntries, CurrentEntryTitles, EntryCard, EntryCardViewMore, EntryProgress, EntryScore, EntryStatus } from './style';
import { SectionIntro, ContainerLayout } from "../common";
import AnimeStats from '../../components/mediaStats/animeStats';
import MangaStats from '../../components/mediaStats/mangaStats';


const About = () => {
  const data = useStaticQuery(graphql`
    query {   
      anilist {
        anime: Page(page: 1, perPage: 20) {
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
                  status
                }
              }
              siteUrl
            }
          }
        }
        manga: Page(page: 1, perPage: 50) {
          mediaList(userId: 567710, status: CURRENT, type: MANGA, sort: SCORE_DESC) {
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
          mediaList(userId: 567710, status: CURRENT, type: MANGA, sort: SCORE_DESC) {
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
        Media (id: 128160){
          bannerImage
          coverImage {
            extraLarge
            large
            medium
            color
          }
        }
        Asahi: Character(id: 229667) {
          name {
            userPreferred
          }
          image {
            large
            medium
          }
        }
        Yae: Character(id: 229666) {
          name {
            userPreferred
          }
          image {
            large
            medium
          }
        }
        Yuna: Character(id: 229665) {
          name {
            userPreferred
          }
          image {
            large
            medium
          }
        }
      }
    }
  `)

  console.log(data.anilist.anime.mediaList)

  const allManga = data.anilist.manga.mediaList.concat(data.anilist.mangaTwo.mediaList)
  const favoriteAnimeTitles = data.anilist.User.favourites.anime.nodes.map(node => node.title.userPreferred)
  const favoriteMangaTitles = data.anilist.User.favourites.manga.nodes.map(node => node.title.userPreferred)
  const iconStyle = { verticalAlign: "middle" }

  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <FavoriteCharactersContainer>
              <FavoriteCharacters>
                <img src={data.anilist.Yuna.image.large} alt="Yuna Amagami" />
              </FavoriteCharacters>
              <FavoriteCharacters>
                <img src={data.anilist.Media.bannerImage} alt="Amagami Banner Image"></img>
              </FavoriteCharacters>
              <FavoriteCharacters>
                <img src={data.anilist.Asahi.image.large} alt="Asahi Amagami" />
              </FavoriteCharacters>
              <FavoriteCharacters>
                <img src={data.anilist.Yae.image.large} alt="Yae Amagami" />
              </FavoriteCharacters>
            </FavoriteCharactersContainer>
            {/*<FavoriteCharactersContainer>
              {data.anilist.User.favourites.characters.nodes.map(node => {
                return (
                  <FavoriteCharacters>
                    <img src={node.image.large} alt="favorite characters" />
                  </FavoriteCharacters>
                )
              })}
            </FavoriteCharactersContainer> */}
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
                For manga, I enjoyed reading {favoriteMangaTitles.slice(0, -1).join(', ') + ' and ' + favoriteMangaTitles.slice(-1)}.
              </Text>
            </div>
          </AboutSection>

          <SubTitle>Watching</SubTitle>

          <CurrentEntries>
            {data.anilist.anime.mediaList.slice(0, 6).map(({ media }) => {
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
            <EntryCardViewMore>
              <a href="https://anilist.co/user/nekoama/">View More<ChevronDown style={iconStyle} /></a>
            </EntryCardViewMore>
          </CurrentEntries>

          <SubTitle>Reading</SubTitle>

          <CurrentEntries>
            {allManga.slice(0, 6).map(({ media }) => {
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
            <EntryCardViewMore>
              <a href="https://anilist.co/user/nekoama/">View More<ChevronDown style={iconStyle} /></a>
            </EntryCardViewMore>
          </CurrentEntries>

          <div>
            <SubTitle>Anime Stats</SubTitle>
            <AnimeStats />
          </div>

          <div>
            <SubTitle>Manga Stats</SubTitle>
            <MangaStats />
          </div>


        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About