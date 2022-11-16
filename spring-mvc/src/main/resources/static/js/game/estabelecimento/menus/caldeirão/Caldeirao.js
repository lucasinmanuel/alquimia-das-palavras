import Armazem from "../../modal-armazem/Armazem.js";
import potionsList from "../../../listas/potions.js";

export default class Caldeirao {
  constructor(insideCaldeirao) {
    this.insideCaldeirao = insideCaldeirao;
    this.barraProgress = document.querySelector("#barra-progresso div");
  }

  crafting(dragItem) {
    this.insideCaldeirao.push(dragItem.id);
    this.caldeirao = document.getElementById("caldeirao");
    switch (this.insideCaldeirao.toString()) {
      case "alecrim":
        this.caldeirao.setAttribute(
          "src",
          "../../../images/game/sprite-caldeirão/caldeirão-alecrim.png"
        );
        break;
      case "alecrim,alecrim":
        this.insideCaldeirao = []; //LIMPAR CALDEIRÃO
        this.potionCorrer();
        break;
      case "jade":
        this.caldeirao.setAttribute(
          "src",
          "../../../images/game/sprite-caldeirão/caldeirão-jade.png"
        );
        break;
      case "jade,jade":
        this.insideCaldeirao = []; //LIMPAR CALDEIRÃO
        this.potionComprar();
        break;
      case "alecrim,jade":
        this.insideCaldeirao = []; //LIMPAR CALDEIRÃO
        this.potionVender();
        break;
      default:
        this.insideCaldeirao = [];
        this.caldeirao.setAttribute(
          "src",
          "../../../images/game/sprite-caldeirão/caldeirão.png"
        );
        break;
    }
  }

  potionCorrer() {
    this.caldeirao.setAttribute(
      "src",
      "../../../images/game/sprite-caldeirão/caldeirão-alecrim-alecrim.png"
    );

    this.barraProgress.style.transition = "3s";
    this.barraProgress.style.width = "100%";
    setTimeout(() => {
      this.caldeirao.setAttribute(
        "src",
        "../../../images/game/sprite-caldeirão/caldeirão.png"
      );
      this.barraProgress.style.transition = "none";
      this.barraProgress.style.width = "0%";
      Armazem.add(potionsList().correr);
    }, 3000);
  }

  potionComprar() {
    this.caldeirao.setAttribute(
      "src",
      "../../../images/game/sprite-caldeirão/caldeirão-jade-jade.png"
    );

    this.barraProgress.style.transition = "5s";
    this.barraProgress.style.width = "100%";
    setTimeout(() => {
      this.caldeirao.setAttribute(
        "src",
        "../../../images/game/sprite-caldeirão/caldeirão.png"
      );
      this.barraProgress.style.transition = "none";
      this.barraProgress.style.width = "0%";
      Armazem.add(potionsList().comprar);
    }, 5000);
  }

  potionVender() {
    this.caldeirao.setAttribute(
      "src",
      "../../../images/game/sprite-caldeirão/caldeirão-alecrim-jade.png"
    );

    this.barraProgress.style.transition = "8s";
    this.barraProgress.style.width = "100%";
    setTimeout(() => {
      this.caldeirao.setAttribute(
        "src",
        "../../../images/game/sprite-caldeirão/caldeirão.png"
      );
      this.barraProgress.style.transition = "none";
      this.barraProgress.style.width = "0%";
      Armazem.add(potionsList().vender);
    }, 8000);
  }
}
