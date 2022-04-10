import React, { RefObject } from 'react';
import BlockView from '../../../components/BlockView';
import { BaseBlockPropsType } from '../../../types';

type Props = BaseBlockPropsType<{ customRef1: RefObject<any>, customRef2: RefObject<any> }>
// Может возникнуть ситуация, когда необходимо получить доступ к двум элементам расположенным внутри компонента.
// в таком случае можно использовать свои собственные props
export default ({ children, customRef1, customRef2 }: Props) => {
  return (
    <BlockView withRenderBadge>
      <div ref={customRef1}></div>
      <span ref={customRef2}></span>
      {children}
    </BlockView>
  )
}