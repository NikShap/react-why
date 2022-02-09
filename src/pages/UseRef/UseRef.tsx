import { Box, Button, Divider, Typography } from '@mui/material';
import React, { PropsWithChildren, useRef, forwardRef, FC } from 'react';
import RenderBadge from '../../components/RenderBadge';
import RenderTrigger from '../../components/RenderTrigger';
import useForceRender from '../../hooks/useForceRender';
import Block from './Block';
import BlockWithCustomRefs from './BlockWithCustomRefs';
import BlockWithForwardRef from './BlockWithForwardRef';




const UseRef = () => {
  const forceRender = useForceRender();
  const refForRef = useRef<HTMLElement>();
  const refForForwardRef = useRef<HTMLDivElement>(null);
  const refForCustomProp1 = useRef<HTMLDivElement>(null);
  const refForCustomProp2 = useRef<HTMLDivElement>(null);

  return (
    <Box>
      <RenderTrigger forceRender={forceRender} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <RenderBadge>
          <Block ref={refForRef}>
            <Typography>
              using ref: {refForRef.current?.nodeName || 'null'}
            </Typography>
          </Block>
        </RenderBadge>
        <RenderBadge>
          <BlockWithForwardRef ref={refForForwardRef}>
            <Typography>
              using ref with forwardRef: {refForForwardRef.current?.nodeName || 'null'}
            </Typography>
          </BlockWithForwardRef>
        </RenderBadge>
        <RenderBadge>
          <BlockWithCustomRefs customRef1={refForCustomProp1} customRef2={refForCustomProp2}>
            <Typography>
              using custom ref prop: {refForCustomProp1.current?.nodeName || 'null'} {refForCustomProp2.current?.nodeName || 'null'}
            </Typography>
          </BlockWithCustomRefs>
        </RenderBadge>
      </Box>
      <Divider></Divider>
      <Typography>
        Изменение ref не тригерит рендер. Именно поэтому нужно нажать на Triger Render чтобы увидеть результат.
        Эту особенность используют когда нужно хранить значения между рендерами.
      </Typography>
    </Box>
  )
}

export default UseRef;
