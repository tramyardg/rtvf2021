const { nameSorter, stargazerSorter, fetchRepos } = require('./main/MainUtil');
global.fetch = require("node-fetch");

test('Name sorter test', () => {
  const repos = [{ name: "z" }, { name: "a" }, { name: "j" }];
  const expected = [{ name: "a" }, { name: "j" }, { name: "z" }];
  expect(nameSorter(repos)).toStrictEqual(expected);
});

test('Startgazer test', () => {
  const repos = [{ name: "z", stargazers_count: 112 }, { name: "a", stargazers_count: 7788 }, { name: "j", stargazers_count: 54 }];
  const expected = [{ name: "a", stargazers_count: 7788 }, { name: "z", stargazers_count: 112 }, { name: "j", stargazers_count: 54 }];
  expect(stargazerSorter(repos)).toStrictEqual(expected);
});

test("Fetch org repos", async () => {
  await fetchRepos("octokit").then((reponse) => {
    expect(reponse.length).toBeGreaterThan(1);
  })
})

test("Fetch nonexistent org", async () => {
  try {
    await fetchRepos("_nonexistent_org_");
  } catch (error) {
    expect(error + "").toEqual("Error: not found");
  }
})