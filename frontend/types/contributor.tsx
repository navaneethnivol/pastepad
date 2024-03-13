// Sample Contributor Object
// {
//     "login": "navaneethnivol",
//     "id": 33155848,
//     "node_id": "MDQ6VXNlcjMzMTU1ODQ4",
//     "avatar_url": "https://avatars.githubusercontent.com/u/33155848?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/navaneethnivol",
//     "html_url": "https://github.com/navaneethnivol",
//     "followers_url": "https://api.github.com/users/navaneethnivol/followers",
//     "following_url": "https://api.github.com/users/navaneethnivol/following{/other_user}",
//     "gists_url": "https://api.github.com/users/navaneethnivol/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/navaneethnivol/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/navaneethnivol/subscriptions",
//     "organizations_url": "https://api.github.com/users/navaneethnivol/orgs",
//     "repos_url": "https://api.github.com/users/navaneethnivol/repos",
//     "events_url": "https://api.github.com/users/navaneethnivol/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/navaneethnivol/received_events",
//     "type": "User",
//     "site_admin": false,
//     "contributions": 58
// }

export interface Contributor {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    contributions: number
}