import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const SortingDropdown = ({ onSortChange }) => {
  const [sortBy, setSortBy] = useState('default');

  const handleSortChange = (event) => {
    const newSortBy = event.target.value;
    setSortBy(newSortBy);
    onSortChange(newSortBy);
  };

  return (
    <FormControl>
      <InputLabel id="sorting-dropdown-label">Sort By</InputLabel>
      <Select
        labelId="sorting-dropdown-label"
        id="sorting-dropdown"
        value={sortBy}
        onChange={handleSortChange}
      >
        <MenuItem value="default">Default</MenuItem>
        <MenuItem value="priceHighToLow">Price High to Low</MenuItem>
        <MenuItem value="priceLowToHigh">Price Low to High</MenuItem>
        <MenuItem value="newest">Newest</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortingDropdown;
