import React, { useState } from 'react';
import weatherIcon from '../Assets/weather.svg';

const Search = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const onSearch = () => {
    if (searchInput.trim()) {
      handleSearch(searchInput);
    }
  };

  return (
    <div className="right-container">
      <div className="weather-icon">
        <img src={weatherIcon} alt="Weather icon" />
      </div>
      <div className="input-container">
        <div className="search">
          <input
            type="text"
            placeholder="Enter city name..."
            className="input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSearch();
            }}
          />
          <img
            src="search.svg"
            alt="Search icon"
            onClick={onSearch}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
