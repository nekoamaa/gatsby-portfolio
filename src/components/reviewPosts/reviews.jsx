import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Title, Text, ReviewPost, SubText } from "../common"
import { ThumbsUp } from 'react-feather'

const Reviews = () => {
  const data = useStaticQuery(graphql`
    query {
      anilist {
        Page(page: 1, perPage: 10) {
          pageInfo {
            total
            perPage
          }
          reviews(userId: 567710, sort: CREATED_AT_DESC) {
            media {
              title {
                romaji
                english
                native
                userPreferred
              }
              coverImage {
                extraLarge
                large
                medium
                color
              }
            }
            summary
            score
            rating
            ratingAmount
            createdAt
            body
          }
        }
      }
    }
  `)
  const reviews = data.anilist.Page.reviews

  return (
    <div>
      {reviews.map((review) => {
        return (
          <ReviewPost>
            <img src={review.media.coverImage.extraLarge} alt="anime" />
            <Title>
              {review.media.title.userPreferred}<span><ThumbsUp /> {review.rating}</span>
              <SubText>Posted on {review.createdAt}</SubText>
            </Title>
            <Text><span>{review.body}</span><a href="#">See full review</a></Text>
          </ReviewPost>
        )
      })}
    </div>
  )
}

export default Reviews
