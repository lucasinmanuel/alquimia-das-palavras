import Estabelecimento from "./estabelecimento/Estabelecimento.js";
import Armazem from "./estabelecimento/modal-armazem/Armazem.js";
import Caldeirao from "./estabelecimento/menus/caldeirão/Caldeirao.js";
import Grimoire from "./estabelecimento/modal-grimório/Grimoire.js";
import InitFases from "./fases/initFases/FasesController.js";
import Receitas from "./estabelecimento/modal-grimório/Receitas.js";
import PainelMoedas from "./estabelecimento/painel-moedas/PainelMoedas.js";
import Status from "./estabelecimento/status/Status.js";
import Save from "./save/Save.js";

import ingredientes from "./listas/ingredientes.js";
import itens from "./listas/itens.js";

loadGame();

function loadGame() {
  var game = document.getElementById("game");
  var estabelecimento = new Estabelecimento(game);
  estabelecimento.load();

  //var save = Save.getSave();

  caldeirao();
  modalStore();
  modalGrimoire();
  startGame();
  gameSave();

  Status.setDay(1);
  // PainelMoedas.setMoedaBronze(save.coins.copper);
  // PainelMoedas.setMoedaPrata(save.coins.silver);
  // PainelMoedas.setMoedaOuro(save.coins.gold);
}

function caldeirao() {
  var dragItem = null;
  document.body.addEventListener("dragstart", function (event) {
    dragItem = event.target;
  });
  document.body.addEventListener("dragover", function (event) {
    event.preventDefault();
  });
  var caldeirao = new Caldeirao([]);
  var dropCaldeirao = document.getElementById("caldeirao");
  dropCaldeirao.addEventListener("drop", () => {
    caldeirao.crafting(dragItem);
  });
}

function modalStore() {
  //mostra o modal armazem
  var openArmazem = document.getElementById("btn-openArmazem");
  openArmazem.addEventListener("click", () => {
    Armazem.showOrHide("show");
  });
  //esconde o modal armazem quando clicar no botão X
  var closeArmazem = document.getElementById("btn-closeArmazem");
  closeArmazem.addEventListener("click", () => {
    Armazem.showOrHide("hide");
  });
  closeArmazem.parentElement.addEventListener("dragleave", (event) => {
    if (event.clientX < 623) {
      Armazem.showOrHide("hide");
    }
  });
  Armazem.add(ingredientes().alecrim);
  Armazem.add(ingredientes().jade);
  Armazem.add(itens().revelador_simples);
}

function modalGrimoire() {
  //mostra o modal e muda imagem do grimorio para aberto
  var openGrimorio = document.getElementById("img-grimorio");
  openGrimorio.addEventListener("click", () => {
    Grimoire.showOrHide("show");
  });
  //esconde o modal e muda imagem do grimorio para fechado
  var closeGrimorio = document.getElementById("btn-closeGrimorio");
  closeGrimorio.addEventListener("click", () => {
    Grimoire.showOrHide("hide");
  });

  Grimoire.add(Receitas.potionComprar());
  Grimoire.add(Receitas.potionCorrer());
}

function startGame() {
  //INICIAR FASES
  var placaLoja = document.querySelector("#status img");

  placaLoja.addEventListener("click", () => {
    if (placaLoja.getAttribute("src") === "images/game/placa-fechado.png") {
      placaLoja.setAttribute("src", "images/game/placa-aberto.png");
      InitFases.selecionarDia();
    }
  });
}

function gameSave() {
  //SALVANDO JOGO
  const btnSave = document.getElementById("btn-save");
  btnSave.addEventListener("click", () => {
    //Save.setSave();
    alert("Jogo salvo");
  });
}
