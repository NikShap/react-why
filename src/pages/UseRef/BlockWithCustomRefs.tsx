import React, { RefObject } from 'react';
import BlockView from '../../components/BlockView';

import { BaseBlockPropsType } from '../../types/useRef';

// Может возникнуть ситуация, когда необходимо получить доступ к двум элементам расположенным внутри компонента.
// в таком случае можно использовать свои собственные props
export default ({ children, customRef1, customRef2 }: BaseBlockPropsType<{ customRef1: RefObject<any>, customRef2: RefObject<any> }>) => {
  return (
    <BlockView>
      <div ref={customRef1}></div>
      <span ref={customRef2}></span>
      {children}
    </BlockView>
  )
}