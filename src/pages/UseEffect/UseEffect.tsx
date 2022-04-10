import { Box, Divider } from '@mui/material';
import React from 'react';

import { CleanUpDemo, PropsDemo } from './components';

export default () => {
  return (
    <Box>
      <CleanUpDemo />
      <Divider />
      <PropsDemo />
    </Box>
  )
}