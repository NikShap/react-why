import React, { useState } from 'react';
import { Divider, SxProps } from '@mui/material';

import BlockView from '../../components/BlockView';
import RenderBadge from '../../components/RenderBadge';
import Input from './Input';
import TaskView from './TaskView';

const mainBlockSx: SxProps = {
  width: '400px',
}

const dividerSx: SxProps = {
  margin: '20px 0',
}

const listSx: SxProps = {
  display: 'flex',
  width: 'unset',
  flexDirection: 'column',
}

type Task = {
  text: string;
  id: number;
}

const initialTasks: Task[] = [
  { text: 'Задача 1', id: Date.now() },
  { text: 'Задача 2', id: Date.now() + 100 },
]

const UseCallback = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleEnterPress = (taskText: string) => {
    setTasks([
      ...tasks,
      {
        text: taskText,
        id: Date.now(),
      }
    ])
  }

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <RenderBadge>
      <BlockView sx={mainBlockSx}>
        <Input onEnter={handleEnterPress} />
        <Divider sx={dividerSx} />
        <BlockView sx={listSx}>
          {tasks.map(task => (
            <TaskView
              key={task.id}
              onDelete={handleDeleteTask}
              {...task}
            />
          ))}
        </BlockView>
      </BlockView>
    </RenderBadge>
  )
};

export default UseCallback;
