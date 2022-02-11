import React, { PropsWithChildren } from 'react';
import { Badge, Button, SxProps } from '@mui/material';
import useRenderCount from '../hooks/useRenderCount';

const innerSx: SxProps = {
  width: 'fit-content',
  display: 'block',
}

export default ({ children, sx }: PropsWithChildren<{ sx?: SxProps }>) => {
  const renderCount = useRenderCount();

  return (
    <Badge sx={sx ? { ...innerSx, ...sx } : innerSx} color='secondary' badgeContent={renderCount} max={9999} showZero>
      {children}
    </Badge>
  )
}