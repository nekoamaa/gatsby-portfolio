import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { SectionIntro, ContainerLayout } from "../components/common";
import { HomeSection, Title, Text, Avatar } from '../components/styled/home';

const IndexPage = () => {
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
    <Layout>
      <SEO title="Home" />
      <SectionIntro>
        <ContainerLayout>
          <HomeSection>
            <div>
              <Title>Yahallo!</Title>
              <Text>Nekoama here. Feel free to browse thgough my portoflio and if possible provide dsome feedback! </Text>
            </div>

            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
            </div>
          </HomeSection>
        </ContainerLayout>
      </SectionIntro>
    </Layout>
  )
}

export default IndexPage
