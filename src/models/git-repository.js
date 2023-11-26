import { Commit } from './commit.js';
import { Branch } from './branch.js';

export class GitRepository {
    name;
    lastCommitId = 1;
    HEAD;
    branches = [];

    constructor(name) {
        this.name = name;
        const master = new Commit('master', null);
        this.branches.push(master);
        this.HEAD = master;
        console.log(`Created git repository ${this.name}`);
    }

    commit(message) {
        const newCommit = new Commit(this.lastCommitId++, message, new Date(), this.HEAD);
        this.HEAD = newCommit;
        console.log(`Commit ${newCommit.id} created`);
        return newCommit;
    }

    createBranch(branchName) {
        const branch = new Branch(branchName, this.HEAD);
        this.branches.push(branch);
        console.log(`Created branch ${branchName}`);
        return branch;
    }

    checkout(branchName) {
        const branch = this.branches.find(b => b.name === branchName);
        if (branch === undefined) {
            console.log(`Branch ${branchName} does not exist`);
            return;
        }
        this.HEAD = branch.commit;
        console.log(`Switched to branch ${branchName}`);
    }

    merge(branchName) {
        const branchToMerge = this.branches.find(b => b.name === branchName);
        if (branchToMerge === undefined) {
            console.log(`Branch ${branchName} does not exist`);
            return;
        }
        const newCommit = new Commit(this.lastCommitId++, `Merge branch ${branchName}`, new Date(), this.HEAD);
        this.HEAD = newCommit;
        console.log(`Merge commit ${newCommit.id} created`);
        return newCommit;
    }

    log() {
        let currentCommit = this.HEAD;
        let history = [];
        while (currentCommit != null) {
            const branch = this.branches.find(b => b.commit === currentCommit);
            history.push(currentCommit);
            currentCommit = currentCommit.parent;
        }
        return history.reverse();
    }
}
