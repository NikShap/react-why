import React, { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';
import { TextField } from '@mui/material';
import BlockView from '../../components/BlockView';
import RenderBadge from '../../components/RenderBadge';

const mainBlockSx = {
  width: '100%',
}
const blockSx = {
  width: 'unset',
}
const inputSx = {
  width: '100%',
}

type InputProps = {
  onEnter: (value: string) => void;
}

const Input = ({ onEnter }: InputProps) => {
  const [task, setTask] = useState<string>('');

  const handleTaskTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTask(e.target.value);
  }

  const handleEnterPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && task) {
      onEnter(task);
      setTask('');
    }
  }

  return (
    <RenderBadge sx={mainBlockSx}>
      <BlockView sx={blockSx}>
        <TextField
          sx={inputSx}
          label="Enter task"
          variant="filled"
          size="small"
          value={task}
          onChange={handleTaskTextChange}
          onKeyDown={handleEnterPress}
        />
      </BlockView>
    </RenderBadge>
  )
};

export default Input;