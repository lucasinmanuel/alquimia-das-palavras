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
  // static setSave() {
  //   const day = sessionStorage.getItem("day");
  //   const whichNpc = sessionStorage.getItem("whichNpc");
  //   const copperCoin = sessionStorage.getItem("moeda_bronze");
  //   const silverCoin = sessionStorage.getItem("moeda_prata");
  //   const goldCoin = sessionStorage.getItem("moeda_ouro");
  //   const store = document.querySelectorAll("#armazem-itens img");
  //   const potionName = document.querySelectorAll(".receita-title b");
  //   const ingredientes = document.querySelectorAll(".ingredientes img");
  //   const prepTime = document.querySelectorAll(".prepTime span");
  //   let storeItens = [];
  //   store.forEach((value, i) => {
  //     storeItens[i] = {
  //       id: value.id,
  //       title: value.title,
  //       alt: value.alt,
  //       src: value.src,
  //     };
  //   });
  //   let recipes = [];
  //   potionName.forEach((value, i) => {
  //     recipes[i] = {
  //       name: value.innerHTML,
  //       ingredientes: {
  //         id: ingredientes[i].id,
  //         title: ingredientes[i].title,
  //         alt: ingredientes[i].alt,
  //         src: ingredientes[i].src,
  //       },
  //       tempoPreparo: prepTime[i].innerHTML,
  //     };
  //   });
  //   localStorage.setItem(
  //     "save",
  //     `{
  //       "day":${day},
  //       "whichNpc": ${whichNpc},
  //       "coins":{"copper": ${copperCoin}, "silver": ${silverCoin}, "gold": ${goldCoin}},
  //       "store": ${JSON.stringify([...storeItens])},
  //       "recipes": ${JSON.stringify([...recipes])}
  //     }`
  //   );
  // }
}
