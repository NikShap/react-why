import React, { FC, memo } from 'react';
import { Typography } from '@mui/material';
import { BlockView } from '../../../components';
import Child2 from './Child2';

const Child1: FC = () => (
  <BlockView withRenderBadge>
    <Typography>Потомок 1</Typography>
    <Child2 />
  </BlockView>
);

export default memo(Child1);
