document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector ('#name');
    const usernameElement = document.querySelector('#username')
    const avatarElement = document.querySelector('#avatar');
    const repositorioElement = document.querySelector('#repositorio');
    const seguidoresElement = document.querySelector('#seguidores');
    const seguindoElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#link');
    
    fetch('https://api.github.com/users/zbrunobessa')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            repositorioElement.innerText = json.public_repos;
            seguidoresElement.innerText = json.following;
            seguindoElement.innerText = json.followers;
            linkElement.href = json.html_url;
        })


})