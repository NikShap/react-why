import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

import { FastState, SlowState } from './components';

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
