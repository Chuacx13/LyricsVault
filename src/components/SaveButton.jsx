import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { UserAuth } from '../utils/auth';
import { Tooltip } from '@mui/material';
import { postSong } from '../utils/songAPI';

const SaveButton = ({ songObject }) => {

    const { user } = UserAuth(); 

    const handleSave = () => {
        postSong(songObject, user);
    }

    return (
        <Tooltip title="Save">
            <StarBorderIcon 
            onClick={handleSave}
            sx={{ 
                fontSize: 30, 
                border: "1px solid black",
                cursor: "pointer",
                borderRadius: 8,
                marginRight: 1,
                marginLeft: 1
            }}/>
        </Tooltip>
  )
}

export default SaveButton