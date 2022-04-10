import React, { useState } from 'react';

import { PropsDemoViewData } from '../../../types';
import { initialPropsDemoData } from '../../../mockData';

import Receiver from './Receiver';
import { BlockView } from '../../../components';
import PropsDemoControls from './PropsDemoControls';

export default () => {
  const [state, setState] = useState<PropsDemoViewData>(initialPropsDemoData)

  return (
    <BlockView width={500}>
      <PropsDemoControls
        state={state}
        setState={setState} />
      <Receiver data={state} />
    </BlockView>
  )
}