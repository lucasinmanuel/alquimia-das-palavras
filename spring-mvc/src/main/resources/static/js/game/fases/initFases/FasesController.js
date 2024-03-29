import D1Npc1 from "../dia-1/npc-1/npc.js";
import D1Npc2 from "../dia-1/npc-2/npc.js";
import D2Npc1 from "../dia-2/npc-1/npc.js";
import FasesService from "./FasesService.js";
import Transition from "../../estabelecimento/modal-transition/Transition.js";

export default class InitFases {
  static selecionarDia(dia, npc) {
    let npcs;
    switch (dia) {
      case 1:
        npcs = [D1Npc1(), D1Npc2(), undefined];
        this.advanceDay(dia, npc, npcs);
        break;
      case 2:
        npcs = [D2Npc1(), undefined];
        this.advanceDay(dia, npc, npcs);
        break;
    }
  }
  static advanceDay(day, i, npcs) {
    let fasesService = new FasesService();
    createInterval();
    function createInterval() {
      console.log("Loop acontecendo! NPC: " + i);
      if (npcs[i] === undefined && fasesService.checkNpc()) {
        const html_day = document.getElementById("day");
        let updatedDay = day + 1;
        html_day.innerText = updatedDay;
        document
          .querySelector("#status img")
          .setAttribute("src", "../../../images/game/placa-fechado.png");
        Transition.start(updatedDay);
        sessionStorage.setItem("dia", updatedDay);
        sessionStorage.setItem("npc", 0);
        i = 0;
      } else {
        if (fasesService.checkNpc()) {
          fasesService.load(npcs[i].info.img_npc, day, i + 1);
          fasesService.start(
            npcs[i].info.palavraOculta,
            npcs[i].info.tipoMoeda,
            npcs[i].info.qtdMoeda,
            npcs[i].falas
          );
          sessionStorage.setItem("npc", i);
          i++;
        }
        setTimeout(() => {
          createInterval();
        }, Math.floor(Math.random() * 9000 + 1000));
      }
    }
  }
}
