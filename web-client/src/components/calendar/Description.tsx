import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React from 'react';

interface HandleChange {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Description: React.FC<HandleChange> = ({ handleChange }) => {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Description"
      multiline
      rows={4}
      name="description"
      onChange={handleChange}
    />
  );
};
Description.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Description;
