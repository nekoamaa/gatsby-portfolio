import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ButtonDefault } from "../components/common/buttons"
import { SectionIntro, ContainerLayout } from "../components/common";
import { HomeSection, Title, Text, Avatar } from '../components/styled/home';


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
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <SectionIntro>
        <ContainerLayout>
          <HomeSection>
            <div>
              <Title>Hi, I'm nekoama.</Title>
              <Text>Welcome to my site! Feel free to browse through my site and let me know what you think. </Text>
              <Link to="/about"><ButtonDefault>Learn more about me!</ButtonDefault></Link>
            </div>
            <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
          </HomeSection>
        </ContainerLayout>
      </SectionIntro>
    </Layout>
  )
}

export default IndexPage
