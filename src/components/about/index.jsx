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
                I am an anime and manga enthusiast with over <b>1200 hours</b> watched
                and <b>10000 chapters</b> read. I have consumed quite a bit of anime and manga
                if I do say so myself. Some of my favorite anime include
                'Steins;Gate', 'Oregairu', 'Hyouka', and 'ReLife'. For manga, I enjoyed reading 'Haite Kudasai, Takamine-san',
                'Amagami-san Chi no Enmusubi', 'Kaette kudasai! Akutsu-san', and 'Horimiya'.
              </Text>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About