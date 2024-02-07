const p1 = document.getElementById("p1");
const h1 = document.getElementById("h1");
const butt = document.getElementById("butt");

function random() {
    p1.innerHTML = Math.random(1,100);
}

butt.addEventListener("click", () => {
    random()
});
