import UsarItens from "./UsarItens.js";

export default class Npc {
  load(npc, day, index_npc) {
    let areaFases = document.getElementById("area-fases");
    this.day = day;
    this.index_npc = index_npc;
    areaFases.innerHTML = `
        <img id="npc" src="../../../images/game/npcs/${npc}" draggable="false" />
        <div id="caixa-dialogo">
            <p></p>
            <div id="caixa-escolhas"></div>
            <audio id="audio-npc"></audio>
        </div>
    `;
  }

  checkNpc() {
    let spriteNPC = document.getElementById("npc");
    if (spriteNPC === null) {
      return true;
    } else {
      return false;
    }
  }

  start(palavraEsquecida, tipoMoeda, qtdMoeda, falasNpc) {
    let day = this.day;
    let index_npc = this.index_npc;
    let spriteNPC = document.getElementById("npc");
    let delayNPC = 1000;
    setTimeout(() => {
      spriteNPC.style.left = "22%"; //AÇÃO DE ENTRADA DO NPC
    }, delayNPC);

    let caixaDialogo = document.querySelector("#caixa-dialogo p");
    let caixaEscolhas = document.getElementById("caixa-escolhas");

    let indexLetra = 0;
    let indexDialogo = 0;
    let tipoEscolha = "A";
    let controlAudio_fala = true;
    let IndexAudio_fala = 1;

    let delayCaixaDialogo = 2000 + delayNPC;

    setTimeout(() => {
      caixaDialogo.parentElement.style.opacity = "1";
      digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
    }, delayCaixaDialogo);

    function digitarDialogo(iLetra, iDialogo, pTipoEscolha) {
      let dialogoNPC;
      let escolhasUser;
      if (pTipoEscolha === "A") {
        dialogoNPC = falasNpc[iDialogo].npc_A;
        escolhasUser = falasNpc[iDialogo].user_A;
      }
      if (pTipoEscolha === "B") {
        dialogoNPC = falasNpc[iDialogo].npc_B;
        escolhasUser = falasNpc[iDialogo].user_B;
      }

      if (dialogoNPC != undefined) {
        //ADICIONAR AS LETRAS NA CAIXA DE DIALOGO
        caixaDialogo.innerHTML += dialogoNPC.charAt(iLetra);

        //INICIANDO AUDIO
        if (controlAudio_fala) {
          controlAudio_fala = false;
          let audioNpc = document.getElementById("audio-npc");
          audioNpc.innerHTML = `
            <source src="../../../audio/fases/dia-${day}/npc-${index_npc}/npc-${index_npc}-fala-${pTipoEscolha.toLowerCase()}-${IndexAudio_fala}.mp3" type="audio/mp3">
          `;
          audioNpc.autoplay = true;
          audioNpc.load();
          IndexAudio_fala++;
        }

        if (iLetra < dialogoNPC.length) {
          setTimeout(() => {
            indexLetra++;
            digitarDialogo(indexLetra, iDialogo, pTipoEscolha);
          }, 50);
        } else {
          caixaEscolhas.innerHTML = escolhasUser;

          let potion = "potion-" + palavraEsquecida;

          //CLIQUE NAS ESCOLHAS
          let btnEscolhas = document.querySelectorAll("#caixa-escolhas button");
          clickButtons(btnEscolhas);

          //DIGITE A PALAVRA ESQUECIDA
          let inputEscolha = document.getElementById("palavraEsqueci");
          inputPalavraEsquecida(inputEscolha, palavraEsquecida);

          //ENTREGUE A POÇÃO CORRETA PARA O CLIENTE
          let dropPotion = document.getElementById("drop-potion");
          areaDropPotion(dropPotion, potion);

          //ITEM PARA AJUDA NA IDENTIFICAÇÃO DA PALAVRA
          if (inputEscolha != null) {
            let usarItens = new UsarItens(palavraEsquecida);

            let dropItem = document.getElementById("drop-item");
            usarItens.dropItem(dropItem);
          }

          controlAudio_fala = true;
        }
      } else {
        //ANIMAÇÃO DE SÁIDA DO NPC
        caixaDialogo.parentElement.style.opacity = "0";
        spriteNPC.style.transform = "scaleX(-1)";

        let areaFases = document.getElementById("area-fases");
        setTimeout(() => {
          spriteNPC.style.left = "-50%";
          setTimeout(() => {
            areaFases.innerHTML = "";
          }, 1000);
        }, 2000);

        //DEFINE A QUANTIDADE DE MOEDAS GANHAS
        let moeda = document.querySelector(`#qtd-moeda-${tipoMoeda} span`);
        moeda.innerHTML = Number(moeda.innerHTML) + qtdMoeda;
        sessionStorage.setItem(`moeda_${tipoMoeda}`, Number(moeda.innerHTML));
      }
    }

    function clickButtons(buttons) {
      buttons.forEach((value, index) => {
        buttons[index].addEventListener("click", () => {
          reset();
          switch (value.id) {
            case "A":
              tipoEscolha = "A";
              digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
              break;
            case "B":
              tipoEscolha = "B";
              digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
              break;
            case "":
              digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
              break;
          }
        });
      });
    }

    function inputPalavraEsquecida(input, palavraEsquecida) {
      if (input != null) {
        const confirmationnBtn = document.getElementById("confirmation-btn");
        input.placeholder =
          "Qual é a palavra? " + palavraEsquecida.replaceAll(/[a-zA-Z]/g, "*");

        confirmationnBtn.addEventListener("click", () => {
          if (input.value.toLowerCase() === palavraEsquecida) {
            reset();
            digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
          } else {
            input.style.border = "2px solid red";
          }
        });
        input.addEventListener("keyup", (e) => {
          input.style.border = "2px solid #25161b";
          if (e.key === "Enter") {
            if (input.value.toLowerCase() === palavraEsquecida) {
              reset();
              digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
            } else {
              input.style.border = "2px solid red";
            }
          }
        });
      }
    }

    function areaDropPotion(areaDrop, potion) {
      let dragElement = null;
      document.body.addEventListener("dragstart", function (event) {
        dragElement = event.target;
      });

      if (areaDrop != null) {
        areaDrop.addEventListener("drop", () => {
          if (dragElement.id === potion) {
            reset();
            digitarDialogo(indexLetra, indexDialogo, tipoEscolha);
          }
        });
      }
    }

    function reset() {
      caixaDialogo.innerHTML = "";
      caixaEscolhas.innerHTML = "";
      indexLetra = 0;
      indexDialogo++;
    }
  }
}
