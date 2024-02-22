import React from 'react';
import { UserAuth } from '../utils/auth';
import { Tooltip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { deleteSavedSong } from '../utils/deleteSavedSong';

const DeleteButton = ({ songObject }) => {

    const { user } = UserAuth(); 

    const handleDelete = () => {
        deleteSavedSong(songObject, user);
    }
  return (
    <Tooltip title="Save">
        <StarIcon 
        onClick={handleDelete}
        sx={{ 
            fontSize: 30, 
            border: "1px solid black",
            cursor: "pointer",
            borderRadius: 8,
            marginRight: 1,
            marginLeft: 1,
            color: "yellow"
        }}/>
    </Tooltip> 
  )
}

export default DeleteButton