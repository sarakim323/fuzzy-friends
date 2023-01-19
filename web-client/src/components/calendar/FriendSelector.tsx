import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as PropTypes from 'prop-types';

const FriendSelector: React.FC<{
  handleFriend: (value: string) => void;
}> = ({ handleFriend }) => {
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
      onChange={(e: React.SyntheticEvent<Element, Event>) =>
        handleFriend(e.currentTarget.innerHTML)
      }
      renderInput={(params) => (
        <TextField {...params} label="Select a Playmate" />
      )}
    />
  );
};
FriendSelector.propTypes = {
  handleFriend: PropTypes.func.isRequired,
};

export default FriendSelector;
