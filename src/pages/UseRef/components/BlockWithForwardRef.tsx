import { Typography } from '@mui/material';
import React, { forwardRef } from 'react';
import BlockView from '../../../components/BlockView';
import { BaseBlockPropsType } from '../../../types';

// forwardRef позволяет получить доступ к ref
export default forwardRef<HTMLDivElement, BaseBlockPropsType>(({ nodeName }, ref) => {
  return (
    <BlockView
      withRenderBadge
      ref={ref}
    >
      <Typography>
        Использование ref из forwardRef: {String(nodeName)}
      </Typography>
    </BlockView>
  )
})
