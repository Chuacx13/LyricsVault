import React from 'react';
import { UserAuth } from '../utils/auth';
import { Navigate } from 'react-router-dom';

function Profile() {
  
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" replace/>
  }

  return (
    <div className="pt-20">
      <p className="text-xl font-bold"> Welcome, 
        {user.displayName} 
      </p>
    </div>
  )
}

export default Profile