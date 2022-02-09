import React, { forwardRef } from 'react';
import { Paper, PaperProps } from '@mui/material';

const blockSx = {
  border: '1px grey dashed',
  m: 1,
  p: 1,
  width: 300,
}

export default forwardRef<HTMLDivElement, PaperProps>(({ children, sx, ...otherProps }, ref) => {
  return (
    <Paper {...otherProps}
      elevation={2}
      component='div'
      // variant='outlined'
      sx={sx ? { ...sx, ...blockSx } : blockSx}
      ref={ref}
    >
      {children}
    </Paper>
  )
})