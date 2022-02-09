import { Box, Button, CircularProgress, MenuItem, Select, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BlockView from '../../components/BlockView';


type Data = {
  status: 'DRAFT' | 'DELETED' | 'PUBLISHED',
  items: string[];
};

const syncDataAPI = (_items: string[]) => new Promise((resolve) => {
  setTimeout(resolve, 2000);
})

type Props = {
  data: Data;
}

const Receiver = (props: Props) => {
  const { data } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  useEffect(() => {
    setIsSnackbarOpen(true);
  }, [data.status])

  useEffect(() => {
    setIsLoading(true);
    // Так как асинхронная функция возвращает промис, мы не можем сделать асинзхронной функцию 
    // передаваемую в useEffect, так как useEffect ожидает что из колбэка вернется функция cleanUp,
    // а не промис или другое какое либо другое значение. 
    // Если нам необходимо сделать что-то асинхронно в useEffect,
    // можно создать async функцию прямо внутри и вызвать её. 
    // Либо использовать синтаксиси промисов .then()
    const syncData = async () => {
      await syncDataAPI(data.items);
      setIsLoading(false);
    }
    syncData();
  }, [data.items.length])


  const handleClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <Box>
      <BlockView>
        {data.items.map((text) => <div key={text}>{text}</div>)}
      </BlockView>
      <BlockView>
        {isLoading && (<CircularProgress />)}
      </BlockView>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`New status: ${data.status}`}
      />
    </Box>
  )
}

const sx = {
  height: '50px',
  width: '150px',
  m: 1,
}

const initialData: Data = {
  status: 'DRAFT',
  items: ['Вупсень', 'Пупсень', 'Шнюк', 'Мила']
};

export default () => {
  const [state, setState] = useState<Data>(initialData)

  const handleStatusChange = (event: any) => {
    setState(prevState => ({
      ...prevState,
      status: event.target.value
    }));
  };

  const handleRevert = () => {
    setState(prevState => ({
      ...prevState,
      items: prevState.items.reverse(),
    }));
  };

  const handleFilter = () => {
    setState(prevState => ({
      ...prevState,
      items: prevState.items.length === 2 ? initialData.items : ['Вупсень', 'Пупсень'],
    }));
  };

  return (
    <Box>
      <Select
        value={state.status}
        onChange={handleStatusChange}
        sx={sx}
      >
        <MenuItem value={'DRAFT'}>DRAFT</MenuItem>
        <MenuItem value={'DELETED'}>DELETED</MenuItem>
        <MenuItem value={'PUBLISHED'}>PUBLISHED</MenuItem>
      </Select>
      <Button variant='outlined' sx={sx} onClick={handleRevert}>Reorder</Button>
      <Button variant={state.items.length === 2 ? 'contained' : 'outlined'} sx={sx} onClick={handleFilter}>Filter</Button>
      <Receiver data={state} />
    </Box>
  )
}