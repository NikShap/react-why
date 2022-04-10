import React, { FC, memo } from 'react';
import { Typography } from '@mui/material';
import { BlockView } from '../../../components';
import Child4 from './Child4';

const Child3: FC = () => (
  <BlockView withRenderBadge>
    <Typography>Потомок 3</Typography>
    <Child4 />
  </BlockView>
);

export default memo(Child3);