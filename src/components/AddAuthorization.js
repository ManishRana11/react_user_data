import React, { useState } from 'react'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select } from '@mui/material';

function AddAuthorization() {
    const handleChangeGroup = (event) => {
        setGroup(event.target.value);
    };
    const [group, setGroup] = useState('');
    const list = [ "Jumping", "Standing", "Sitting", "Running" ]

  return (
    <div>
        <p>Authorizations:</p>
        <div style={{ border: '1px solid #fae8b1', padding: '10px' }}>
            <p>Group:</p>
            <Box>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Operator</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={group}
                        label="Group"
                        onChange={handleChangeGroup}
                    >
                        <MenuItem value={10}>Operator</MenuItem>
                        <MenuItem value={20}>Administrator</MenuItem>
                        <MenuItem value={30}>Service</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <p>Permissions:</p>
            <FormGroup>
                {list.map(item => 
                    <FormControlLabel label={item} control={<Checkbox/>}/>
                )}
            </FormGroup>
        </div>
    </div>
  )
}

export default AddAuthorization