import * as React from 'react';
// import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

export default function ChromelessSwitch({
  chekckState = false,
  label = '',
  helperText = '',
  onChange = (event) => event
}) {
  const [marked, setMarked] = React.useState(chekckState);

  const handleChange = (event) => {
    setMarked(event.target.checked);
    onChange(event);
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={marked} onChange={handleChange} />
          }
          label={label}
        />
      </FormGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
