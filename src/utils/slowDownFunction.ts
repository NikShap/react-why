const slowDownFunction = (iterations: number = 3000000) => {
  const initialArray = [];

  for (let index = 0; index < iterations; index++) {
    initialArray[index] = Math.random().toFixed(1);
  }

  return initialArray;
}

export default slowDownFunction;