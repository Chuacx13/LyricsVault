import React from 'react';
import { signInWithGoogle } from '../utils/auth';

const Navbar = () => {

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          LyricsVault
        </div>
        <button
          onClick={signInWithGoogle}
          className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-800 font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

