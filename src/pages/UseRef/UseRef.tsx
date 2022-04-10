import { Box, Button, Divider, Typography } from '@mui/material';
import React, { PropsWithChildren, useRef, forwardRef, FC } from 'react';
import { BlockView } from '../../components';
import RenderBadge from '../../components/RenderBadge';
import RenderTrigger from '../../components/RenderTrigger';
import useForceRender from '../../hooks/useForceRender';
import { Block, BlockWithCustomRefs, BlockWithForwardRef } from './components';

const UseRef = () => {
  const forceRender = useForceRender();
  const refForRef = useRef<HTMLElement>();
  const refForForwardRef = useRef<HTMLDivElement>(null);
  const refForCustomProp1 = useRef<HTMLDivElement>(null);
  const refForCustomProp2 = useRef<HTMLDivElement>(null);

  // Изменение ref не тригерит рендер. Именно поэтому нужно нажать на Triger Render чтобы увидеть результат.
  return (
    <BlockView width={500}>
      <RenderTrigger forceRender={forceRender} />
      <BlockView>
        <Block
          ref={refForRef}
          nodeName={refForRef.current?.nodeName}
        />
        <BlockWithForwardRef
          ref={refForForwardRef}
          nodeName={refForForwardRef.current?.nodeName}
        />
        <BlockWithCustomRefs
          customRef1={refForCustomProp1}
          customRef2={refForCustomProp2}
        >
          <Typography>
            Использование customRef1 из props: {String(refForCustomProp1.current?.nodeName)}
          </Typography>
          <Typography>
            Использование customRef2 из props: {String(refForCustomProp2.current?.nodeName)}
          </Typography>
        </BlockWithCustomRefs>
      </BlockView>
    </BlockView>
  )
}

export default UseRef;

// https://github.com/facebook/react/blob/e0160d50c5a492a925db6ab3f8478e118336c722/packages/react-reconciler/src/ReactFiberHooks.new.js#L1586
//
// function mountRef<T>(initialValue: T): {|current: T|} {
//   const hook = mountWorkInProgressHook();
//   if (enableUseRefAccessWarning) {
//     if (__DEV__) {
//       ...
//     } else {
//       ...
//     }
//   } else {
//     const ref = {current: initialValue};
//     hook.memoizedState = ref;
//     return ref;
//   }
// }

// https://github.com/facebook/react/blob/e0160d50c5a492a925db6ab3f8478e118336c722/packages/react-reconciler/src/ReactFiberHooks.new.js#L1658 
//
// function updateRef<T>(initialValue: T): {|current: T|} {
//   const hook = updateWorkInProgressHook();
//   return hook.memoizedState;
// }