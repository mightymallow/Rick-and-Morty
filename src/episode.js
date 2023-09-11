import React from 'react'
import { useQuery, gql } from '@apollo/client'
import episodeDescriptions from './text/episodeDescriptions.json'
import { Thumbnails } from './images'
import MediaCard from './card'

export const GET_EPISODES = gql`
query Episodes{
    episodes (filter: {episode: "S01"}) {
      results {
        name
        air_date
        episode
      },
    },
  }
`

export function EpisodeList () {
  const episodeDescriptionsText = Object.values(episodeDescriptions.listed)
  const { loading, error, data } = useQuery(GET_EPISODES)
  return (
    <div className='main-container'>
      {loading && (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
      )}
      {error && <p> error </p> }
      {data && data.episodes.results.map((episode, index) => {
        return (
          <div key={'episode' + index} className='card-container'>
            <MediaCard
              img={Thumbnails[index]}
              title={episode.name}
              description={episodeDescriptionsText[index]}
              order={episode.episode}
            >
            </MediaCard>
          </div>
        )
      })}
    </div>
  )
}
