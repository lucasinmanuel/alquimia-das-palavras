import Descubra from "./Itens/Descubra.js";

export default class Itens {
  constructor(palavra) {
    this.palavra = palavra;
  }

  dropItem(areaDrop) {
    var dragElement = null;
    document.body.addEventListener("dragstart", function (event) {
      dragElement = event.target;
    });

    if (areaDrop != null) {
      areaDrop.addEventListener("drop", () => {
        var inputEscolha = document.getElementById("palavraEsqueci");
        this.palavraOculta = inputEscolha.placeholder.split("?")[1].slice(1);

        if (dragElement.id === "revelador-simples") {
          this.reveladorSimples();
        }
        if (dragElement.id === "descubra") {
          this.descubra();
        }
      });
    }
  }

  reveladorSimples() {
    do {
      var indiceRandom = Math.floor(Math.random() * this.palavra.length);

      var oculta1 = this.palavraOculta.substring(0, indiceRandom);
      var revelar = this.palavra.substring(indiceRandom, indiceRandom + 1);
      var oculta2 = this.palavraOculta.substring(indiceRandom + 1);

      var indiceAnterior = this.palavraOculta.indexOf(revelar);
    } while (indiceRandom === indiceAnterior);

    var inputEscolha = document.getElementById("palavraEsqueci");
    inputEscolha.placeholder =
      "Qual é a palavra? " + oculta1 + revelar + oculta2;
  }

  descubra() {
    let array_letra_oculta = this.palavra.split("");
    const modalGeneric = document.getElementById("modal-generic");
    modalGeneric.style.position = "absolute";
    modalGeneric.style.left = "0";
    modalGeneric.style.top = "0";
    modalGeneric.style.zIndex = "1000";
    modalGeneric.style.width = "100vw";
    modalGeneric.style.height = "100vh";
    modalGeneric.style.backgroundColor = "#f3cba5";
    modalGeneric.innerHTML = `<div id="body-descubra"></div>`;
    modalGeneric.innerHTML += `
      <button id="button_help" type="button" class="material-icons icon-help">help</button>
      <button id="close-modal-generic" type="button">Fechar</button>
    `;

    const tentativas = [
      "row 1 selecionado",
      "row 2",
      "row 3",
      "row 4",
      "row 5",
      "row 6",
    ];
    const bodyDescubra = document.getElementById("body-descubra");
    bodyDescubra.style.display = "flex";
    bodyDescubra.style.flexDirection = "column";
    bodyDescubra.style.position = "relative";
    bodyDescubra.style.top = "50%";
    bodyDescubra.style.transform = "translateY(-50%)";
    bodyDescubra.style.margin = "0 auto";
    bodyDescubra.style.maxWidth = "70vw";
    bodyDescubra.style.padding = "0 3%";

    const style_row = `display: flex;justify-content: center;margin: 3px auto;`;
    tentativas.forEach((value) => {
      bodyDescubra.innerHTML += `
        <div style="${style_row}" class="${value}"></div>
      `;
    });

    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
      array_letra_oculta.forEach((letra) => {
        row.innerHTML += `
            <input stlye="width:100px;" type="text" class="box" disabled data-resposta="${btoa(
              letra
            )}" maxlength="1" />
        `;
      });
    });

    Descubra.inserir_modais();

    //QUANDO CLICAR NO BOTÃO AJUDA, ABRIR MODAL TUTORIAL
    const button_help = document.getElementById("button_help");
    button_help.addEventListener("click", () => {
      const modal_tutorial = document.getElementById("modal-tutorial");
      if (modal_tutorial.style.display === "none") {
        modal_tutorial.style.display = "block";
      } else {
        modal_tutorial.style.display = "none";
      }
    });
    Descubra.focar_inputs();
    Descubra.validar_palavra(this.palavra);

    //FECHAR O JOGO DESCUBRA
    document
      .getElementById("close-modal-generic")
      .addEventListener("click", () => {
        modalGeneric.innerHTML = "";
        modalGeneric.style = "";
      });
  }
}
