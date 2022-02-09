export default () => {
  const initialArray = [];

  for (let index = 0; index < 3000000; index++) {
    initialArray[index] = Math.random().toFixed(1);
  }

  return initialArray;
}