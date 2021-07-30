import Img from "gatsby-image"
import styled from "styled-components";
import variables from '../../data/variables';

export const IntroSection = styled.div`
    grid-gap: 10rem;  
    text-align: left;
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: ${variables.breakpointLarge}) {
      display: flex;
      flex-direction: row;
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

export const ActivityWrapper = styled.div`
  min-width: 0;
`

export const ActivityFeed = styled.div`
`

export const ActivityEntry = styled.div`
  margin-bottom: 20px;
  min-width: 0;
`

export const ActivityEntryWrapper = styled.div`
  background: #151f2e;
  border-radius: 4px;
  font-size: 1.3rem;
  overflow: hidden;
  position: relative;
`

export const ActivityEntryInfo = styled.div`
  font-size: 1.4rem;
  grid-template-columns: 50px auto;
  height: 100%;
  min-height: 70px;
  display: grid;
  
`

export const ActivityEntryTime = styled.div`
  color: #8596a5;
  font-size: 1.1rem;
  position: absolute;
  right: 12px;
  top: 12px;
  p {
    font-weight: 800;
  }
`

export const ActivityEntryDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4;
  min-height: 70px;
  padding: 14px 16px;
  padding-right: 100px;
`

export const ActivityEntryStatus = styled.div`
`