import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const FriendSelector = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['Buddy', 'Frido', 'Reggie']}
      sx={{
        width: 300,
        backgroundColor: '#E3DCD9',
        overflowY: 'hidden',
        py: '5px',
      }}
      renderInput={(params) => (
        <TextField {...params} label="Select a Playmate" />
      )}
    />
  );
};

export default FriendSelector;
