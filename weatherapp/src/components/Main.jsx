import React, { useState } from 'react';
import Display from './Display';
import Search from './Search';
import '../App.css';

const Main = () => {
  const [searchInput, setSearchInput] = useState('sathyamangalam');

  const handleSearch = (city) => {
    setSearchInput(city);
  };

  return (
    <div className="main-container">
      <div className="display-container">
        <Display searchInput={searchInput} />
      </div>
      <div className="search-container">
        <Search handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Main;
