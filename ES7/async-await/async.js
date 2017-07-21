const fetch = require("node-fetch");

class GithubApiClient {
  async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  }
}

const client = new GithubApiClient();

async function showUserAndRepos(handle) {
  const [user, repos] = await Promise.all([
    client.fetchUser(handle),
    client.fetchUser(`${handle}/repos`)
  ]);

  console.log(user.name);
  console.log(repos.length);
}

showUserAndRepos("nichenqin1001");
