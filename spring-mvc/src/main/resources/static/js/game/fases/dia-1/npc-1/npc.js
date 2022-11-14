export default function npc() {
  let npc = {
    info: {
      img_npc: "npc-1.png",
      palavraOculta: "comprar",
      tipoMoeda: "bronze",
      qtdMoeda: 5,
    },
    falas: [
      {
        npc_A:
          "Olá! Eu soube que você é capaz de fazer as pessoas se lembrarem de forma permanente das palavras esquecidas. Isso é verdade?",
        user_A: "<button>Sim! Eu tenho esse dom!</button>",
      },

      {
        npc_A:
          "Excelente! Estou desesperado. O que devo fazer para me lembrar e não mais esquecer a palavra perdida?",
        user_A:
          '<button id="A">O preço vai depender da dificuldade do serviço. Quando você percebeu o sumiço da palavra?</button>' +
          '<button id="B">Antes, me pague. Eu não trabalho de graça.</button>',
      },
      {
        npc_A:
          "Eu estava negociando uma compra e percebi que não me lembrava de algo.",
        user_A:
          "<button>Sim, a sensação de esquecimento é um sintoma comum. Conte-me mais.</button>",
        npc_B: "Ah! Tem razão, qual é o preço do seu trabalho?",
        user_B: "<button>Vai custar 5 moedas de bronze.</button>",
      },

      {
        npc_A:
          "Eu tentava falar, mas nada surgia em minha mente. O vendedor me disse a palavra, porém logo em seguida eu a esqueci.",

        user_A:
          '<input id="palavraEsqueci" type="text" name="palavraEsqueci" autocomplete="off" />' +
          '<div id="confirmation-btn">Confirmar</div>' +
          '<div id="drop-item"><span>Usar item</span></div>',

        npc_B: "Ufa! Achei que iria sair mais caro. Bem, irei pagar!",

        user_B:
          "<button>Então me detalhe o momento que percebeu a falta da palavra.</button>",
      },

      {
        npc_A:
          "Exatamente! Essa é a palavr... Não acredito, esqueci novamente!",

        user_A:
          "<button>Imaginei que seria essa a palavra. Espere até eu prepare a poção.</button>",

        npc_B:
          "Eu estava negociando uma compra e percebi que não me lembrava de algo.",

        user_B:
          '<input id="palavraEsqueci" type="text" name="palavraEsqueci" autocomplete="off" />' +
          '<div id="confirmation-btn">Confirmar</div>' +
          '<div id="drop-item"><span>Usar item</span></div>',
      },

      {
        npc_A: "Está bem, estou aguardando.",

        user_A:
          '<div id="drop-potion"><span>Entrege a poção comprar</span></div>',

        npc_B:
          "Exatamente! Essa é a palavr... Não acredito, esqueci novamente!",

        user_B:
          "<button>Imaginei que seria essa a palavra. Espere até eu preparar a poção.</button>",
      },

      {
        npc_A: "Obrigado! Finalmente me lembrei!",

        user_A: "<button>Isto custou 5 moedas de bronze.</button>",

        npc_B: "Está bem, estou aguardando.",

        user_B: '<div id="drop-potion"><span>Entregue a poção</span></div>',
      },

      {
        npc_B: "Obrigado! Finalmente me lembrei!",

        user_B: "<button>Isto custou 5 moedas de bronze.</button>",
      },
      {},
    ],
  };
  return npc;
}
