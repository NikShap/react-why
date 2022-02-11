import React, { useState } from 'react';

import BlockView from '../../components/BlockView';
import RenderBadge from '../../components/RenderBadge';
import RenderTrigger from '../../components/RenderTrigger';
import slowFunction from '../../utils/slowFunction';

export default () => {
  const [state, setState] = useState(1);
  // Если первоначальное значение useState возвращается из функции,
  // то эта функция будет вызываться на каждом рендере. Это может сильно замедлить приложение,
  // если функция выполняется долго
  const [complexState] = useState(slowFunction());

  const handleClick = () => {
    // если новое значение state зависит от текущего, то имеет смысл прокинуть в setState функцию
    // setState вызовет эту функцию, прокинув в неё предыдущее значение.
    // За счет того, что функция прокинутая в useStatе всегда имеет доступ к актуальному стэйту,
    // можно вызывать её несколько раз и результат будет ожидаемым
    setState(prevState => prevState + 1);
    setState(prevState => prevState + 1);
  }

  return (
    <>
      <RenderTrigger forceRender={handleClick}> [{state}]</RenderTrigger>
      <RenderBadge>
        <BlockView>
          {complexState[0]}, {complexState[1]}
        </BlockView>
      </RenderBadge>
    </>
  )
}