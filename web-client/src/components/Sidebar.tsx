import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../assets/icons';

const Sidebar = () => {
  return (
    // Stack component with props applied
    <Stack
      direction="row" // set the direction of the stack to row
      sx={{
        overflowY: 'auto', // set the overflow-y style to 'auto'
        height: { sx: 'auto', md: '95%' }, // set the height style to 'auto' for small screens and '95%' for medium screens
      }}
    >
      {
        // Map over the categories array and return a button element for each item
        categories.map((category) => (
          <button
            className="category-btn" // set the className prop to 'category-btn'
            onClick={() => console.log(category)}
            style={{
              background: '#5b585c',
              color: 'white',
            }}
            key={category.name} // set the key prop to the current category's name
          >
            <span
              style={{
                color: '#472c55',
                marginRight: '15px',
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        ))
      }
    </Stack>
  );
};

export default Sidebar;
