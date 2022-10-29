import ingredientes from "../listas/ingredientes.js";
import itens from "../listas/itens.js";
import Receitas from "../estabelecimento/modal-grimório/Receitas.js";

export default class Save {
  // static getSave() {
  //   let save = {
  //     day: 1,
  //     whichNpc: 1,
  //     coins: { copper: 0, silver: 0, gold: 0 },
  //     store: [
  //       ingredientes().alecrim,
  //       ingredientes().jade,
  //       itens().revelador_simples,
  //     ],
  //     recipes: [Receitas.potionComprar(), Receitas.potionCorrer()],
  //   };
  //   if (localStorage.getItem("save") !== null) {
  //     save = JSON.parse(localStorage.getItem("save"));
  //   }
  //   return save;
  // }
  static setSave() {
    const day = sessionStorage.getItem("dia");
    const whichNpc = sessionStorage.getItem("npc");
    const copperCoin = sessionStorage.getItem("moeda_bronze");
    const silverCoin = sessionStorage.getItem("moeda_prata");
    const goldCoin = sessionStorage.getItem("moeda_ouro");
    const store = document.querySelectorAll("#armazem-itens img");
    const ingredientes = document.querySelectorAll(".ingredientes img");
    const prepTime = document.querySelectorAll(".prepTime span");
    let storeItens = [];
    store.forEach((value, i) => {
      storeItens[i] = {
        id: value.id,
        title: value.title,
        alt: value.alt,
        src: value.src,
      };
    });
    let recipes = [];
    ingredientes.forEach((value, i) => {
      recipes[i] = {
        name: value.innerHTML.split("-")[0].replace(" ", ""),
        valor: value.innerHTML.split("-")[1].replace(" ", ""),
        ingredientes: [
          {
            id: ingredientes[i].id,
            title: ingredientes[i].title,
            alt: ingredientes[i].alt,
            src: ingredientes[i].src,
          },
        ],
        tempoPreparo: prepTime[i].innerHTML,
      };
    });
    console.log(storeItens);
    fetch("http://localhost:8080/pages/game/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Number(sessionStorage.getItem("id")),
        day: day,
        whichNpc: whichNpc,
        copper_coin: copperCoin,
        silver_coin: silverCoin,
        gold_coin: goldCoin,
        store: [...storeItens],
        recipes: [...recipes],
      }),
    })
      .then((resonse) => resonse.json())
      .then((json) => {
        console.log(json);
      });
  }
}
