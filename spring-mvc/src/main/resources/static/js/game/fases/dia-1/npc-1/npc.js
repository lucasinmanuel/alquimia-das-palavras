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
          "Olá, ouvi dizer que você faz as pessoas recuperarem de forma permanente as palavras esquecidas. Isso é verdade?",
        user_A: "<button>Sim! De fato tenho tal talento!</button>",
      },
      {
        npc_A:
          "Perfeito! Estava ficando desesperado. O que preciso fazer para recuperar minha palavra perdida?",
        user_A:
          '<button id="A">Me descreva quando percebeu a falta da palavra.</button>' +
          '<button id="B">Primeiramente você tem que me pagar, não faço nada de graça.</button>',
      },
      {
        npc_A:
          "Eu estava negociando com um vendedor, foi quando percebi que faltava algo.",
        user_A:
          "<button>Sim, esse é um sintoma bastante comum. Conte-me mais.</button>",
        npc_B: "Ah! Tem razão, qual será o preço?",
        user_B:
          "<button>O preço vai depender da dificuldade da palavra. Me detalhe quando percebeu a falta dela.</button>",
      },
      {
        npc_A:
          "Tentava falar, mas não vinha nada a minha mente. O vendedor me disse a palavra que estava tentando lembrar, porém logo em seguida esqueci a palavra!",
        user_A:
          '<input id="palavraEsqueci" type="text" name="palavraEsqueci" autocomplete="off" />' +
          '<div id="confirmation-btn">Confirmar</div>' +
          '<div id="drop-item"><span>Usar item</span></div>',
        npc_B:
          "Bem, eu estava negociando com um vendedor, foi quando me dei conta que esqueci a palavra.",
        user_B:
          "<button>Entendo, recebo vários clientes na mesma situação. Vai custar apenas 5 moedas de bronze.</button>",
      },
      {
        npc_A:
          "Exatamente! Essa é a palavr... Não acredito, esqueci novamente!",
        user_A:
          "<button>Imaginei que seria essa a palavra. Espere até eu preparar a poção.</button>",
        npc_B: "Ufa! Achei que iria sair mais caro.",
        user_B:
          '<input id="palavraEsqueci" type="text" name="palavraEsqueci" autocomplete="off" />' +
          '<div id="confirmation-btn">Confirmar</div>' +
          '<div id="drop-item"><span>Usar item</span></div>',
      },
      {
        npc_A: "Tá bom, vou ficar esperando.",
        user_A:
          '<div id="drop-potion"><span>Entrege a poção comprar</span></div>',
        npc_B:
          "Exatamente! Essa é a palavr... Não acredito, esqueci novamente!",
        user_B:
          "<button>Imaginei que seria essa a palavra. Espere até eu preparar a poção.</button>",
      },
      {
        npc_A: "Obrigado! Finalmente lembrei!",
        user_A: "<button>Isto custou 5 moedas de bronze.</button>",
        npc_B: "Tá bom, vou ficar esperando.",
        user_B: '<div id="drop-potion"><span>Entregue a poção</span></div>',
      },
      {
        npc_B: "Obrigado! Finalmente lembrei!",
        user_B: "<button>Isto custou 5 moedas de bronze.</button>",
      },
      {},
    ],
  };
  return npc;
}
