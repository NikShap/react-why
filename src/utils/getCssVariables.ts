const getCssVariables = (isDark: boolean) => (
  {
    '--bg-clr': isDark ? 'darkgrey' : 'white',
    '--txt-clr': isDark ? 'white' : 'black'
  }
);

export default getCssVariables;
