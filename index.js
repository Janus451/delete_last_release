const { Octokit } = require("@octokit/rest");
const { env } = require("process");
const token = env.INPUT_GITHUB_TOKEN;
const repository = env.INPUT_REPOSITORY || env.GITHUB_REPOSITORY;
const [owner, repo] = repository.split("/")

const octokit = new Octokit({ auth: token });

octokit.repos.getLatestRelease({ owner, repo }).then(response => {
    if (!response.data) {
        console.error('No release found. Cannot delete');
        return
    }
    const release_id = response.data.id;
    octokit.repos.deleteRelease({ owner, repo, release_id });
}).catch(error => {
    if (error.status === 404) {
        console.error('No release found. Cannot delete');
        return
    }
    console.error('Can\'t get last release');
    console.error(error);
})