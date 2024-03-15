import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, ToggleButtonGroup, ToggleButton, MenuItem, Select } from '@mui/material';
import { ShoppingCart, Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AddProductsPage = ({ isLoggedIn, isAdmin }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortingOption, setSortingOption] = useState('default');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products and categories from backend
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/products/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.error('Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryChange = (event, newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  const handleProductClick = (productId) => {
    // Redirect to product details page
    navigate.push(`/products/${productId}`);
  };

  return (
    <div>
      <ToggleButtonGroup value={selectedCategory} exclusive onChange={handleCategoryChange}>
        {categories.map((category) => (
          <ToggleButton key={category} value={category}>
            {category}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Select value={sortingOption} onChange={handleSortingChange}>
        <MenuItem value="default">Default</MenuItem>
        <MenuItem value="priceHighToLow">Price High to Low</MenuItem>
        <MenuItem value="priceLowToHigh">Price Low to High</MenuItem>
        <MenuItem value="newest">Newest</MenuItem>
      </Select>

      {products.map((product) => (
        <Card key={product.id}>
          <CardContent>
            <img src={product.image} alt={product.name} />
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="subtitle1">{product.price}</Typography>
            <Typography variant="body2">{product.description}</Typography>
            <Button onClick={() => handleProductClick(product.id)}><ShoppingCart /> Buy</Button>
            {isAdmin && (
              <>
                <Button><Edit /> Edit</Button>
                <Button><Delete /> Delete</Button>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AddProductsPage;
