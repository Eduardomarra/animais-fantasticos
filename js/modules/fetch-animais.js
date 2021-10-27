import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  const fetchAnimais = fetch("./json/animaisApi.json");
  const numerosGrid = document.querySelector(".numeros-grid");

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais
    .then((response) => response.json())
    .then((animal) => {
      animal.forEach((e) => {
        numerosGrid.appendChild(createAnimal(e));
      });
      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animaNumeros.init();
    })
    .catch(() => {
      const numerosAnimais = document.querySelector(".numeros");
      numerosAnimais.style.display = "none";
    });
}
