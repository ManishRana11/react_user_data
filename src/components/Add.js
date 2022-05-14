import { TextField } from '@material-ui/core'
import { Button } from '@mui/material';
import React, { useState } from 'react'
import AddAuthorization from './AddAuthorization';

function Add() {
    const [variables, setVariables] = useState({
        firstName: '',
        lastName: ''
    });
    const { firstName, lastName } = variables;
    const handleChange = (event) => {
        const { target: { name, value, checked } } = event;
        setVariables({
          ...variables,
          [name]: value || checked,
        });
    };

  return (
    <div>
        <TextField
            label='First Name'
            variant='outlined'
            size='small'
            name='firstName'
            value={ firstName || ''}
            onChange={ handleChange }
        />
        <TextField
            label='Last Name'
            variant='outlined'
            size='small'
            name='lastName'
            value={ lastName || ''}
            onChange={ handleChange }
        />
        <AddAuthorization/>
        <div style={{ margin: '20px' }}>
            <Button style={{ backgroundColor: 'green', color: 'white', float: 'right' }}>Save</Button>
        </div>
    </div>
  )
}

export default Add