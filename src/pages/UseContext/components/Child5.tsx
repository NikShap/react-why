import React, { FC, memo } from 'react';
import { Button, Typography } from '@mui/material';
import { BlockView } from '../../../components';
import { useTheme } from '../context';

const Child5: FC = () => {
  const { isDark } = useTheme();

  return (
    <BlockView withRenderBadge>
      <Typography>Потомок 5</Typography>
      <Button
        color={isDark ? 'info' : 'error'}
        variant="contained"
      >
        Жмакалка 1
      </Button>
    </BlockView>
  )
};

export default memo(Child5);