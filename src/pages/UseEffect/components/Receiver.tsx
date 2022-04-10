import React, { FC, Fragment, useEffect, useState } from 'react';
import { Box, CircularProgress, Snackbar } from '@mui/material';

import { BlockView } from '../../../components';
import { PropsDemoReceiverProps } from '../../../types';
import syncDataApi from '../../../utils/syncDataApi';
import { propsDemo } from '../style';

const Receiver: FC<PropsDemoReceiverProps> = (props) => {
  const { data } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  useEffect(() => {
    setIsSnackbarOpen(true);
  }, [data.status])

  useEffect(() => {
    setIsLoading(true);
    // Так как асинхронная функция возвращает промис, мы не можем сделать асинзхронной функцию 
    // передаваемую в useEffect, так как useEffect ожидает что из колбэка вернется функция 
    // Если нам необходимо сделать что-то асинхронно в useEffect,
    // можно создать async функцию прямо внутри и вызвать её. 
    // Либо использовать синтаксиси промисов .then()
    const syncData = async () => {
      await syncDataApi(data.items);
      setIsLoading(false);
    }
    syncData();
  }, [data.items.length])


  const handleClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <>
      <BlockView sx={propsDemo.fill}>
        {data.items.map((text) => <div key={text}>{text}</div>)}
      </BlockView>
      <BlockView sx={propsDemo.fill}>
        {isLoading && (<CircularProgress />)}
      </BlockView>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`New status: ${data.status}`}
      />
    </>
  )
}

export default Receiver;
