import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterValue } from '../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    dispatch(setFilterValue(filterValue));
  };

  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <input
        type="text"
        name="filter"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
