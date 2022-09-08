// Use an empty account for token

export const GITHUB_TOKEN = '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';

export const GITHUB_API_URL_BY_GRAPHQL = 'https://api.github.com/graphql';
export const GITHUB_REQUEST_QUERY = `
      query userInfo($login: String!) {
        user(login: $login) {
          name
          login
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
          }
          repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
            totalCount
          }
          pullRequests(first: 1) {
            totalCount
          }
          openIssues: issues(states: OPEN) {
            totalCount
          }
          closedIssues: issues(states: CLOSED) {
            totalCount
          }
          followers {
            totalCount
          }
          repositories(first: 100, ownerAffiliations: OWNER, orderBy: {direction: DESC, field: STARGAZERS}) {
            totalCount
            nodes {
              stargazers {
                totalCount
              }
            }
          }
        }
      }`;
export const GITHUB_FETCH_STATS_HEADER = { Authorization: `bearer ${GITHUB_TOKEN}` };

export const GITHUB_FETCH_TOTAL_COMMITS_URL = 'https://api.github.com/search/commits?q=author:';
export const GITHUB_FETCH_TOTAL_COMMITS_HEADER = {
  'Content-Type': 'application/json',
  Accept: 'application/vnd.github.cloak-preview',
  Authorization: `token ${GITHUB_TOKEN}`,
};

export const GET = 'get';
export const POST = 'post';

// stat offsets
export const COMMITS_OFFSET = 1.65;
export const CONTRIBUTED_TO_OFFSET = 1.65;
export const ISSUES_OFFSET = 1;
export const STARS_OFFSET = 0.75;
export const PRS_OFFSET = 0.5;
export const FOLLOWERS_OFFSET = 0.45;
export const REPO_OFFSET = 1;

export const TOTAL_OFFSET =
  COMMITS_OFFSET +
  CONTRIBUTED_TO_OFFSET +
  ISSUES_OFFSET +
  STARS_OFFSET +
  PRS_OFFSET +
  FOLLOWERS_OFFSET +
  REPO_OFFSET;