import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Avatar, Title, Text, SubTitle } from './style';
import { SectionIntro, ContainerLayout } from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {   
      placeholderImage: file(relativePath: { eq: "yui.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      anilist {
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
                if I do say so myself. Some of my favorite anime Winclude {data.anilist.User.favourites.anime.nodes.map(node => node.title.userPreferred).join(", ")}.
                For manga, I enjoyed reading {data.anilist.User.favourites.manga.nodes.map(node => node.title.userPreferred).join(", ")}
              </Text>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About