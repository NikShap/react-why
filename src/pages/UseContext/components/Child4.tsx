import React, { FC, memo } from 'react';
import { Typography } from '@mui/material';
import { BlockView } from '../../../components';
import Child5 from './Child5';

const Child4: FC = () => (
  <BlockView withRenderBadge>
    <Typography>Потомок 4</Typography>
    <Child5 />
  </BlockView>
);

export default memo(Child4);