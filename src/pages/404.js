import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContainerLayout, Intro } from "../components/common"
import { Title, SubText } from "../components/styled/404"
import Noelle from "../assets/img/noelle.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ContainerLayout>
      <Intro className="center">
        <img src={Noelle} alt="noelle" />
        <Title>404</Title>
        <Title>NOT FOUND</Title>
        <SubText>You just hit a route that doesn&#39;t exist... the sadness.</SubText>
      </Intro>
    </ContainerLayout>
  </Layout>
)

export default NotFoundPage
