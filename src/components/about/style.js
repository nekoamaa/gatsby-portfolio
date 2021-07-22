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
  /*
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(5,1fr);
  */
 
  --c-carousel-cards-frame-cards-hover-whitespace: 0.375rem;
  grid-area: viewbox;
  margin-left: calc(var(--c-content-wrapper-padding-inline)*-1);
  margin-right: calc(var(--c-content-wrapper-padding-inline)*-1);
  padding-left: 0;
  padding-right: 0;
  --frame-height: calc(var(--cards-client-height) - var(--total-block-padding));
  --total-block-padding: calc(var(--cards-overflow-scroll) + var(--c-carousel-cards-frame-cards-hover-whitespace));
  --c-carousel-cards-frame-cards-hover-whitespace: 0rem;
  box-sizing: initial;
  height: var(--frame-height);
  margin: calc(var(--c-carousel-cards-frame-cards-hover-whitespace)*-1);
  overflow: hidden;
  padding: var(--c-carousel-cards-frame-cards-hover-whitespace);
  position: relative;
  z-index: 1;
`

export const CurrentEntryTitles = styled.div`
  background: rgba(31,38,49,.8);
  border-radius: 0 0 3px 3px;
  bottom: 0;
  left: 0;
  padding: 12px;
  padding-bottom: 40px;
  position: absolute;
  width: 100%;
  z-index: 2;
  a {
    color: ${variables.secondary};
    font-size: 1.1rem;
  }
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
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 3px;
    height: 100%;
    width: 100%;
  }

  min-width: 0;
  padding-left: calc(var(--column-gap)/2);
  padding-right: calc(var(--column-gap)/2);
  scroll-snap-align: start;
  transform: translateZ(0);
`

export const EntryProgress = styled.div`
  bottom: 0;
  color: ${variables.primary};
  font-size: 1.1rem;
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
  font-size: 1.1rem;
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

export const CCarousel = styled.div` 
  --cards-client-height: 430px;
  --arrow-wrapper-height: 225px;
  --mobile-cols: 2;
    --tablet-cols: 4;
    --desktop-cols: 6;
    --mobile-rows: 1;
    --tablet-rows: 1;
    --desktop-rows: 1;
    --cols-count: var(--mobile-cols);
    --c-carousel-rows-count: var(--mobile-rows);
    --column-gap: 0.625rem;
    --row-gap: 0.75rem;
    --step: var(--cols-count);
    --autoplay-state: running;
    --autoplay-duration: 0ms;
    --arrow-wrapper-max-height: 100%;
    --arrow-wrapper-height: 100%;
    --cards-client-height: 0;
    --cards-overflow-scroll: 6.25rem;
    display: grid;
    grid-template-areas:
        "content"
        "pages";
    @media (min-width: 61.25em){
        --cols-count: var(--desktop-cols);
        --c-carousel-rows-count: var(--desktop-rows);
        --column-gap: 1.875rem;
    }
    @media (min-width: 35.5em) {
    --cols-count: var(--tablet-cols);
    --c-carousel-rows-count: var(--tablet-rows);
    --column-gap: 1.25rem;
    }
`
export const CContent = styled.div` 
  grid-area: content; 
  grid-template-areas: "viewbox";
  --c-content-wrapper-padding-inline: 1.25rem;
  --content-width: 65.625rem;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: calc(var(--content-width) + var(--c-content-wrapper-padding-inline)*2);
  padding-left: var(--c-content-wrapper-padding-inline);
  padding-right: var(--c-content-wrapper-padding-inline);
  display: grid;
  position: relative;
  width: 100%;
`
export const CWrapper = styled.div` 
  grid-row-gap: var(--row-gap);
  display: grid;
  grid-auto-columns: calc(100%/var(--cols-count));
  grid-auto-flow: column;
  grid-template-rows: repeat(var(--c-carousel-rows-count),auto);
  margin-left: calc(var(--column-gap)/2*-1);
  margin-right: calc(var(--column-gap)/2*-1);
  margin-top: calc(var(--c-carousel-cards-frame-cards-hover-whitespace)*-1);
  overflow: auto;
  overscroll-behavior-x: none;
  padding-bottom: var(--cards-overflow-scroll);
  padding-top: var(--c-carousel-cards-frame-cards-hover-whitespace);
  row-gap: var(--row-gap);
  scroll-snap-type: x mandatory;
  scrollbar-width: none;  
  padding-left: var(--c-content-wrapper-padding-inline);
  padding-right: var(--c-content-wrapper-padding-inline);
  scroll-padding: var(--c-content-wrapper-padding-inline);
`
export const ArrowWrapper = styled.div` 
  grid-area: viewbox;
  bottom: 0;
  display: grid;
  height: calc((var(--c-carousel-rows-count) - 1)*500vh);
  left: 0;
  max-height: var(--arrow-wrapper-max-height);
  min-height: var(--arrow-wrapper-height);
  position: absolute;
  right: 0;
  top: 0;
`

export const CarouselButton = styled.button` 
  --translateX: calc(var(--c-content-wrapper-padding-inline)*-1);
  --translateX: -100%;
  justify-self: start;
  align-self: center;
  background-color: #4a4e58d6;
  padding: .125rem;
  transform: translateX(var(--translateX));
  transition: background-color .15s ease;
  z-index: 2;
  border-radius: 0;
  background-color: initial;
  border: none;
  cursor: pointer;
  padding: 0;
  -webkit-appearance: button;
  text-transform: none;
  overflow: visible;
  font: inherit;
  margin: 0;
`
