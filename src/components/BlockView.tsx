import React, { forwardRef, CSSProperties } from 'react';
import { Paper, PaperProps, SxProps } from '@mui/material';
import RenderBadge from './RenderBadge';

const blockSx: SxProps = {
  border: '1px var(--txt-clr, black) dashed',
  marginBlock: 1,
  marginInline: 0,
  boxSizing: 'border-box',
  backgroundColor: 'var(--bg-clr, white)',
  color: 'var(--txt-clr, black)',
  p: 2,
}

export type BlockViewProps = PaperProps & {
  withRenderBadge?: boolean;
  renderBadgeSx?: SxProps;
  width?: CSSProperties['width'];
}

export default forwardRef<HTMLDivElement, BlockViewProps>(({
  children,
  sx,
  withRenderBadge,
  renderBadgeSx,
  width = '100%',
  ...otherProps }, ref) => {

  const finalSx = sx
    ? {
      width,
      ...blockSx,
      ...sx,
    }
    : {
      width,
      ...blockSx
    };
  return withRenderBadge
    ? (
      <RenderBadge
        sx={renderBadgeSx}
        width={width}
      >
        <Paper
          {...otherProps}
          elevation={2}
          component='div'
          sx={finalSx}
          ref={ref}
        >
          {children}
        </Paper>
      </RenderBadge>
    )
    : (
      <Paper {...otherProps}
        elevation={2}
        component='div'
        sx={finalSx}
        ref={ref}
      >
        {children}
      </Paper>
    )
})