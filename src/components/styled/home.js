import Img from "gatsby-image"
import styled from "styled-components";
import variables from '../../data/variables';

export const IntroSection = styled.div`
  grid-gap: 10rem;  
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
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

export const ActivityScrollbar = styled.div`
  padding-right: 5px;
  overflow: auto;
  visibility: hidden;
  height: 46rem;
  &:hover,
  &:focus {
    visibility: visible;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  } 
  ::-webkit-scrollbar-thumb {
    background: rgba(90, 90, 90);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(133, 133, 133);
  }

  ::-webkit-scrollbar-track {
    background: rgba(#191c24);
  }
`

export const ActivityFeed = styled.div`
  visibility: visible;
`

export const ActivityEntry = styled.div`
  margin-bottom: 20px;
  min-width: 0;
`

export const ActivityEntryWrapper = styled.div`
  background-color: #22252e;
  border-radius: 4px;
  font-size: 1.3rem;
  overflow: hidden;
  position: relative;
`

export const ActivityEntryInfo = styled.div`
  font-size: 1.4rem;
  grid-template-columns: 60px auto;
  height: 100%;
  min-height: 70px;
  display: grid;
`

export const ActivityEntryTime = styled.div`
  color: #8596a5;
  font-size: 1rem;
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
  padding-right: 120px;
`

export const ActivityEntryStatus = styled.div`
  font-size: 1rem;
  display: inline-block;
  transition: .2s;
  :first-letter {
    text-transform: uppercase
  }
  a {
    color: #3db4f2;
    &:hover {
      color: #73cfff;
    }
  }
`

export const RecentActivities = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 55px;
  margin-bottom: 3rem;
  @media(max-width: ${variables.breakpointPhone}) {
    flex-direction: column;
  }
`

export const RecentPosts = styled.div`
  
`

export const PostTitle = styled.h1`
  font-family: "GT-Walsheim-Pro-Bold";
  font-size: 1.5rem;
  grid-area: header;
  > span{
    float: right;
    padding-right: 7px;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 1.5rem;
  }
`

export const PostText = styled.p`
  margin-top: 0;
  font-size: 1.2rem;
  color: ${variables.secondary};
  grid-area: content;
  transition: .2s;
  > a {
    color: ${variables.primary};
    &:hover { 
      color: #73cfff;
    }
  }
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    margin-top: 1rem;
    font-size: .8rem;
  }
`

export const ReviewPost = styled.article`
  display: grid;
  grid-template-columns: 170px 450px;
  grid-template-rows: 100px;
  grid-template-areas: 
    "image header"
    "image content";
  margin-bottom: 2.5rem;
  color: ${variables.secondary};
  background-color: #22252e;
  img {
    width: 156px;
    object-fit: contain;
    align-self: flex-start;
    grid-area: image;
  }
`

export const SubText = styled.p`
  font-size: 1.2rem;
  grid-area: header;
  margin-top: -2px;
`

export const HomeCharacters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7rem;
  margin-bottom: 6rem;
  img {
    width: 19.16%;
  }
`

export const HomeEntries = styled.div`
`

export const SubTitleViewMore = styled.div`
  float: right;
  font-size: 1.2rem;
  color: ${variables.lightGrey};
  padding: 10px 0;
`

export const FeedTypeToggle = styled.div`
  background: rgb(var(--color-foreground));
  border-radius: 3px;
  display: inline-block;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  grid-gap: 13px;
`

export const FeedOption = styled.div`
  font-size: 1.2rem;
  text-align: center;
  transition: .2s;
  :hover {
  color: ${variables.primary};
  }
`

export const SeasonalFavoriteWrapper = styled.div`
`

export const SeasonalFavorite = styled.div`
  display: flex;
  flex-direction: row;
`

export const SeasonalFavoriteText = styled.div`
  display: flex;
  flex-direction: row;
`