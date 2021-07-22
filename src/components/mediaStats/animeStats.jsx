import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StatsOverview, StatsHighlights, StatsIcon, StatsInfo, StatsInfoValue, StatsInfoSubTitle } from '../about/style';
import { Tv, Play, Calendar, Divide, Percent } from 'react-feather'

const AnimeStats = () => {
  const data = useStaticQuery(graphql`
  query {   
    anilist {
      User(id: 567710) {
        statistics {
          anime {
            count
            episodesWatched
            minutesWatched
            meanScore
            standardDeviation           
          }
        }
      } 
    }
  }
  `)

  const iconStyle = { color: "#728aa1", stroke: "#728aa1", fontSize: "1.6rem" }

  return (
    <StatsOverview>
      <StatsHighlights>
        <StatsIcon><Tv style={iconStyle} /></StatsIcon>
        <StatsInfo>
          <StatsInfoValue>{data.anilist.User.statistics.anime.count}</StatsInfoValue>
          <StatsInfoSubTitle>Total Anime</StatsInfoSubTitle>
        </StatsInfo>
      </StatsHighlights>

      <StatsHighlights>
        <StatsIcon><Play style={iconStyle} /></StatsIcon>
        <StatsInfo>
          <StatsInfoValue>{data.anilist.User.statistics.anime.episodesWatched}</StatsInfoValue>
          <StatsInfoSubTitle>Episodes Watched</StatsInfoSubTitle>
        </StatsInfo>
      </StatsHighlights>

      <StatsHighlights>
        <StatsIcon><Calendar style={iconStyle} /></StatsIcon>
        <StatsInfo>
          <StatsInfoValue>{data.anilist.User.statistics.anime.minutesWatched}</StatsInfoValue>
          <StatsInfoSubTitle>Minutes Watched</StatsInfoSubTitle>
        </StatsInfo>
      </StatsHighlights>

      <StatsHighlights>
        <StatsIcon><Percent style={iconStyle} /></StatsIcon>
        <StatsInfo>
          <StatsInfoValue>{data.anilist.User.statistics.anime.meanScore}</StatsInfoValue>
          <StatsInfoSubTitle>Mean Score</StatsInfoSubTitle>
        </StatsInfo>
      </StatsHighlights>

      <StatsHighlights>
        <StatsIcon><Divide style={iconStyle} /></StatsIcon>
        <StatsInfo>
          <StatsInfoValue>{data.anilist.User.statistics.anime.standardDeviation}</StatsInfoValue>
          <StatsInfoSubTitle>Standard Deviation</StatsInfoSubTitle>
        </StatsInfo>
      </StatsHighlights>
    </StatsOverview>
  )
}

export default AnimeStats