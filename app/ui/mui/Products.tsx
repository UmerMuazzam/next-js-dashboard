import { Box, Container } from '@mui/material';
import React from 'react';
import RecipeReviewCard from './Card';

const Products = () => {
  return (
    <Box>
      <Container sx={{display:'flex', gap:'1.5rem',flexWrap:'wrap',marginBottom:'3rem'}}>
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </Container>
    </Box>
  );
};

export default Products;
