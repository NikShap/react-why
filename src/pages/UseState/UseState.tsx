import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import FastState from './FastState';
import SlowState from './SlowState';

const UseState = () => {
  return (
    <Box>
      <SlowState />
      <Divider />
      <FastState />
    </Box>
  )
}

export default UseState;
