import React from 'react';

const FilterForm = ({ updateFilter, minSeating, maxSeating }) => {

  

  return (
    <div>
      <label>
        Min Seating
        <input type="number" value={minSeating} />
      </label>
      <label>
        Max seating
        <input type="number" value={maxSeating} />
      </label>
    </div>
  );
}

export default FilterForm;
