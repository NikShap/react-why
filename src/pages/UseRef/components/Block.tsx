import React from 'react';
import { Typography } from '@mui/material';
import BlockView from '../../../components/BlockView';
import { BaseBlockPropsType } from '../../../types';

export default ({ ref, nodeName }: BaseBlockPropsType) => {
  return (
    // так же как и key, ref не доступен из props и будет undefined
    <BlockView
      ref={ref}
      withRenderBadge
    >
      <Typography>
        Использование ref из props: {String(nodeName)}
      </Typography>
    </BlockView>
  )
}