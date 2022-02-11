import React from 'react';
import { Typography, Button, SxProps } from '@mui/material';

import BlockView from '../../components/BlockView';
import RenderBadge from '../../components/RenderBadge';
import slowFunction from '../../utils/slowFunction';

const containerSx: SxProps = {
  width: '100%',
}

const blockSx: SxProps = {
  width: 'unset',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

type TaskViewProps = {
  text: string;
  id: number;
  onDelete: (id: number) => void;
}

const TaskView = ({ text, id, onDelete }: TaskViewProps) => {
  // slowFunction();
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <RenderBadge sx={containerSx}>
      <BlockView sx={blockSx}>
        <Typography>{text}</Typography>
        <Button variant='contained' color='error' onClick={handleDelete}>
          Delete
        </Button>
      </BlockView>
    </RenderBadge>
  )
}

export default TaskView;