export default class Status {
  static load() {
    var status = document.getElementById("status");
    status.innerHTML = `
            <h3>Status - Dia <day id="day">1</day></h3>
            <img draggable="false" src="../../../images/game/placa-fechado.png" alt="Placa de fechado" />
            <div id="btns-config">
                <button id="btn-music" title="Música de fundo">
                  <img src="../../../images/game/icons/sound.png" alt="Música de fundo"  />
                </button>
                <button title="Salvar Jogo" id="btn-save">
                  <img alt="Salvar Jogo" src="/images/game/icons/save.png" />
                </button>
            </div>
        `;
  }
  static setDay(day) {
    document.getElementById("day").innerHTML = day;
    sessionStorage.setItem("day", day);
  }
}
