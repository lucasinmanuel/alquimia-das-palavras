export default function npc() {
  let npc = {
    info: {
      img_npc: "npc-2.png",
      palavraOculta: "correr",
      tipoMoeda: "bronze",
      qtdMoeda: 3,
    },
    falas: [
      {
        npc_A:
          "Bom dia! Ouvi falar que você faz as pessoas recuperarem as palavras perdidas de maneira definitiva, isso é verdade?",
        user_A:
          "<button>Claro que sim! Me descreva a situação do esquecimento.</button>",
      },
      {
        npc_A:
          "Eu estava na varanda da minha casa bebendo meu chá, tudo corria bem, até aqueles pirralhos passaram fazendo um alvoroço. Você tem ideia do quão irritante isso é?",
        user_A:
          "<button>Realmente, é uma lástima. No entanto! Poderia focar no que é importante na história?</button>",
      },
      {
        npc_A:
          "Ah! Bem... Ao ver aquelas crianças, gritei! Mandando elas pararem de fazer barulho e... Não consigo lembrar, queria que elas parassem de se mover pra lá e pra cá.",
        user_A:
          '<input id="palavraEsqueci" type="text" name="palavraEsqueci" autocomplete="off" />' +
          '<div id="confirmation-btn">Confirmar</div>' +
          '<div id="drop-item"><span>Usar item</span></div>',
      },
      {
        npc_A:
          "Isso a palavra é cor... Ah! Esqueci novamente. Essa sensação de lembrar da palavra e logo em seguida esquecer é terrível, por favor me ajude!",
        user_A:
          "<button>Não precisa se preocupar, só peço que espere o preparo da poção.</button>",
      },
      {
        npc_A: "Perfeito! Vou ficar no aguardo.",
        user_A:
          '<div id="drop-potion"><span>Entrege a poção correr</span></div>',
      },
      {
        npc_A: "Era isso, a palavra é correr! Muito obrigado!",
        user_A: "<button>De nada. Isto custou 3 moedas de bronze.</button>",
      },
      {},
    ],
  };
  return npc;
}
