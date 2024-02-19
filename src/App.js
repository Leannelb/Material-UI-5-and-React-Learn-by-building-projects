import React from 'react'
import { Button, Typography } from '@mui/material'
import CustomButton from './components/Button';

const App = () => {
  return <div>
    <Button variant='contained'>Test</Button>
    <Typography variant='body1'>This is some new body text</Typography>
    <CustomButton>Button here</CustomButton>
  </div>
}

export default App
