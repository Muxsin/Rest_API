const usersEl = document.querySelector('.users');
const userTemplate = document.querySelector('#user-template');

function getUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://randomuser.me/api/?results=60');
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText).results;
            
            for(let item of data) {
                let userEl = document.importNode(userTemplate.content, true);
                userEl.querySelector('.familiar-user-avatar').src =  item.picture.medium;
                userEl.querySelector('.familiar-user-avatar').alt =  item.name.first + "-avatar";
                userEl.querySelector('.familiar-user-name').textContent = item.name.first + " " + item.name.last;
                usersEl.appendChild(userEl);
                usersEl.appendChild(document.createElement("hr"));
            }
        }
    }
    xhr.send();
}

getUsers();