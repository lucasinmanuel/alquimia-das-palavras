export default function falas() {
  var falas = [
    {
      npc_A: "1º fala do NPC na rota A",
      user_A: "<button>1º fala do usuário na rota A</button>",
    },
    {
      npc_A: "2º fala do NPC na rota A",
      user_A:
        '<button id="A">Escolha seguir a rota A</button>' +
        '<button id="B">Escolha seguir a rota B</button>',
    },
    {
      npc_A: "3º fala do NPC no rota A",
      user_A: "<button>3º fala do usuário na rota A</button>",
      npc_B: "3º fala do NPC no rota B",
      user_B: "<button>3º fala do usuário na rota B</button>",
    },
    {
      npc_A: "4º fala do NPC na rota A",
      user_A:
        /*Input para escrever a palavra esquecida na rota A*/
        '<input id="palavraEsqueci" type="text" name="palavraEsqueci" autocomplete="off" />' +
        /*Área para dropar item de ajuda na rota A*/
        '<div id="drop-item"><span>Usar item</span></div>',
      npc_B: "4º fala do NPC na rota B",
      user_B: "<button>4º fala do usuário na rota B</button>",
    },
    {
      npc_A: "5º fala do NPC na rota A",
      user_A: "<button>5º fala do usuário na rota A</button>",
      npc_B: "5º fala do NPC na rota B",
      user_B:
        /*Input para escrever a palavra esquecida na rota B*/
        '<input id="palavraEsqueci" type="text" name="palavraEsqueci" autocomplete="off" />' +
        /*Área para dropar item de ajuda na rota B*/
        '<div id="drop-item"><span>Usar item</span></div>',
    },
    {
      npc_A: "6º fala do NPC na rota A",
      /*Área para dropar poção*/
      user_A: '<div id="drop-potion"><span>Entrege a poção</span></div>',
      npc_B: "6º fala do NPC na rota B",
      user_B: "<button>6º fala do usuário na rota B</button>",
    },
    {
      npc_A: "7º fala do NPC na rota A - FIM",
      user_A: "<button>7º fala do usuário na rota B - FIM</button>",
      npc_B: "7º fala do NPC na rota B",
      user_B: '<div id="drop-potion"><span>Entregue a poção</span></div>',
    },
    {
      npc_B: "8º fala do NPC na rota B - FIM",
      user_B: "<button>8º fala do usuário na rota B - FIM</button>",
    },
    {},
  ];
  return falas;
}
