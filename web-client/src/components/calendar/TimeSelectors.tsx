import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

const TimeSelectors = () => {
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [endTime, setEndTime] = useState<Dayjs | null>(null);
  return (
    <Box sx={{ display: 'flex', direction: 'row' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          minutesStep={5}
          label="Start Time"
          value={startTime}
          onChange={(newValue) => {
            setStartTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          minutesStep={5}
          label="End Time"
          value={endTime}
          onChange={(newValue) => {
            setEndTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default TimeSelectors;
