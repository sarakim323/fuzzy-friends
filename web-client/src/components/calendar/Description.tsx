import TextField from '@mui/material/TextField';

const Description = () => {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Description"
      multiline
      rows={4}
    />
  );
};

export default Description;
