import Estabelecimento from "./estabelecimento/Estabelecimento.js";
import Armazem from "./estabelecimento/modal-armazem/Armazem.js";
import Caldeirao from "./estabelecimento/menus/caldeirão/Caldeirao.js";
import Grimoire from "./estabelecimento/modal-grimório/Grimoire.js";
import InitFases from "./fases/initFases/FasesController.js";
import Receitas from "./estabelecimento/modal-grimório/Receitas.js";
import PainelMoedas from "./estabelecimento/painel-moedas/PainelMoedas.js";
import Status from "./estabelecimento/status/Status.js";
import Save from "./save/Save.js";

loadGame();

function loadGame() {
  let dia = Number(sessionStorage.getItem("dia"));
  let npc = Number(sessionStorage.getItem("npc"));
  let moeda_bronze = Number(sessionStorage.getItem("moeda_bronze"));
  let moeda_prata = Number(sessionStorage.getItem("moeda_prata"));
  let moeda_ouro = Number(sessionStorage.getItem("moeda_ouro"));
  let armazem = JSON.parse(sessionStorage.getItem("armazem"));
  let receita = JSON.parse(sessionStorage.getItem("receita"));

  var game = document.getElementById("game");
  var estabelecimento = new Estabelecimento(game);
  estabelecimento.load();
  //var save = Save.getSave();

  caldeirao();
  modalStore(armazem);
  modalGrimoire(receita);
  startGame(dia, npc);
  gameSave();

  Status.setDay(dia);
  PainelMoedas.setMoedaBronze(moeda_bronze);
  PainelMoedas.setMoedaPrata(moeda_prata);
  PainelMoedas.setMoedaOuro(moeda_ouro);
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

function modalStore(armazem) {
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

  //adicionando itens ao armazem
  for (let i in armazem) {
    Armazem.add(armazem[i]);
  }

  var item = {
    title: "descubra",
    alt: "descubra",
    id: "descubra",
    src: "http://localhost:8080/images/game/itens/descubra.png",
  };
  Armazem.add(item);
}

function modalGrimoire(receita) {
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

  //adicionando receitas ao grimorio
  for (let i in receita) {
    Grimoire.add(receita[i]);
  }
}

function startGame(dia, npc) {
  //INICIAR FASES
  var placaLoja = document.querySelector("#status img");

  placaLoja.addEventListener("click", () => {
    if (placaLoja.getAttribute("src").includes("placa-fechado.png")) {
      placaLoja.setAttribute("src", "../../../images/game/placa-aberto.png");
      InitFases.selecionarDia(dia, npc);
    }
  });
}

function gameSave() {
  //SALVANDO JOGO
  const btnSave = document.getElementById("btn-save");
  btnSave.addEventListener("click", () => {
    Save.setSave();
    alert("Jogo salvo");
  });
}
backgroundMusic();
function backgroundMusic() {
  const backgroundMusic = document.getElementById("background-music");
  backgroundMusic.innerHTML = `
    <source src="../../../audio/Medieval-Music.mp3" type="audio/mp3">
  `;
  backgroundMusic.volume = "0.1";
  backgroundMusic.play();
}
