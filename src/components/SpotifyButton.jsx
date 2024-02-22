import React from 'react';
import { Tooltip } from '@mui/material';
import { MusicNote } from '@mui/icons-material';

const SpotifyButton = ({ uri }) => {

  const handleSpotifyClick = () => {
    window.open(uri, '_blank');
  }

  return (
    <Tooltip title="Listen on Spotify"> 
      <MusicNote
        onClick={handleSpotifyClick}
        sx={{ 
          fontSize: 30, 
          border: "1px solid black",
          cursor: "pointer",
          borderRadius: 8
        }}
      />
    </Tooltip>
  )
}

export default SpotifyButton