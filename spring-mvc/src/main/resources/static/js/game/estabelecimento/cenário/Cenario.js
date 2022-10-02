export default class Cenario {
  static load() {
    //CENÁRIO
    var cenas = document.getElementById("cenario");
    cenas.innerHTML = `
            <div class="scroll">
                <img id="bg-loja" src="images/game/backgrounds/bg-loja.jpg" />
                <div id="area-fases"></div>
                <div id="balcao"></div><!--balcao-->
            <div>
        `;
  }
}
