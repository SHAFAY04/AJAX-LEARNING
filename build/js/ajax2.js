"use strict";
//AJAX 2 LOCAL JSON!
let getuser = document.getElementById('button1');
let getusers = document.getElementById('button2');
getuser.onclick = loadUser;
getusers.onclick = loadUsers;
function loadUser() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/src/user.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            let user = JSON.parse(this.responseText);
            let output = '';
            output = output + `<ul><li>${user.id}</li><li>${user.name}</li><li>${user.email}</li></ul>`;
            let userdiv = document.getElementById('user');
            userdiv.innerHTML = output;
        }
    };
    xhr.send();
}
function loadUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/src/users.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            let output = '';
            let users = JSON.parse(this.responseText);
            let usersArray = Array.from(users);
            console.log(usersArray);
            usersArray.forEach(user => {
                output = output + `<ol><li>${user.id}</li><li>${user.name}</li><li>${user.email}</li></ol>`;
            });
            let usersdiv = document.getElementById('users');
            usersdiv.innerHTML = output;
        }
    };
    xhr.send();
}
