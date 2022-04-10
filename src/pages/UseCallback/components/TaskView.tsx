import React, { FC, useEffect } from 'react';
import { Typography, Button } from '@mui/material';

import BlockView from '../../../components/BlockView';
import RenderBadge from '../../../components/RenderBadge';
import slowFunction from '../../../utils/slowDownFunction';
import { TaskViewProps } from '../../../types';
import { taskView } from '../style';

const TaskView: FC<TaskViewProps> = ({ text, id, onDelete, isSlowedDown }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  useEffect(() => {
    if (isSlowedDown) {
      slowFunction(1000000);
    }
  })

  return (
    <BlockView
      withRenderBadge
      renderBadgeSx={taskView.containerSx}
      sx={taskView.blockSx}
    >
      <Typography>
        {text}
      </Typography>
      <Button
        variant='contained'
        color='error'
        onClick={handleDelete}
      >
        Delete
      </Button>
    </BlockView>
  )
}

export default TaskView;