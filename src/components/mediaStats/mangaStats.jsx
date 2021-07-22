import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StatsOverview, StatsHighlights, StatsIcon, StatsInfo, StatsInfoValue, StatsInfoSubTitle } from '../about/style';
import { Book, Bookmark, BookOpen, Divide, Percent } from 'react-feather'

const MangaStats = () => {
    const data = useStaticQuery(graphql`
    query {   
      anilist {
        User(id: 567710) {
          statistics {
            manga {
              count
              chaptersRead
              volumesRead
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
                <StatsIcon><Book style={iconStyle} /></StatsIcon>
                <StatsInfo>
                    <StatsInfoValue>{data.anilist.User.statistics.manga.count}</StatsInfoValue>
                    <StatsInfoSubTitle>Total Manga</StatsInfoSubTitle>
                </StatsInfo>
            </StatsHighlights>

            <StatsHighlights>
                <StatsIcon><Bookmark style={iconStyle} /></StatsIcon>
                <StatsInfo>
                    <StatsInfoValue>{data.anilist.User.statistics.manga.chaptersRead}</StatsInfoValue>
                    <StatsInfoSubTitle>Chapters Read</StatsInfoSubTitle>
                </StatsInfo>
            </StatsHighlights>

            <StatsHighlights>
                <StatsIcon><BookOpen style={iconStyle} /></StatsIcon>
                <StatsInfo>
                    <StatsInfoValue>{data.anilist.User.statistics.manga.volumesRead}</StatsInfoValue>
                    <StatsInfoSubTitle>Volumes Read</StatsInfoSubTitle>
                </StatsInfo>
            </StatsHighlights>

            <StatsHighlights>
                <StatsIcon><Percent style={iconStyle} /></StatsIcon>
                <StatsInfo>
                    <StatsInfoValue>{data.anilist.User.statistics.manga.meanScore}</StatsInfoValue>
                    <StatsInfoSubTitle>Mean Score</StatsInfoSubTitle>
                </StatsInfo>
            </StatsHighlights>

            <StatsHighlights>
                <StatsIcon><Divide style={iconStyle} /></StatsIcon>
                <StatsInfo>
                    <StatsInfoValue>{data.anilist.User.statistics.manga.standardDeviation}</StatsInfoValue>
                    <StatsInfoSubTitle>Standard Deviation</StatsInfoSubTitle>
                </StatsInfo>
            </StatsHighlights>
        </StatsOverview>
    )
}

export default MangaStats