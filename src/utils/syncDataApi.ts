const syncDataApi = (_items: string[]) => new Promise((resolve) => {
  setTimeout(resolve, 3000);
})

export default syncDataApi;