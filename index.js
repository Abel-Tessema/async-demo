console.log(`Before`);
getUser(1, fetchRepositories);
console.log(`After`);

function fetchRepositories(user) {
  getRepositories(user.gitHubUsername, fetchCommits)
}

function fetchCommits(repositories) {
  getCommits(repositories[0], displayCommits);
}

function displayCommits(commits) {
  console.log(`Commits:`, commits);
}

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

function getCommits(repository, callback) {
  setTimeout(() => {
    callback([`commit 1`, `commit 2`, `commit 3`]);
  }, 2_000);
}