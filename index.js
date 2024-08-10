console.log(`Before`);

getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repositories => getCommits(repositories[0]))
  .then(commits => console.log(commits))
  .catch(error => console.log(error.message));

console.log(`After`);

function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log(`Reading a user from a database…`);
    setTimeout(() => {
      resolve({id: id, gitHubUsername: `Béla Jash`});
    }, 2_000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching repositories of ${username}`);
    setTimeout(() => {
      resolve([`repo 1`, `repo 2`, `repo 3`]);
    }, 2_000);
  });
}

function getCommits(repository) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching commits of ${repository}`);
    setTimeout(() => {
      resolve([`commit 1`, `commit 2`, `commit 3`]);
    }, 2_000);
  });
}