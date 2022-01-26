import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVideoList(props) {
  const [videoId, setVideoId] = React.useState(props.initialValue);

  const handleChange = (event) => {
    setVideoId(event.target.value);
    props.onChange(event)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Seleccionar Video</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={videoId}
          label="Age"
          onChange={handleChange}
        >
          {
            props.elements.map(
              (element) => (
                <MenuItem key={element.id} value={element.id}>
                  {element.name}
                </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}