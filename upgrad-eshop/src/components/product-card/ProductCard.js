import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { ShoppingCart, Edit, Delete } from '@mui/icons-material';

const ProductCard = ({ product, isAdmin }) => {
  const { id, name, image, price, description } = product;

  const handleBuyClick = () => {
    // Handle buy button click
  };

  const handleEditClick = () => {
    // Handle edit button click
  };

  const handleDeleteClick = () => {
    // Handle delete button click
  };

  return (
    <Card key={id}>
      <CardContent>
        <img src={image} alt={name} />
        <Typography variant="h5">{name}</Typography>
        <Typography variant="subtitle1">{price}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Button onClick={handleBuyClick}><ShoppingCart /> Buy</Button>
        {isAdmin && (
          <>
            <Button onClick={handleEditClick}><Edit /> Edit</Button>
            <Button onClick={handleDeleteClick}><Delete /> Delete</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
