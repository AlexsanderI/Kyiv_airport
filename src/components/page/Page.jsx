import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ButtonDeparureArrival from '../buttonDeparureArrival/ButtonDeparureArrival';
import SearchFlight from '../search_flight/SearchFlight';
import DateBorderArrivals from '../boardArrival/DateBorderArrivals';
import DateBorderDepartures from '../boardDepature/DateBorderDepartures';

import './page.scss';

const Page = () => {
  return (
    <div className="page">
      <SearchFlight />
      <BrowserRouter>
        <ButtonDeparureArrival />

        <Route exact path="/departure">
          <DateBorderArrivals />
        </Route>
        <Route path="/arrival">
          <DateBorderDepartures />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default Page;
