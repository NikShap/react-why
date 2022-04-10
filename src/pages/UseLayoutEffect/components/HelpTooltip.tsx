import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { BlockView } from '../../../components';
import '../style.css';

const top = {
  top: 0,
  bottom: 'unset',
  transform: 'translateY(-110%)',
}

const bottom = {
  bottom: 0,
  top: 'unset',
  transform: 'translateY(110%)',
}

const HelpTooltip = () => {
  // slowDownFunction(1000000);
  const [tooltipStyle, setTooltipStyle] = useState<CSSProperties>(top);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      if (rect.top < 10) {
        setTooltipStyle(bottom)
      }
    }
  });

  // useLayoutEffect(() => {
  //   if (tooltipRef.current) {
  //     const rect = tooltipRef.current.getBoundingClientRect();
  //     if (rect.top < 10) {
  //       setTooltipStyle(bottom)
  //     }
  //   }
  // });

  return (
    <BlockView
      ref={tooltipRef}
      className="tooltip"
      width={500}
      style={tooltipStyle}
    >
      Help
    </BlockView>
  )
};

export default HelpTooltip;