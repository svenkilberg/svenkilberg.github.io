'use strict'

let gitHubReposContainer = document.getElementById('gitHubReposContainer');

fetch('https://api.github.com/users/svenkilberg/repos')
.then(response => response.json())
.then(json => {    
    console.log(json);
    drawRepos(json);
})

function drawRepos(repoList) {
    
    for (let i = 0; i < repoList.length; i++) {
    let gitHubReposHtml = `
    <a href="${repoList[i].html_url}" target="_blank"><div class="repo">
    <h6>${repoList[i].name}</h6>
    <p>${repoList[i].description}</p>
    </div>
    </a>`.trim();

    document.getElementById('gitHubReposContainer').insertAdjacentHTML('beforeend', gitHubReposHtml);

    }
}