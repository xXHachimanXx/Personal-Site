const api_url = "https://api.github.com/users/xXHachimanXx";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function setFields() {
    let data = JSON.parse(this.responseText);
    //let data = this.responseText;
    console.log(data)
    document.getElementById('auth-name').text = data.name;
    document.getElementById('page-title').text = data.name;
    document.getElementById('main-title').innerHTML = data.name;
    document.getElementById('link-main-title').href = data.html_url;
    document.getElementById('avatar-image').src = data.avatar_url;

    document.getElementById('github-info-folowers').innerHTML = "followers: " + data.followers;
    document.getElementById('github-info-following').innerHTML = "following: " + data.following;

    document.getElementById('link-github').href = data.html_url;
    document.getElementById('link-linkedin').href = data.blog;
}

function executaPesquisa () {
    // let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = setFields;
    xhr.open('GET', `${api_url}`);
    xhr.send();
}

executaPesquisa("");


// function api(path) {
//     fetch(api_url + path)
//         .then((resp) => resp.json())
//         .then(resp => setFields(resp))
//         .catch(function (error) {
//             console.log(error);
//         });
// }

