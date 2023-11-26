import { GitRepository } from './models/git-repository.js';

const repo = new GitRepository('MyRepository');

repo.commit('Initial commit');
repo.commit('Add feature A');

const featureBranch = repo.createBranch('feature-branch');
repo.checkout('feature-branch');
repo.commit('Implement feature B');

repo.checkout('master');
repo.commit('Fix bug in feature A');

repo.merge('feature-branch');

const commitHistory = repo.log();
console.log('Commit History:');
commitHistory.forEach(commit => {
    const branchIndicator = repo.branches.find(branch => branch.commit === commit && branch.name !== 'master') ? `(${repo.branches.find(branch => branch.commit === commit).name})` : '';
    console.log(`Commit ${commit.id}: ${commit.message} ${branchIndicator}`);
});
