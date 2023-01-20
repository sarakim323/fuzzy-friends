/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Button } from '@mui/material';
import { categories } from '../assets/icons';
import { Link, useParams } from 'react-router-dom';

const Sidebar = () => {
  const CustomButton = ({ children, to, ...rest }) => {
    return (
      <Button
        component={Link}
        to={to}
        sx={{
          background: '#494036',
          color: 'white',
          borderBottom: '1px solid black',
          '&:hover': {
            background: '#6a5339',
          },
          py: '13px',
        }}
        {...rest}
      >
        {children}
      </Button>
    );
  };
  return (
    // Stack component with props applied
    <Stack
      direction="row"
      sx={{
        overflowY: 'hidden',
        height: { sx: 'auto', md: '95vh' }, // set the height style to 'auto' for small screens and '95%' for medium screens
        width: { sx: 'auto', md: '190px' },
        flexDirection: { md: 'column' },
        background: '#494036',
        position: 'absolute',
      }}
    >
      {
        // Map over the categories array and return a button element for each item
        categories.map((category) => (
          <CustomButton
            to={`/${
              category.name === 'Events'
                ? 'calendar'
                : category.name === 'Message'
                ? 'chat'
                : category.name
            }`}
            key={category.name}
          >
            <span
              style={{
                color: '#be7b31',
                marginRight: '15px',
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </CustomButton>
        ))
      }
    </Stack>
  );
};

export default Sidebar;
