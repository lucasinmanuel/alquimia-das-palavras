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
}
