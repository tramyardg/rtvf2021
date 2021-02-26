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

function nameSorter(repos) {
  return [...repos].sort((a, b) => a.name.localeCompare(b.name));
}

function stargazerSorter(repos) {
  return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
}

module.exports = {
  fetchRepos,
  nameSorter,
  stargazerSorter
}