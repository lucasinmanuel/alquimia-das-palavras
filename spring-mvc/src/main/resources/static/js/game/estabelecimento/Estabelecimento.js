import Cenario from "./cenário/Cenario.js";
import Menus from "./menus/Menus.js";
import PainelMoedas from "./painel-moedas/PainelMoedas.js";
import Status from "./status/Status.js";
import Armazem from "./modal-armazem/Armazem.js";
import Grimoire from "./modal-grimório/Grimoire.js";

export default class EstabelecimentoAlquimico {
  constructor(insert) {
    this.insert = insert;
  }
  load() {
    //TELA DO GAME
    this.insert.innerHTML = `
            <div id="cenario">
                <!--Elementos adicionandos na Classe Cenario.load()-->
            </div>
            <div id="menus"></div>
            <div id="painel-moedas">
                <!--Elementos adicionandos na Classe PainelMoedas.load()-->
            </div>
            <div id="status">
            <!--Elementos adicionandos na Classe Status.load()-->
            </div>
            <div id="modal-armazem">
                <!--Elementos adicionandos na Classe Armazem.load()-->
            </div><!--modal-armazem-->
            <div id="modal-grimorio">
                <!--Elementos adicionandos na Classe Grimorio.load()-->
            </div>
            <div id="modal-transition"></div>
            <div id="modal-generic"></div>
            <audio id="background-music">
              <source src="../../../audio/Medieval-Music.mp3" type="audio/mp3">
            </audio>
        `;

    Cenario.load();
    Menus.load();
    PainelMoedas.load();
    Status.load();
    Armazem.load();
    Grimoire.load();
  }
}
