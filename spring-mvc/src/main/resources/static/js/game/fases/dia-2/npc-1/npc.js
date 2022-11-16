export default function npc() {
  let npc = {
    info: {
      img_npc: "npc-3.png",
      palavraOculta: "vender",
      tipoMoeda: "prata",
      qtdMoeda: 1,
    },
    falas: [
      {
        npc_A:
          "Olá! Você consegue fazer eu recuperar minha palavra perdida?",
        user_A: "<button>Sim! Preciso que você me diga quando percebeu a falta da palavra.</button>",
      },
      {
        npc_A:
          "Eu trabalho em uma floricultura e hoje pela manhã ao atender um cliente, percebi a falta da palavra.",
        user_A:
          '<input id="palavraEsqueci" type="text" name="palavraEsqueci" autocomplete="off" />' +
            '<div id="confirmation-btn">Confirmar</div>' +
            '<div id="drop-item"><span>Usar item</span></div>',
      },
      {
        npc_A:
          "Era essa a palavra! Preciso recuperar ela depressa, tenho que voltar logo a trabalhar.",
        user_A:
          "<button>Vou iniciar o preparo da poção.</button>",
      },
      {
        npc_A: "Está bem!",
        user_A:
          '<div id="drop-potion"><span>Entrege a poção vender</span></div>',
      },
      {
        npc_A: "Finalmente! Agora vou poder abrir minha floricultura.",
        user_A: "<button>O preço da poção é de 1 moeda de prata.</button>",
      },
      {},
    ],
  };
  return npc;
}
