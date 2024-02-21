import React from 'react';
import { UserAuth } from '../utils/auth';

const Signin = () => {

    const { signInWithGoogle} = UserAuth();

    const handleSignIn = async() => {
        try {
          await signInWithGoogle();
        } catch (error) {
          console.error(error);
        }
    }

    return (
        <button
            onClick={handleSignIn}
            className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-800 font-bold py-2 px-4 rounded"
          >
          Sign In
        </button>
    )
}

export default Signin