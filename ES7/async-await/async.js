const fetch = require("node-fetch");

class GithubApiClient {
  async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }
}

(async () => {
  const client = new GithubApiClient();
  try {
    const user = await client.fetchUser("idono2222texist");
    console.log(user.name);
    console.log(user.location);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
})();
