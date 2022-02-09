import React, { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';

import BlockView from '../../components/BlockView';
import RenderTrigger from '../../components/RenderTrigger';
import useForceRender from '../../hooks/useForceRender';
import RenderBadge from '../../components/RenderBadge';

export default () => {
  const forceRender = useForceRender();
  const useEffectCounter = useRef<number>(0);
  const cleanUpCounter = useRef<number>(0);

  const cleanUp = () => {
    cleanUpCounter.current += 1;
  }

  useEffect(() => {
    useEffectCounter.current += 1;
    return cleanUp;
  });

  return (
    <>
      <RenderTrigger forceRender={forceRender} />
      <RenderBadge>
        <BlockView>
          <Typography>useEffect вызван: {useEffectCounter.current + 1}</Typography>
          <Typography>cleanUp вызван: {useEffectCounter.current ? cleanUpCounter.current + 1 : cleanUpCounter.current}</Typography>
        </BlockView>
      </RenderBadge>
    </>
  )
}