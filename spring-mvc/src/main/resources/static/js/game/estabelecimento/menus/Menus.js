export default class Menus {
  static load() {
    //MENUS
    var telaMenus = document.getElementById("menus");
    telaMenus.innerHTML = `
          <div class="scroll">
            <div id="btns-modals">
                <button id="btn-openArmazem" class="btn-menus">Armazem</button>
                <button id="btn-openFornecedores" class="btn-menus">Fornecedores</button>
            </div>
            <div id="area-crafting">
                <h1>Área de crafting</h1>
                <img draggable="false" id="caldeirao" src="images/game/sprite-caldeirão/caldeirão.png" />
                <div id="barra-progresso">
                <div></div>
                </div>
            </div>
            <div id="grimoire-wrapper">
              <img draggable="false" id="img-grimorio" src="images/game/close-grimoire.png" />
            <div>
        </div>  
        `;
  }
}
