import React,{ useEffect, useState } from 'react';
import SongCard from '../components/SongCard';
import { UserAuth } from '../utils/auth';
import { Navigate } from 'react-router-dom';
import { getAllSavedSongs } from '../utils/songAPI';

function Profile() {
  
  const { user } = UserAuth();
  const [savedSongs, setSavedSongs] = useState([]);

  useEffect(() => {
    getAllSavedSongs(user).then(songs => {
      setSavedSongs(songs);
    })
  }, [])

  if (!user) {
    return <Navigate to="/" replace/>
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mt-20 text-xl font-bold"> Welcome, 
        {user.displayName} 
      </p>
      {savedSongs.length == 0 ? 
      <div className="text-center mt-4 text-xl"> Saved songs will appear here! </div> :
      <div className="mt-4 mx-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {savedSongs?.map((song, index) => (
          <SongCard key={index} songImage={song.songImage} songTitle={song.songTitle} spotifyUri={song.spotifyUri} saved={song.isSaved}/>  
        ))}
      </div>}
    </div>
  )
}

export default Profile