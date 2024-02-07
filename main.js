let a = document.getElementById("a");

function random() {
    a.innerHTML = Math.random();
}

document.getElementById("h1").addEventListener("click",random());