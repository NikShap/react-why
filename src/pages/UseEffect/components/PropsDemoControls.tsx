import { Button, MenuItem, Select } from '@mui/material';
import React, { FC } from 'react';
import { BlockView } from '../../../components';
import { initialPropsDemoData } from '../../../mockData';
import { PropsDemoControlsProps } from '../../../types';
import { propsDemo } from '../style';

const PropsDemoControls: FC<PropsDemoControlsProps> = (props) => {
  const { state, setState } = props;

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
      items: prevState.items.length === 2 ? initialPropsDemoData.items : ['Вупсень', 'Пупсень'],
    }));
  };

  const filterButtonVariant = state.items.length === 2 ? 'contained' : 'outlined';
  const filterButtonText = state.items.length === 2 ? 'Reset Filter' : 'Filter';

  return (
    <BlockView sx={propsDemo.fill}>
      <Select
        value={state.status}
        onChange={handleStatusChange}
        sx={propsDemo.controls}
      >
        <MenuItem value={'DRAFT'}>DRAFT</MenuItem>
        <MenuItem value={'DELETED'}>DELETED</MenuItem>
        <MenuItem value={'PUBLISHED'}>PUBLISHED</MenuItem>
      </Select>
      <Button
        variant='outlined'
        sx={propsDemo.controls}
        onClick={handleRevert}
      >
        Reorder
      </Button>
      <Button
        variant={filterButtonVariant}
        sx={propsDemo.controls}
        onClick={handleFilter}
      >
        {filterButtonText}
      </Button>
    </BlockView>
  )
}

export default PropsDemoControls;