import './App.css';
import React, { useEffect, useState } from "react"

const App = () => {
  const [episodes, setEpisodes] = useState([])

  const fetchEpisodeData = () => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log("DATA", data)
        setEpisodes(data.results)
      })
  }

  useEffect(() => {
    fetchEpisodeData()
  }, [])
  //console.log("EPISODES", episode)
  return (
    <div>
      {(
        <ul>
          {episodes.map(episode => (
            <li key={episode.id}>{episode.name + " " + episode.episode}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
