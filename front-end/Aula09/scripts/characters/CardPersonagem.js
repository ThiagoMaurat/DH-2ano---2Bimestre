import { elements } from "../data/elements.js";

export const CardPesonagem = (nome, elemento, avatar) =>
  `<div class="card shadow-sm">
  <div class="card-header">
   <img src=${avatar} alt="${nome}" class="bd-placeholder-img card-img-top"/>
   <img src=${elements[elemento].logo} alt="${[elemento]}" class="logo-elemento" />
  </div>
  <div class="card-body">
      <h5 class="card-title">${nome}</h5>
      <small class="text-muted">${elements[elemento].nome}</small>
      <ul>
          <li><i>Força:</i> <span>${elements[elemento].forca}</span></li>
          <li><i>Vida:</i> <span>${elements[elemento].vida}</span></li>
          <li><i>Defesa:</i> <span>${elements[elemento].defesa}</span></li>
          <li><i>Velocidade:</i> <span>${elements[elemento].velocidade}</span></li>
      </ul>
  </div>
</div>`;