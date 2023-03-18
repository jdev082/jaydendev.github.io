themes = ["light", "dark"]
const themebtn = document.querySelector('#theme-btn');
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark')
}
theme = localStorage.getItem('theme')
setTheme(theme)

themebtn.addEventListener("click", function () {
    if (theme == "dark") {
        setTheme("light")
    } else {
        setTheme("dark")
    }
    localStorage.setItem('theme', theme)
})

function setTheme(themeName) {
    theme = themeName
    if (theme == "light") {
        themebtn.innerText = "Light"
        document.body.classList.add("theme-light")
    } else if (theme == "dark") {
        themebtn.innerText = "Dark"
        document.body.classList.remove("theme-light")
    }
}

const navbtn = document.querySelector('#nav-btn')
navbtn.addEventListener('click', function () {
    if ( document.querySelector('#nav').style.display == "" ) {
        document.querySelector('#nav').style.display = "flex"
        navbtn.innerText = "Retract"
    } else if ( document.querySelector('#nav').style.display == "flex") {
        document.querySelector('#nav').style.display = ""
        navbtn.innerText = "Expand"
    }
})