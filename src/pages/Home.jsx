import React, { useState } from 'react';
import lyricsvault_logo from '../assets/lyricsvault_logo.png';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';
import { UserAuth } from '../utils/auth';

function Home() {

  const { user } = UserAuth();
  const [searchResults, setSearchResults] = useState(() => {
    const savedResults = sessionStorage.getItem('searchResults');
    return savedResults ? JSON.parse(savedResults) : null;
  });

  const handleSearchResults = (results) => {
    setSearchResults(results);
    sessionStorage.setItem('searchResults', JSON.stringify(results));
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={lyricsvault_logo} alt="Logo" className="mt-20 w-40 sm:w-56 md:w-72"/>
      <h1 className="text-xl font-bold mx-20 text-center">
        Unlock the melody to your mystery tune! Dive into LyricsVault and uncover songs with just its lyrics.
      </h1>
      <SearchBar onSearch={handleSearchResults}/>
      {searchResults?.length == 0 && user ? 
      <div className="text-center mt-4 text-xl"> No songs found. Try another verse. </div> :
      <div className="mt-4 mx-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults?.map((song, index) => (
          <SongCard key={index} songImage={song.result.header_image_thumbnail_url} songTitle={song.result.full_title} spotifyUri={song.spotifyUri} saved={song.isSaved}/>  
        ))}
      </div>}
    </div>
  )
}

export default Home