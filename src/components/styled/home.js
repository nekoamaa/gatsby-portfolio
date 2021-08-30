import Img from "gatsby-image"
import styled from "styled-components";
import variables from '../../data/variables';

export const OregairuVideo = styled.div`
display: block;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
content: ' ';
backface-visibility: hidden;
overflow: hidden;
  iframe {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%); 
    pointer-events: none;
    //filter: brightness(90%);
    @media (min-aspect-ratio: 16/9) {
      height: 56.25vw;
    }
    @media (max-aspect-ratio: 16/9) {
      width: 177.78vh;
    }
    @media(max-width: ${variables.breakpointPhone}) {
      width: 100%;
      height: 100%;
    }
  }
`

export const IframeGradient = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: ' ';
  position: absolute;
  background: rgb(32,35,43);
  background: linear-gradient(180deg,rgba(32,35,43,0) 0%,rgb(33 36 44) 98%);  
  @media(max-width: ${variables.breakpointPhone}) {
    height: 91%;
    background: linear-gradient(180deg,rgba(32,35,43,0) 0%,rgb(25 28 36) 98%);
  }
`

export const IntroSection = styled.div`
  grid-gap: 10rem;  
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  position: relative;
  z-index: 3;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: flex;
    flex-direction: row;
    text-align: left;
    color: ${variables.primary};
    padding-bottom: 17rem;
  }   
  @media(max-width: ${variables.breakpointPhone}) {
    grid-gap: 40px;
    margin-bottom: 14rem;
    padding-bottom: 11rem;
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

export const HomeTitle = styled.h1`
  font-size: 3.5rem;
  font-family: "GT-Walsheim-Pro-Bold";
  color: ${variables.secondary};
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const HomeText = styled.p`
  font-size: 1.5rem;
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
    grid-gap: 1px;
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
    font-size: 1.4rem;
    padding-left: 7px;
  }
`

export const PostText = styled.p`
  font-size: 1.2rem;
  color: ${variables.secondary};
  grid-area: content;
  transition: .2s;
  margin: 0;
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
    font-size: .8rem;
    padding-left: 7px;
    margin-top: 5px;
    margin-bottom: 10px;
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
  .bannerImage {
    display: none;
  }
  img {
    width: 156px;
    align-self: flex-start;
    grid-area: image;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    .bannerImage {
      display: block;
      width: 100%;
      height: auto;
    }
    .coverImage {
      display: none;
    }
    grid-template-areas: 
    "image image"
    "header header"
    "content content";
    grid-template-columns: none;
    grid-template-rows: auto 80px auto;
  }
`

export const SubText = styled.p`
  font-size: 1.2rem;
  grid-area: header;
  margin-top: -2px;
`

export const HomeCharactersWrapper = styled.div`

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
  @media(max-width: ${variables.breakpointPhone}) {
    margin-top: 5rem;
    margin-bottom: 5rem;
    img {
      width: 50%;
      :nth-child(3),
      :nth-child(4),
      :nth-child(5) {
        display: none;
      }
    }
  }
`

export const YahariBackground = styled.div`
  img {
    width: 100%;
    margin: 40px 0px;
    @media(max-width: ${variables.breakpointPhone}) {
      display: none;
    }
  }
`

export const HomeEntries = styled.div`
`

export const HomeEntrySubTitle = styled.h2`
color: ${variables.primary};
font-size: 2.1rem; 
font-family: "GT-Walsheim-Pro-Bold";
@media(max-width: ${variables.breakpointPhone}) {
  display: grid;
  grid-area: recent;
  grid-template-areas:
    "recent view"
    "last last";
}
`

export const HomeEntryLastConsumed = styled.span`
  font-size: 1.5rem;
  color: ${variables.lightGrey};
  @media(max-width: ${variables.breakpointPhone}) {
    grid-area: last;
  }
`

export const HomeEntrySubTitleViewMore = styled.div`
  float: right;
  font-size: 1.2rem;
  color: ${variables.lightGrey};
  padding: 10px 0;
  :hover {
    color: ${variables.primary};
  }
  @media(max-width: ${variables.breakpointPhone}) {
    width: 99%;
    text-align: right;
    grid-area: view;
  }
`


export const SubTitleViewMore = styled.div`
  float: right;
  font-size: 1.2rem;
  color: ${variables.lightGrey};
  padding: 10px 0;
  :hover {
    color: ${variables.primary};
  }
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

export const SeasonalFavoriteAnimeWrapper = styled.div`
`

export const SeasonalFavorite = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 5rem;
  img {
    max-width: 100%;
    height: auto;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    display: flex;
    flex-direction: column-reverse;
    grid-gap: 2.5rem;
    img {
      height: auto;
    }
  }
`

export const SeasonalFavoriteText = styled.div`
  font-size: 1.2rem;
  line-height: 2;
  color: #ececec;
  a  {
    color: ${variables.primary};
  }
  a:hover {
    color: #73cfff;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 1rem;
  }
`
export const SeasonalFavoriteScoresWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  align-content: flex-start;
  line-height: 1.5;
  font-size: 2.1rem;
  text-align: center;
  margin: 4rem 0 .5rem;
  width: 100%;
  @media(max-width: ${variables.breakpointPhone}) {
    margin: 0;
  }
`

export const SeasonalFavoriteScores = styled.div`
  border-right: 1px solid ${variables.lightGrey};
  width: 20%;
  :last-child {
    border-right: none;
  }
  span {
    display: block;
    font-size: 1.4rem;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    margin-top: 20px;
    font-size: 1.6rem;
    width: 25%;
    span {
      font-size: 1rem;
    }
    :nth-child(4) {
      border-right: none;
    }
    :last-child {
      margin-top: 7px;
      display: block;
      font-size: 2.1rem;
      width: 100%;
    }
  }
`

export const Season = styled.span`
  color: ${variables.lightGrey};
`
