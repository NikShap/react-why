import React, { forwardRef } from 'react';
import BlockView from '../../components/BlockView';

import { BaseBlockPropsType } from '../../types/useRef';

// forwardRef позволяет получить доступ к ref
export default forwardRef<HTMLDivElement, BaseBlockPropsType>(({ children }, ref) => {
  return (
    <BlockView ref={ref}>{children}</BlockView>
  )
})
