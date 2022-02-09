import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import BlockView from '../../components/BlockView';
import RenderTrigger from '../../components/RenderTrigger';

import useForceRender from '../../hooks/useForceRender';
import CleanUpDemo from './CleanUpDemo';
import PropsDemo from './PropsDemo';

export default () => {
  return (
    <Box>
      <CleanUpDemo />
      <Divider />
      <PropsDemo />
    </Box>
  )
}