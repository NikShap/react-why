import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';

const longRunningFunction = () => {
  const initialArray = [];

  for (let index = 0; index < 3000000; index++) {
    initialArray[index] = Math.random().toFixed(1);
  }

  return initialArray;
}

const Block1 = () => {
  const [simpleState, setSimpleState] = useState(1);
  // Если первоначальное значение useState возвращается из функции,
  // то эта функция будет вызываться на каждом рендере. Это может сильно замедлить приложение,
  // если функция выполняется долго
  const [complexState, setComplexState] = useState(longRunningFunction());

  const handleClick = () => {
    // если новое значение state зависит от текущего, то имеет смысл прокинуть в setState функцию
    // setState вызовет эту функцию, прокинув в неё предыдущее значение.
    // За счет того, что функция прокинутая в useStatе всегда имеет доступ к актуальному стэйту,
    // можно вызывать её несколько раз и результат будет ожидаемым
    setSimpleState(prevSimpleState => prevSimpleState + 1);
    setSimpleState(prevSimpleState => prevSimpleState + 1);
  }

  return (
    <>
      <Button onClick={handleClick}>Rerender 1 - {simpleState}</Button>
      <Typography sx={{ width: 500 }}>
        {complexState[0]}, {complexState[1]}
      </Typography>
    </>
  )
}

const Block2 = () => {
  const [simpleState, setSimpleState] = useState(1);
  // В таком случае необходимо прокидывать эту функцию в useState а не вызывать её.
  // useState вызовет её только один раз, при инициализации.
  const [complexState, setComplexState] = useState(longRunningFunction);
  // Если функция должна принять аргументы, то в useState можно прокинуть стрелуочную функцию
  // const [complexState, setComplexState] = useState(((props) => longRunningFunction(props));

  const handleClick = () => {
    // Если вычислять новое значение привычным способом, то в момент выполнения второго setState
    // значение стэйта будет ссылаться на то что было в момент сосздания хэндлера.
    // И вместо того, чтобы увеличить стэйт на два, он будет увеличен на 1
    setSimpleState(simpleState + 1);
    setSimpleState(simpleState + 1);

  }

  return (
    <>
      <Button onClick={handleClick}>Rerender 2 - {simpleState}</Button>
      <Typography sx={{ width: 500 }}>
        {complexState[0]}, {complexState[1]}
      </Typography>
    </>
  )
}

const UseState = () => {
  return (
    <Box>
      <Block1 />
      <Divider />
      <Block2 />
    </Box>
  )
}

export default UseState;
