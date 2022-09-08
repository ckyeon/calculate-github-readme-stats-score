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
// Use an empty account for token
export const GITHUB_TOKEN = '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';

export const GET = 'get';
export const POST = 'post';
