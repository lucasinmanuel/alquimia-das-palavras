import ingredientes from "../../listas/ingredientes.js";

export default class Receitas {
  static potionCorrer() {
    return {
      name: "Correr",
      valor: "3 moedas de bronze",
      ingredientes: [ingredientes().alecrim, ingredientes().alecrim],
      tempoPreparo: "3",
    };
  }
  static potionComprar() {
    return {
      name: "Comprar",
      valor: "5 moedas de bronze",
      ingredientes: [ingredientes().jade, ingredientes().jade],
      tempoPreparo: "5",
    };
  }
}
