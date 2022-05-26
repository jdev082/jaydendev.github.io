const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let error = "404";
if (error == '404') {
    document.querySelector('#errCode').innerText = "Invalid or missing page."
}