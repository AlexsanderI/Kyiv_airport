import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ButtonDeparureArrival from '../buttonDeparureArrival/ButtonDeparureArrival';

import DateBorder from '../boardDepature/DateBorderDepartures';
import SearchFlight from '../search_flight/SearchFlight';

import './page.scss';

const Page = () => {
  return (
    <div className="page">
      <SearchFlight />
      <BrowserRouter></BrowserRouter>
      <ButtonDeparureArrival />
      <DateBorder />
    </div>
  );
};

export default Page;
