import Img from "gatsby-image"
import styled from 'styled-components';
import variables from '../../data/variables';

export const AboutSection = styled.section`
  text-align: center;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-gap: 10rem;
    text-align: left;
  }
`
export const Avatar = styled(Img)`
  border-radius: 5px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.15);
  width: 100%;
`
export const CurrentEntries = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill,220px);
  grid-template-rows: repeat(auto-fill,210px);
`
export const CurrentEntryTitles = styled.div`
  background: rgba(31,38,49,.8);
  border-radius: 0 0 3px 3px;
  bottom: 0;
  left: 0;
  padding: 12px;
  padding-bottom: 35px;
  position: absolute;
  width: 100%;
  z-index: 2;
`

export const EntryCard = styled.div`
  border-radius: 3px;
  box-shadow: 0 2px 20px rgb(49 54 68 / 20%);
  color: rgb(var(--color-text-bright));
  display: inline-block;
  font-size: 1.3rem;
  height: 210px;
  position: relative;
  width: 100%;
  img {
    border-radius: 3px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }
`

export const EntryProgress = styled.div`
  bottom: 0;
  color: ${variables.primary};
  font-size: 1.2rem;
  left: 0;
  padding: 12px;
  position: absolute;
  text-align: left;
  width: 50%;
  z-index: 2;
`

export const EntryScore = styled.div`
  text-align: right;
  right: 0;
  left: auto;
  bottom: 0;
  color: ${variables.primary};
  font-size: 1.2rem;
  padding: 12px;
  position: absolute;
  width: 50%;
  z-index: 2;
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
export const SubTitle = styled.h2`
color: ${variables.primary};
font-size: 2rem; 
font-family: "GT-Walsheim-Pro-Bold";
`
export const SocialIcons = styled.div`
  svg {
    margin-right: 20px;
    margin-top: 15px;
  }
  @media(min-width: ${variables.breakpointPhone}) {
    font-size: 1.8em;
  }
`