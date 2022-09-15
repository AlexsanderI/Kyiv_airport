import React from 'react';
import './boardTable.scss';

const BoardTable = () => {
  return (
    <div class="table">
      <div class="table-header">
        <div class="header__item">
          <a id="name" class="filter__link">
            Terminal
          </a>
        </div>
        <div class="header__item">
          <a id="wins" class="filter__link filter__link--number">
            Local time
          </a>
        </div>
        <div class="header__item">
          <a id="total" class="filter__link filter__link--number">
            Destination
          </a>
        </div>
        <div class="header__item">
          <a id="wins" class="filter__link filter__link--number">
            Status
          </a>
        </div>
        <div class="header__item">
          <a id="draws" class="filter__link filter__link--number">
            Airline
          </a>
        </div>
        <div class="header__item">
          <a id="losses" class="filter__link filter__link--number">
            Flight
          </a>
        </div>
      </div>
      <div class="table-content">
        <div class="table-row">
          <div class="table-data">A</div>
          <div class="table-data">1:20</div>
          <div class="table-data">Warsaw</div>
          <div class="table-data">Landed 1:28</div>
          <div class="table-data">LOT</div>
          <div class="table-data">LO755</div>
        </div>
        <div class="table-row">
          <div class="table-data">A</div>
          <div class="table-data"> 1:45</div>
          <div class="table-data">Cologne</div>
          <div class="table-data">Landed 1:43</div>
          <div class="table-data">Wizz Air</div>
          <div class="table-data">W67308</div>
        </div>
        <div class="table-row">
          <div class="table-data">A</div>
          <div class="table-data"> 2:45</div>
          <div class="table-data"> Paris (Beauvais)</div>
          <div class="table-data">Landed 2:06</div>
          <div class="table-data">Wizz Air</div>
          <div class="table-data">W67308</div>
        </div>
      </div>
    </div>
  );
};

export default BoardTable;
