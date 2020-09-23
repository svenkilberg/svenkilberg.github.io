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
        
    let description = "";
    
    // Prevents null from being printed on the page
    if (repoList[i].description === null) {
        description = "";
    }  
    else {
        description = repoList[i].description;
    }

    let gitHubReposHtml = `
    <a href="${repoList[i].html_url}" target="_blank"><div class="repo">
    <p><span class="fab fa-github fa-2x" ></span></p>
    <h6>${repoList[i].name}</h6>
    <p>${description}</p>
    </div>
    </a>`.trim(); // Trim removes white spaces from beginning and end

    document.getElementById('gitHubReposContainer').insertAdjacentHTML('beforeend', gitHubReposHtml);

    }
}