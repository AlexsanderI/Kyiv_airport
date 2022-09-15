import React from 'react';
import Boarder from '../boarder/Boarder';
import DateBorder from '../date/DateBorder';
import SearchFlight from '../search_flight/SearchFlight';
import './page.scss';

const Page = () => {
  return (
    <div className="page">
      <SearchFlight />
      <Boarder />
      <DateBorder />
    </div>
  );
};

export default Page;
