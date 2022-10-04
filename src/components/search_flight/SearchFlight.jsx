import React from 'react';
import './SearchFlight.scss';

const SearchFlight = () => {
  return (
    <div className="search">
      <h2 className="search_title">SEARCH FLIGHT</h2>
      <form className="search__flights-form" action="">
        <div className="search__icon"></div>
        <input className="search__input" type="text" placeholder="flight #"></input>
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFlight;
