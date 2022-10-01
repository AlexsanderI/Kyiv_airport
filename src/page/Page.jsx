import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import BoarderDeparture from '../boarderDeparture/BoarderDeparture';
import BoarderArrivel from '../boarderArrivel/BoarderArrivel';
import DateBorder from '../date/DateBorder';
import SearchFlight from '../search_flight/SearchFlight';
import './page.scss';

const Page = () => {
  return (
    <div className="page">
      <SearchFlight />
      <BrowserRouter></BrowserRouter>
      {/* <BoarderArrivel /> */}
      <BoarderDeparture />
      <DateBorder />
    </div>
  );
};

export default Page;
