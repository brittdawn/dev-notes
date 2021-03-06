import axios from 'axios';

function getRepos(username){
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`);
}

function getOrgs(username){
  return axios.get(`https://api.github.com/users/${username}/orgs`);
}

export default function getGithubInfo(username){
    return axios.all([getRepos(username), getUserInfo(username), getOrgs(username)])
      .then((arr) => ({repos: arr[0].data,bio: arr[1].data,orgs: arr[2].data}))
}
