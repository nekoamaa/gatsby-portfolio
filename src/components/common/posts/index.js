import styled from 'styled-components';
import variables from '../../../data/variables';

export const Intro = styled.div`
  padding: 4rem 0 4rem 0;
  font-family: "GT-Walsheim-Pro-Regular";
`

export const HeaderIntro = styled.header`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 34px;
  justify-content: space-between;
  margin-bottom: 6rem;
`

export const PostTitle = styled.h1`
  font-family: "GT-Walsheim-Pro-Bold";
  font-size: 2rem;
  grid-area: header;
  > span{
    float: right;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 1.4rem;
    padding-left: 7px;
    > span{
      padding-right: 7px;
    }
  }
`

export const SubTitle = styled.h3`
  color: ${variables.primary};
  font-size: 2rem; 
  font-family: "GT-Walsheim-Pro-Bold";
`

export const PostText = styled.p`
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
    font-size: .8rem;
    padding-left: 7px;
    padding-right: 7px;
  }
`

export const SubText = styled.p`
  font-size: 1.2rem;
  grid-area: header;
  margin-top: -2px;
`

export const SmallText = styled.small`
  font-size: .89rem;
  padding-right: 10px;
  > span {
    padding-left: 5px;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: .6rem;
  }
`

export const WorkPost = styled.article`
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center | flex-start;
  color: ${variables.secondary};
  @media(max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
	}
  > div.content {
    padding: 2rem 3rem;
    @media(max-width: ${variables.breakpointPhone}) {
      padding: 1rem 1rem;
    }
  }
`

export const ReviewPost = styled.article`
  word-wrap: break-word;
  word-break: break-word;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 100px;
  grid-template-areas: 
    "image header"
    "image content";
  margin-bottom: 5rem;
  color: ${variables.secondary};
  img {
    margin: 20px 30px 0 0;
    width: 225px;
    object-fit: contain;
    align-self: flex-start;
    grid-area: image;
  }
  .bannerImageReviews {
    display: none;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    margin-bottom: 3rem;
    .bannerImageReviews {
      width: 100%;
      height: auto;
      margin: 0;
      display: block;
    }
    .coverImageReviews {
      display: none;
    }
    background-color: #22252e;
    grid-template-areas: 
    "image image"
    "header header"
    "content content";
    grid-template-columns: none;
    grid-template-rows: auto 80px auto;
  }
`

export const Category = styled.span`
  font-family: "GT-Walsheim-Pro-Bold";
  color: ${variables.primary};
  text-transform: uppercase;
  letter-spacing: .05em;
  font-size: .8em;
  border-radius: .25rem;
  padding: .5rem 1rem;
  margin-right: 1rem;
  border: 3px solid ${variables.primary};
`

export const BlogLayout = styled.div`
  grid-template-columns: auto auto;
  @media (min-width: ${variables.breakpointTablet}) {
    display: grid;
    padding: 0px 1.5em;
  }
`