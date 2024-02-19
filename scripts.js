console.log(document.title);


document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

let fondo2 = document.querySelector(".infocard-list")
fondo2.style.background = "lightblue"

console.log(document.URL);

console.log(document.domain);

let nodos = document.getElementsByTagName("img");
console.log(nodos);

const source = document.querySelectorAll("img");
for (const img of source) {
  img.setAttribute(
    "src",
    "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
  );
}

