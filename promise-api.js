const promise1 = Promise.resolve({id: 1, name: "Jash"});
promise1.then(result => console.log(result));

const promise2 = Promise.reject(new Error('reason for rejection…'));
promise2.catch(error => console.log(error));