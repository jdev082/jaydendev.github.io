let sites = [
    "/",
    "/MyScratchPage",
    "/detect",
    "/JaydenDev"
]

let names = [
    "Home",
    "MyScratchPage",
    "Browser Detector",
    "Personal Page"
]

// display sites in id 'list'
    let list = document.getElementById('list');
    for (let i = 0; i < sites.length; i++) {
        let li = document.createElement('a');
        li.innerHTML = names[i];
        li.href = sites[i];
        list.appendChild(li);
        let br = document.createElement('br');
        list.appendChild(br);
    }