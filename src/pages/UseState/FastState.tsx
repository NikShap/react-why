import React, { useState } from 'react';
import BlockView from '../../components/BlockView';
import RenderBadge from '../../components/RenderBadge';
import RenderTrigger from '../../components/RenderTrigger';
import slowFunction from './slowFunction';

export default () => {
  const [state, setState] = useState(1);
  // В таком случае необходимо прокидывать эту функцию в useState а не вызывать её.
  // useState вызовет её только один раз, при инициализации.
  const [complexState] = useState(slowFunction);
  // Если функция должна принять аргументы, то в useState можно прокинуть стрелуочную функцию
  // const [complexState, setComplexState] = useState(((props) => longRunningFunction(props));

  const handleClick = () => {
    // Если вычислять новое значение привычным способом, то в момент выполнения второго setState
    // значение стэйта будет ссылаться на то что было в момент сосздания хэндлера.
    // И вместо того, чтобы увеличить стэйт на два, он будет увеличен на 1
    setState(state + 1);
    setState(state + 1);

  }

  return (
    <>
      <RenderTrigger forceRender={handleClick}> [{state}]</RenderTrigger>
      <RenderBadge>
        <BlockView>
          {complexState[0]}, ... ,{complexState[complexState.length - 1]}
        </BlockView>
      </RenderBadge>
    </>
  )
}