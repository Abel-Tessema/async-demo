const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(true);
    reject(new Error(`404`));
  });
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error.message));