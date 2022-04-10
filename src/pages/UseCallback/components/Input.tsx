import React, { FC, useState } from 'react';
import TextField from '@mui/material/TextField';

import BlockView from '../../../components/BlockView';
import RenderBadge from '../../../components/RenderBadge';
import { InputChangeHandler, KeyboardHandler, TaskInputProps } from '../../../types';
import { input } from '../style';

const TaskInput: FC<TaskInputProps> = ({ onEnter }) => {
  const [task, setTask] = useState<string>('');

  const handleTaskTextChange: InputChangeHandler = (e) => {
    setTask(e.target.value);
  }

  const handleEnterPress: KeyboardHandler = (e) => {
    if (e.key === 'Enter' && task) {
      onEnter(task);
      setTask('');
    }
  }

  return (
    <BlockView
      withRenderBadge
      renderBadgeSx={input.mainBlockSx}
      sx={input.blockSx}
    >
      <TextField
        sx={input.inputSx}
        label="Enter task"
        variant="filled"
        size="small"
        value={task}
        onChange={handleTaskTextChange}
        onKeyDown={handleEnterPress}
      />
    </BlockView>
  )
};

export default TaskInput;