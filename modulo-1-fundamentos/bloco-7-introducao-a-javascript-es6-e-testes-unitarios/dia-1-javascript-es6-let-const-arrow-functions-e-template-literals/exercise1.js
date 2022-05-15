const button = document.querySelector("button");
const counter = document.querySelector("p");

let contador = 0;

button.addEventListener("click", () => {
  contador += 1;
  counter.innerHTML = contador;
});
