import React, { useState } from 'react';

import { BlockView } from '../../components';
import { HelpTooltip } from './components';
import './style.css';

const UseLayoutEffect = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onMouseEnter = () => setIsOpened(true);
  const onMouseLeave = () => setIsOpened(false);

  return (
    <div className="container">
      <BlockView
        width={500}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Block
      </BlockView>
      {isOpened && <HelpTooltip />}
    </div>
  )
};

export default UseLayoutEffect;
