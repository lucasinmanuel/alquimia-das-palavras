export default class Status {
  static load() {
    var status = document.getElementById("status");
    status.innerHTML = `
            <h3>Status - Dia <day id="day">1</day></h3>
            <img draggable="false" src="images/game/placa-fechado.png" alt="Placa de fechado" />
            <div id="btns-config">
                <button id="btn-audio"><img src="/images/game/icons/sound.png" /></button>
                <button title="Salvar Jogo" alt="Salvar Jogo" id="btn-save"><img src="/images/game/icons/save.png" /></button>
            </div>
        `;
  }
  static setDay(day) {
    document.getElementById("day").innerHTML = day;
    sessionStorage.setItem("day", day);
  }
}
