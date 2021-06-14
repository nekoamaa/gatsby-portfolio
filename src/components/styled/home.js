import Img from "gatsby-image"
import styled from "styled-components";
import variables from '../../data/variables';

export const HomeSection = styled.div`
    text-align: center;
    @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-gap: 10rem;
    text-align: left;
}
`

export const Title = styled.h1`
  font-size: 2.8rem;
  font-family: "GT-Walsheim-Pro-Bold";
  color: ${variables.secondary};
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: ${variables.secondary};
  a {
    color: #3F51B5;
    text-decoration: underline;
  }
`

export const Avatar = styled(Img)`
  border-radius: 5px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.15);
  width: 100%;
`