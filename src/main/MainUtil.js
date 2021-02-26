async function fetchRepos(orgName) {
  const response = await fetch(`https://api.github.com/orgs/${orgName}/repos`, {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    },
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Error');
  }
}

module.exports = {
  fetchRepos
}