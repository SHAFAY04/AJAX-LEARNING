"use strict";
let getGithub = document.getElementById('button');
getGithub.addEventListener('click', loadGithubUsers);
function loadGithubUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = function () {
        let output = '';
        if (this.status == 200) {
            let users = JSON.parse(this.responseText);
            for (const key in users) {
                output = output + `<div class="user"><ul>
                <li>${users[key].id}</li>
                <li>${users[key].login}</li>
                <li><img id="userImg" src="${users[key].avatar_url}" height="100px"></img></li>
                </ul></div>`;
            }
            document.getElementById('users').innerHTML = output;
        }
    };
    xhr.send();
}
