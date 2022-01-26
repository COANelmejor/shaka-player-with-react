import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

/**
 * # Select for Video List
 * 
 * This component is used to select the video list using the Material UI Select component.
 * 
 * If an onChange handler is provided, the event of the select will be passed to the handler.
 * 
 * Every element of the elements array will be rendered as a MenuItem and needs to have an id and a name.
 * 
 * The id will be used as the value of the select and the name will be used as the label.
 * 
 * @component 
 * @example
 * const STREAMS = [{
 *    "id": "1",
 *      "name": 'Angel One MPEG-DASH',
 *    },
 *    {
 *      "id": "2",
 *      "name": 'Big Buck Bunny HLS',
 *  }]
 * const startingVideo = STREAMS[0].id
 * const onChange = (event) => {
 *  console.log(event.target.value)
 * } 
 * <SelectVideoList
 *    elements={STREAMS}
 *    initialValue={startingVideo}
 *    onChange={onSelectSrc}
 * />
 * 
 */
export default function SelectVideoList({
  // List of elements to be shown in the select
  elements = [{}],
  // Initial value of the select
  initialValue = '',
  // Handler for the select change event
  onChange = (event) => event
}) {
  // Initialize the state of the current value of the select
  const [videoId, setVideoId] = React.useState(initialValue);

  // onChange handler for the select
  const handleChange = (event) => {
    setVideoId(event.target.value);
    if (onChange) {
      onChange(event)
    }
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
            // Map the elements to the select
            elements.map(
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