import './App.css'
import React from 'react'
import { Title } from './images'
import { EpisodeList } from './episode'

const App = () => {
  return (
    <div>
      <img src={Title} alt="Rick and Morty Title" className={'center'} />
      <EpisodeList></EpisodeList>
    </div>
  )
}

export default App
