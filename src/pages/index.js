import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { SectionIntro, ContainerLayout } from "../components/common";
import { HomeSection, Title, Text, Avatar } from '../components/styled/home';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "oregairu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
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
          <HomeSection>
            <div>
              <Title>Hey there, nekoama here.</Title>
              <Text>Welcome to my portoflio! Feel free to browse through my site and let me know what you think. </Text>
            </div>
            <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
          </HomeSection>
        </ContainerLayout>
      </SectionIntro>
    </Layout>
  )
}

export default IndexPage
