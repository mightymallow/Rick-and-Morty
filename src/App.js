import './App.css';
import React, { useEffect, useState } from "react";
import titleImage from './images/title.png';
import episodeDescriptions from './text/episodeDescriptions.json';


const App = () => {
  const [episodes, setEpisodes] = useState([])
  var episodeDescriptionsText = Object.values(episodeDescriptions.listed)

  const fetchEpisodeData = () => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log("DATA", data)
        setEpisodes(data.results.slice(0,11))
      })
  }

  useEffect(() => {
    fetchEpisodeData()
  }, [])

  //console.log("EPISODES", episode)
  console.log("EPISODE DESCRIPTIONS", episodeDescriptions)
  console.log("EPISODE DESCRIPTIONS TEXT", episodeDescriptionsText)
  return (
    <div>
      <img src={titleImage} alt="Rick and Morty Title" className={"center"} />
        <ul>
          {episodes.map((episode, index) => (
            <li key={episode.id}>{episode.name + " " + episode.episode + " " + episodeDescriptionsText[index]}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
