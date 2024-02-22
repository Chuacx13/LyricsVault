import React from 'react';
import Logout from './Logout';
import Signin from './Signin';
import { UserAuth } from '../utils/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const { user } = UserAuth();
  const location = useLocation();
  const navigate = useNavigate(); 
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white p-4">
      <div className="md:container md:mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          LyricsVault
        </div>
        {!user ? 
          (<Signin/>) : 
        (isHomePage ?
          (<div className='flex'>
            <button
              className="font-bold text-xl mr-10"
              onClick={() => navigate('/profile')}>
              Profile
            </button>
            <Logout/>
          </div>) :
          (<div className='flex'>
            <button 
              className="font-bold text-xl mr-10" 
              onClick={() => navigate('/')}>
              Home
            </button>
            <Logout/>
          </div>)
        )} 
        
      </div>
    </nav>
  );
}

export default Navbar;

