import React from 'react';
import lyricsvault_logo from '../assets/lyricsvault_logo.png'
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={lyricsvault_logo} alt="Logo" className="mt-20"/>
      <h1 className="text-xl font-bold mx-20 text-center">
        Unlock the melody to your mystery tune! Dive into LyricsVault and uncover songs with just its lyrics.
      </h1>
      <SearchBar/>
    </div>
  )
}

export default Home