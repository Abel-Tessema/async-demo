const promise1 = new Promise((resolve, reject) => {
  console.log('Asynchronous operation 1...');
  setTimeout(() => {
    resolve(1);
    // reject(new Error('Something went wrong.'));
  }, 1_500);
});

const promise2 = new Promise(resolve => {
  console.log('Asynchronous operation 2...');
  setTimeout(() => {
    resolve(2);
  }, 1_500);
});

Promise
  // .all([promise1, promise2])
  .race([promise1, promise2])
  .then(results => console.log(results))
  .catch(error => console.log(error.message));