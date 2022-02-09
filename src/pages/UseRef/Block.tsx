import React from 'react';

import { BaseBlockPropsType } from '../../types/useRef';
import BlockView from '../../components/BlockView';

export default ({ children, ref }: BaseBlockPropsType) => {
  return (
    // так же как и key, ref не доступен из props и будет undefined
    <BlockView ref={ref}>{children}</BlockView>
  )
}