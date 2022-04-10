import React, { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';

import { BlockView, RenderTrigger } from '../../../components';
import useForceRender from '../../../hooks/useForceRender';

export default () => {
  const forceRender = useForceRender();
  const useEffectCounter = useRef<number>(1);
  const cleanUpCounter = useRef<number>(0);

  const cleanUp = () => {
    cleanUpCounter.current += 1;
  }

  useEffect(() => {
    useEffectCounter.current += 1;
    return cleanUp;
  });

  return (
    <BlockView width={500}>
      <RenderTrigger forceRender={forceRender} />
      <BlockView withRenderBadge>
        <Typography>useEffect вызван: {useEffectCounter.current}</Typography>
        <Typography>cleanUp вызван: {useEffectCounter.current === 1 ? 0 : cleanUpCounter.current + 1}</Typography>
      </BlockView>
    </BlockView>
  )
}