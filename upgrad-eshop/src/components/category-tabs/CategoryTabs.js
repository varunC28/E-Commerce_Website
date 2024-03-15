import React, { useState, useEffect } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import axios from 'axios';

const CategoryTabs = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Fetch categories from the backend
    axios.get('/api/products/categories')
      .then(response => {
        setCategories(['all', ...response.data]);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleCategoryChange = (event, newCategory) => {
    setSelectedCategory(newCategory);
    onSelectCategory(newCategory);
  };

  return (
    <ToggleButtonGroup value={selectedCategory} onChange={handleCategoryChange} aria-label="category tabs">
      {categories.map(category => (
        <ToggleButton key={category} value={category} aria-label={category}>
          {category}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default CategoryTabs;
