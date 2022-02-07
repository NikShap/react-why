import { Box, Button, Divider, Typography } from '@mui/material';
import React, { PropsWithChildren, useRef, forwardRef, FC } from 'react';
import useForceRender from '../../hooks/useForceRender';


const boxStyles = {
  border: '1px grey dashed',
  m: 1,
  p: 1,
  width: 300,
}

// так же как и key, ref не доступен из props
const Block = ({ children, ref }: PropsWithChildren<{ ref: any }>) => {
  return (
    <Box ref={ref} sx={boxStyles}>{children}</Box>
  )
}

// forwardRef позволяет получить доступ к ref
const ForwardRefBlock: FC<any> = forwardRef(({ children }: PropsWithChildren<{}>, ref: any) => {
  return (
    <Box sx={boxStyles} ref={ref}>{children}</Box>
  )
})

// Может возникнуть ситуация, когда необходимо получить доступ к двум элементам расположенным внутри компонента.
// в таком случае можно использовать свои собственные props
const CustomRefBlock = ({ children, customRef1, customRef2 }: PropsWithChildren<{ customRef1: any, customRef2: any }>) => {
  return (
    <Box sx={boxStyles}>
      <div ref={customRef1}></div>
      <span ref={customRef2}></span>
      {children}
    </Box>
  )
}

const UseRef = () => {
  const forceRender = useForceRender();
  const refForRef = useRef<HTMLElement>();
  const refForForwardRef = useRef<HTMLElement>();
  const refForCustomProp1 = useRef<HTMLElement>();
  const refForCustomProp2 = useRef<HTMLElement>();

  return (
    <Box>
      <Button onClick={forceRender}>Rerender</Button>
      <Block ref={refForRef}>
        <Typography>
          using ref: {refForRef.current?.nodeName || 'null'}
        </Typography>
      </Block>
      <ForwardRefBlock ref={refForForwardRef}>
        <Typography>
          using ref with forwardRef: {refForForwardRef.current?.nodeName || 'null'}
        </Typography>
      </ForwardRefBlock>
      <CustomRefBlock customRef1={refForCustomProp1} customRef2={refForCustomProp2}>
        <Typography>
          using custom ref prop: {refForCustomProp1.current?.nodeName || 'null'} {refForCustomProp2.current?.nodeName || 'null'}
        </Typography>
      </CustomRefBlock>
      <Divider></Divider>
      <Typography>
        Изменение ref не тригерит рендер. Именно поэтому нужно нажать на Rerender чтобы увидеть результат.
        Эту особенность используют когда нужно хранить значения между рендерами.
      </Typography>
    </Box>
  )
}

export default UseRef;
