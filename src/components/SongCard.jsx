import React from 'react';
import SpotifyButton from './SpotifyButton';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';

const SongCard = ({ songImage, songTitle, spotifyUri, saved }) => {

    const songObject = {
        songImage: songImage, 
        songTitle: songTitle, 
        spotifyUri: spotifyUri,
    }

    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex my-4 shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out flex flex-col items-center rounded">
            <img className="h-48 lg:h-auto lg:w-48 rounded" src={songImage} alt="Song Image"/>
            <div className="text-gray-900 font-bold text-xl mb-4 text-center">{songTitle}</div>
            <div className="flex items-center">
                <SpotifyButton uri={spotifyUri}/>
                {saved ? <DeleteButton songObject={songObject}/> : <SaveButton songObject={songObject}/>}
            </div>
        </div>
    );
}

export default SongCard;
