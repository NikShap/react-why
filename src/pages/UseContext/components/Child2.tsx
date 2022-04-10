import React, { FC, memo } from 'react';
import { Button, Typography } from '@mui/material';
import { BlockView } from '../../../components';
import Child3 from './Child3';
import { useTheme } from '../context';

const Child2: FC = () => {
  const { isDark } = useTheme();

  return (
    <BlockView withRenderBadge>
      <Typography>Потомок 2</Typography>
      <Button
        color={isDark ? 'info' : 'error'}
        variant="contained"
      >
        Жмакалка 1
      </Button>
      <Child3 />
    </BlockView>
  )
};

export default memo(Child2);