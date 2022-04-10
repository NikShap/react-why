import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { useTheme } from '../context';

const Switcher = () => {
  const { isDark, switchTheme } = useTheme();

  return (
    <FormControlLabel
      value="end"
      control={(
        <Switch
          color="primary"
          checked={!isDark}
          onChange={switchTheme}
        />
      )}
      label={isDark ? 'Dark' : 'Light'}
      labelPlacement="end"
    />
  )
}

export default Switcher;