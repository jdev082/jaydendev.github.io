const get = document.querySelector('#get')
const input = document.querySelector('#input')
const id = document.querySelector('#id')
const username_field = document.querySelector('#username')
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

get.addEventListener('click', function () {
    fetch(`https://sui.sid72020123.repl.co/get_id/${input.value}`)
        .then(res => res.json())
        .then(data => {
            if (data.Error) {
                alert('Username not in database.')
                return;
            } else {
                id.innerText = 'User ID: ' + data.ID;
                username_field.innerText = input.value;
            }
        })
})

if (urlParams.get('username')) {
    input.value = urlParams.get('username')
    get[0].click();
}

fetch('https://sui.sid72020123.repl.co/status')
.then(res => res.json())
.then(data => {
    document.querySelector('#indexed').innerText = data.TotalUsers;
})