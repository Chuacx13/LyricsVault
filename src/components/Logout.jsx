import React from 'react';
import { UserAuth } from '../utils/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from '@mui/material';

const Logout = () => {
    const { signOutOfGoogle } = UserAuth();

    const handleSignOut = async () => {
      try {
        await signOutOfGoogle();
        sessionStorage.removeItem('searchResults');
      } catch (error) {
        console.error(error);
      }
    };

    return ( 
        <Tooltip title="Logout">
            <LogoutIcon
                onClick={handleSignOut}
                sx={{ fontSize: 30 }}
                cursor="pointer"
            />
        </Tooltip>
    )
}

export default Logout