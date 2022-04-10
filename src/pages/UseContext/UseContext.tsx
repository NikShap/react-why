import React from 'react';
import { BlockView } from '../../components';
import getCssVariables from '../../utils/getCssVariables';
import { Child1, Switcher } from './components';
import { ThemeContextProvider, useThemeContextCreator } from './context';

const UseContext = () => {
  const contextValue = useThemeContextCreator();

  return (
    <ThemeContextProvider value={contextValue}>
      <BlockView
        withRenderBadge
        width={500}
        sx={getCssVariables(contextValue.isDark)}
      >
        <Switcher />
        <Child1 />
      </BlockView>
    </ThemeContextProvider>
  )
};

export default UseContext;