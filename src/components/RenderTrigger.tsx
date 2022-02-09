import React, { PropsWithChildren } from 'react';
import { Button } from '@mui/material';
import RenderBadge from './RenderBadge';

const sx = {
  margin: '8px',
}

type RenderTriggerProps = PropsWithChildren<{
  forceRender: () => void;
}>

export default ({ forceRender, children }: RenderTriggerProps) => {

  return (
    <RenderBadge>
      <Button variant="contained"
        size='medium'
        color='warning'
        onClick={forceRender}
        sx={sx}
      >
        Trigger render
        {children}
      </Button>
    </RenderBadge>
  )
}