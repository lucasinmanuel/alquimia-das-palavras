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
          "Bom dia! Eu soube que você é capaz de fazer as pessoas se lembrarem de forma permanente das palavras esquecidas. Isso é verdade?",
        user_A: "<button>Sim! Me descreva a situação do esquecimento.</button>",
      },
      {
        npc_A:
          "Eu estava tomando chá na varanda da minha casa, tudo corria bem, até que aqueles pirralhos passaram fazendo um alvoroço. Você tem ideia do quão irritante isso é?",
        user_A:
          "<button>É uma lástima! No entanto, foque no que é importante na história.</button>",
      },
      {
        npc_A:
          "Ah! Bem, eu gritei mandando aquelas crianças pararem de fazer barulho e... Não consigo lembrar, queria que elas parassem de se mover pra lá e pra cá.",
        user_A:
          '<input id="palavraEsqueci" type="text" name="palavraEsqueci" autocomplete="off" />' +
          '<div id="confirmation-btn">Confirmar</div>' +
          '<div id="drop-item"><span>Usar item</span></div>',
      },
      {
        npc_A:
          "Isso a palavra é cor... Ah! Esqueci novamente. Essa sensação de lembrar da palavra e logo em seguida esquecer é terrível, por favor me ajude!",
        user_A:
          "<button>Não se preocupe, apenas aguarde o preparo da poção.</button>",
      },
      {
        npc_A: "Perfeito! Vou ficar no aguardo.",
        user_A:
          '<div id="drop-potion"><span>Entrege a poção correr</span></div>',
      },
      {
        npc_A: "Era isso, a palavra é correr! Muito obrigado!",
        user_A: "<button>Disponha! Isto custou 3 moedas de bronze.</button>",
      },
      {},
    ],
  };
  return npc;
}
