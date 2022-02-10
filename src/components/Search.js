import React, { useContext } from 'react';
import MainContext from '../MainContext';

import { AiOutlineSearch } from 'react-icons/ai';

export const Search = () => {
  const { search, setSearch } = useContext(MainContext);

  return (
    <div className='search'>
      <div className='icon'>
        <AiOutlineSearch />
      </div>
      <input
        type='text'
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search Brands'
      />
    </div>
  );
};
