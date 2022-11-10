import { initialCharacters } from "./data/characters.js";
import { CardPesonagem } from "./characters/CardPersonagem.js";

const cardContainer = document.getElementById('card-container');
const $BTN_ADICIONAR_PERSONAGEM = document.querySelector("#criar-personagem");

$BTN_ADICIONAR_PERSONAGEM.addEventListener("click", () => {
  const nome = document.querySelector("#nome-personagem").value;
  const avatar = document.querySelector("#avatar-personagem").value;
  const elemento = document.querySelector("#elemento-personagem").value;

  if (nome && elemento && avatar) {
    cardContainer.innerHTML += CardPesonagem(nome, elemento, avatar)
  } else {
    alert("please type all properties")
  };
})

window.addEventListener("load", () => {
  initialCharacters.forEach(character => cardContainer.innerHTML += CardPesonagem(character.nome, character.elemento, character.avatar))
})