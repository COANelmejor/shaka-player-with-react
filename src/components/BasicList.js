import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * return (
 *   <User age={age} name={name} />
 * )
 */
export default function BasicSelect({initialValue = String, onChange = Function, elements = [Object]}) {
  const [age, setAge] = React.useState(initialValue);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log('BasicSelect: handleChange: event.target.value: ', event.target.value);
    onChange(event)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {
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