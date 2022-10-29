export default class Armazem {
  static load() {
    //CRIANDO MODAL ARMAZEM
    var modalArmazem = document.getElementById("modal-armazem");
    modalArmazem.innerHTML = `
            <h1>Armazem</h1>
            <div id="armazem-itens"></div>
            <button type="button" id="btn-closeArmazem">X</button>
        `;
  }
  static showOrHide(showOrHide) {
    var modalArmazem = document.getElementById("modal-armazem");
    if (showOrHide === "show") {
      //MOSTRA O MODAL ARMAZEM
      modalArmazem.style.display = "block";
    } else if (showOrHide === "hide") {
      //ESCONDE O MODAL ARMAZEM
      modalArmazem.style.display = "none";
    }
  }
  static add(item) {
    const armazemItens = document.getElementById("armazem-itens");
    armazemItens.innerHTML += `
      <img id="${item.id}" title="${item.title}" alt="${item.alt}" src="${item.src}" />
    `;
  }
}
