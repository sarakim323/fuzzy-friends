import { useState } from 'react';
import { Box, Modal, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { default as TimeSelectors } from './TimeSelectors';
import { default as FriendSelector } from './FriendSelector';
import { default as Location } from './Location';
import { default as Description } from './Description';
import { Dayjs } from 'dayjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#E3DCD9',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};
const ScheduleDateModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [playEvent, setPlayEvent] = useState<object>({
    title: 'Playdate',
    friend: '',
    description: '',
    location: '',
    start: '',
    end: '',
  });
  console.log(playEvent);

  const handleTime = (start: Dayjs | null, end: Dayjs | null) => {
    if (start !== null && end !== null) {
      const startTime = start.toDate();
      const formattedStartTime = startTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });
      const endTime = end.toDate();
      const formattedEndTime = endTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });
      setPlayEvent({
        ...playEvent,
        ['start']: formattedStartTime,
        ['end']: formattedEndTime,
      });
    }
  };
  const handleLocation = (str: string) => {
    const name = 'location';
    const value = str;

    setPlayEvent({ ...playEvent, [name]: value });
  };
  const handleFriend = (str: string) => {
    const name = 'friend';
    const value = str;
    setPlayEvent({ ...playEvent, [name]: value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setPlayEvent({ ...playEvent, [name]: value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        keepMounted
        aria-labelledby="keep-mounted-modal"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: 'flex',
              direction: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              id="keep-mounted-modal"
              component="h4"
              variant="h4"
              sx={{
                color: '#494036',
                bgcolor: '#E3DCD9',
                margin: '0 auto',
              }}
            >
              Schedule a Playdate
            </Typography>
            <Button
              onClick={handleClose}
              sx={{
                width: '0px',
                '& > :not(style)': { width: '1.2rem' },
                color: 'white',
                bgcolor: '#494036',
                transition: 'transform 0.1s ease-in-out',
                ':hover': {
                  transform: 'scale(1.1)',
                  bgcolor: '#494036',
                },
              }}
            >
              <CloseIcon />
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              direction: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '15px',
            }}
          >
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '20rem' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Playdate Title"
                variant="outlined"
                name="title"
                defaultValue="Playdate"
                required={true}
                size="medium"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
              />
              <TimeSelectors handleTime={handleTime} />
              <Location handleLocation={handleLocation} />
              <FriendSelector handleFriend={handleFriend} />
              <Description handleChange={handleChange} />
              <Box
                sx={{
                  display: 'flex',
                  direction: 'row',
                  justifyContent: 'center',
                  '& > :not(style)': { m: 1, width: '15rem' },
                }}
              >
                <Button
                  onClick={handleClose}
                  sx={{
                    height: '35px',
                    width: '35px',
                    color: 'white',
                    bgcolor: '#494036',
                    transition: 'transform 0.1s ease-in-out',
                    ':hover': {
                      transform: 'scale(1.1)',
                      backgroundColor: '#494036',
                    },
                  }}
                >
                  Schedule
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ScheduleDateModal;
