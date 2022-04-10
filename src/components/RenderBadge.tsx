import React, { PropsWithChildren } from 'react';
import { Badge, Button, SxProps } from '@mui/material';
import useRenderCount from '../hooks/useRenderCount';
import { CSSProperties } from '@mui/styled-engine';

const innerSx: SxProps = {
  display: 'block',
  boxSizing: 'border-box',
}

export default ({ children, sx, width = 'fit-content' }: PropsWithChildren<{ sx?: SxProps, width?: CSSProperties['width'] }>) => {
  const renderCount = useRenderCount();

  const finalSx = sx ? {
    ...innerSx,
    width,
    ...sx,
  } : {
    ...innerSx,
    width,
  }
  return (
    <Badge sx={finalSx} color='secondary' badgeContent={renderCount} max={9999} showZero>
      {children}
    </Badge>
  )
}