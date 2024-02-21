import React, { useState } from 'react';
import { UserAuth } from '../utils/auth';

const SearchBar = () => {

  const { user } = UserAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hi")
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-8" >
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Sign in to use our website"
        className="border border-gray-800 rounded py-2 px-2 md:w-96 focus:outline-none focus:ring focus:border-blue-300"
      />
      <button type="submit" className="bg-gray-800 text-white hover:bg-blue-1000 py-2 px-4 rounded" disabled={!user}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
