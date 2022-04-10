import React, { useState } from 'react';
import { Divider, Switch } from '@mui/material';

import BlockView from '../../components/BlockView';
import useSwitchState from '../../hooks/useSwitchState';
import { Task } from '../../types';

import { TaskInput, TaskView } from './components';
import { useCallbackView } from './style';
import { initialTasks } from '../../mockData';

const UseCallback = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isSwitched, handleSwitchEvent] = useSwitchState();

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
    <BlockView
      withRenderBadge
      width={500}
    >
      <TaskInput onEnter={handleEnterPress} />
      <Switch onChange={handleSwitchEvent} />
      <Divider sx={useCallbackView.dividerSx} />
      <BlockView sx={useCallbackView.listSx}>
        {tasks.map(task => (
          <TaskView
            key={task.id}
            onDelete={handleDeleteTask}
            isSlowedDown={isSwitched}
            {...task}
          />
        ))}
      </BlockView>
    </BlockView>
  )
};

export default UseCallback;

// https://github.com/facebook/react/blob/e0160d50c5a492a925db6ab3f8478e118336c722/packages/react-reconciler/src/ReactFiberHooks.new.js#L1899
//
// function mountMemo<T>(
//   nextCreate: () => T,
//   deps: Array<mixed> | void | null,
// ): T {
//   const hook = mountWorkInProgressHook();
//   const nextDeps = deps === undefined ? null : deps;
//   const nextValue = nextCreate();
//   hook.memoizedState = [nextValue, nextDeps];
//   return nextValue;
// }

// https://github.com/facebook/react/blob/e0160d50c5a492a925db6ab3f8478e118336c722/packages/react-reconciler/src/ReactFiberHooks.new.js#L1876
//
// function mountCallback<T>(
//   callback: T,
//   deps: Array<mixed> | void | null
// ): T {
//   const hook = mountWorkInProgressHook();
//   const nextDeps = deps === undefined ? null : deps;
//   hook.memoizedState = [callback, nextDeps];
//   return callback;
// }

// https://github.com/facebook/react/blob/e0160d50c5a492a925db6ab3f8478e118336c722/packages/react-reconciler/src/ReactFiberHooks.new.js#L1910
//
// function updateMemo<T>(
//   nextCreate: () => T,
//   deps: Array<mixed> | void | null,
// ): T {
//   const hook = updateWorkInProgressHook();
//   const nextDeps = deps === undefined ? null : deps;
//   const prevState = hook.memoizedState;
//   if (prevState !== null) {
//     if (nextDeps !== null) {
//       const prevDeps: Array<mixed> | null = prevState[1];
//       if (areHookInputsEqual(nextDeps, prevDeps)) {
//         return prevState[0];
//       }
//     }
//   }
//   const nextValue = nextCreate();
//   hook.memoizedState = [nextValue, nextDeps];
//   return nextValue;
// }

// https://github.com/facebook/react/blob/e0160d50c5a492a925db6ab3f8478e118336c722/packages/react-reconciler/src/ReactFiberHooks.new.js#L1883
//
// function updateCallback<T>(
//   callback: T,
//   deps: Array<mixed> | void | null
// ): T {
//   const hook = updateWorkInProgressHook();
//   const nextDeps = deps === undefined ? null : deps;
//   const prevState = hook.memoizedState;
//   if (prevState !== null) {
//     if (nextDeps !== null) {
//       const prevDeps: Array<mixed> | null = prevState[1];
//       if (areHookInputsEqual(nextDeps, prevDeps)) {
//         return prevState[0];
//       }
//     }
//   }
//   hook.memoizedState = [callback, nextDeps];
//   return callback;
// }
