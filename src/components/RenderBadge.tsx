import React, { PropsWithChildren } from 'react';
import { Badge, Button, SxProps } from '@mui/material';
import useRenderCount from '../hooks/useRenderCount';

const sx: SxProps = {
  width: 'fit-content',
  display: 'block',
}

export default ({ children }: PropsWithChildren<{}>) => {
  const renderCount = useRenderCount();

  return (
    <Badge sx={sx} color='secondary' badgeContent={renderCount} showZero>
      {children}
    </Badge>
  )
}