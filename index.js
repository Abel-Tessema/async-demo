console.log(`Before`);
getUser(1, function(user) {
  console.log(`User:`, user);
  getRepositories(user.gitHubUsername, (repositories) => {
    console.log(`Repositories of ${user.gitHubUsername}:`, repositories);
  })
});
console.log(`After`);

function getUser(id, callback) {
  setTimeout(() => {
    console.log(`Reading a user from a database…`);
    callback({id: id, gitHubUsername: `Béla Jash`});
  }, 2_000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    callback([`repo 1`, `repo 2`, `repo 3`]);
  }, 2_000);
}