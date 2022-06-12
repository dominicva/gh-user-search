import { Octokit } from '@octokit/core';

const auth = process.env.GH_ACCESS_TOKEN;
const octoKit = new Octokit({ auth });

export default octoKit;
