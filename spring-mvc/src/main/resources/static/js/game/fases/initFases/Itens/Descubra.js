export default class Itens {
  static inserir_modais() {
    //INSERINDO MODAL DE TUTORIAL
    const modalGeneric = document.getElementById("modal-generic");
    modalGeneric.innerHTML += `
        <div id="modal-tutorial" style="display:none;">
            <div class="scroll">
                <p>Descubra a palavra certa em 6 tentativas. A cada tentativa as palavras certas serão sinalizadas.</p>
                <div class="groupinput">
                    <!--Palavra correta "COLHO"-->
                    <div class="word-example">
                        <span class="sucess">C</span>
                        <span>A</span>
                        <span>R</span>
                        <span>T</span>
                        <span>A</span>
                    </div>
                    <div class="info-example">
                        <p>A letra <span class="sucess">C</span> faz parte da palavra e está na posição correta.</p>
                    </div>
                </div>
                <div class="groupinput">
                    <!--Palavra correta "COLHO"-->
                    <div class="word-example">
                        <span>C</span>
                        <span>O</span>
                        <span>L</span>
                        <span>H</span>
                        <span class="fail">E</span>
                    </div>
                    <div class="info-example">
                        <p>A letra <span class="fail">E</span> não faz parte da palavra.</p>
                    </div>
                </div>
                <div class="groupinput">
                    <!--Palavra correta "COLHO"-->
                    <div class="word-example">
                        <span class="other">L</span>
                        <span>E</span>
                        <span>T</span>
                        <span>R</span>
                        <span>A</span>
                    </div>
                    <div class="info-example">
                        <p>A letra <span class="other">L</span> faz parte da palavra mas não está na posição correta.
                        </p>
                    </div>
                </div>
                <p>As palavras podem possuir letras repetidas.</p>
            </div>
        </div>
    `;

    //INSERINDO MODAL DE GANHOU
    modalGeneric.innerHTML += `
        <div class="modal_ganhou" style="display:none;">
            <div class="modal-endgame">

                <h1>Parebéns 🎉</h1>
                <p>Incrivel! Você acertou a palavra.</p>
                <div class="wrapper-button">
                    <button id="close_modal_ganhou" type="button">Fechar</button>
                </div>

            </div>
        </div>
    `;

    //INSERINDO MODAL DE PERDEU
    modalGeneric.innerHTML += `
        <div class="modal_perdeu" style="display:none;">
            <div class="modal-endgame">

                <h1>Não foi dessa vez 🙁</h1>
                <p>Uma pena! As tentativas acabaram.</p>
                <div class="wrapper-button">
                    <button id="close_modal_perdeu" type="button">Fechar</button>
                </div>

            </div>
        </div>
    `;
  }

  static focar_inputs() {
    let linha_selecionada = document.getElementsByClassName("selecionado");
    for (let y = 0; y < linha_selecionada[0].childElementCount; y++) {
      //CONFIGURAÇÕES INICIAIS
      linha_selecionada[0].children[0].focus();
      linha_selecionada[0].children[0].classList.add("focus");
      linha_selecionada[0].children[y].style.backgroundColor = "transparent";
      linha_selecionada[0].children[y].removeAttribute("disabled");
    }

    //RESETA A LINHA SELECIONADA
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
      row.addEventListener("keydown", () => {
        next_row();
      });
      row.addEventListener(
        "focus",
        () => {
          next_row();
        },
        true
      );
    });

    function next_row() {
      let linhaSelecionada = document.getElementsByClassName("selecionado");

      for (let y = 0; y < linhaSelecionada[0].childElementCount; y++) {
        //FOCO AO CLICAR COM O MOUSE
        linhaSelecionada[0].children[y].addEventListener("click", () => {
          removeFocusGeral();
          linhaSelecionada[0].children[y].focus();
          linhaSelecionada[0].children[y].classList.add("focus");
        });

        linhaSelecionada[0].children[y].addEventListener("keydown", (e) => {
          //AVANÇA O FOCUS AO DIGITAR
          if (
            e.key.match(/[A-Za-zçÇ]/) &&
            e.target.value !== "" &&
            e.key !== "Backspace" &&
            e.key !== "Tab"
          ) {
            if (y < linhaSelecionada[0].childElementCount - 1) {
              removeFocusGeral();
              linhaSelecionada[0].children[y + 1].focus();
              linhaSelecionada[0].children[y + 1].classList.add("focus");
            } else {
              linhaSelecionada[0].children[y].focus();
              linhaSelecionada[0].children[y].classList.add("focus");
            }
          } else {
            e.target.value = "";
          }

          //IMPEDE O TAB DE AVANÇAR
          if (e.key === "Tab") {
            return false;
          }
        });

        //IMPEDE O TAB DE AVANÇAR
        linhaSelecionada[0].children[y].addEventListener("keyup", (e) => {
          if (e.key === "Tab") {
            linhaSelecionada[0].children[y - 1].focus();
            return false;
          }
        });

        //APAGAR VALOR NO INPUT E VOLTAR FOCUS
        linhaSelecionada[0].children[y].addEventListener("keyup", (e) => {
          if (e.key === "Backspace") {
            removeFocusGeral();

            linhaSelecionada[0].children[y].value = "";

            if (y !== 0) {
              linhaSelecionada[0].children[y - 1].focus();
              linhaSelecionada[0].children[y - 1].classList.add("focus");
            } else {
              linhaSelecionada[0].children[y].focus();
              linhaSelecionada[0].children[y].classList.add("focus");
            }
          }
        });
      }

      function removeFocusGeral() {
        for (let i = 0; i < linhaSelecionada[0].childElementCount; i++) {
          linhaSelecionada[0].children[i].classList.remove("focus");
        }
      }
    }
  }

  static validar_palavra(palavra_oculta) {
    let modalGanhou = document.querySelector(".modal_ganhou");
    let modalPerdeu = document.querySelector(".modal_perdeu");
    let close_modal_ganhou = document.getElementById("close_modal_ganhou");
    let close_modal_perdeu = document.getElementById("close_modal_perdeu");
    let linhaPerdeu = 1;

    //RESETA A LINHA SELECIONADA
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
      row.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          validar_keyup();
        }
      });
    });

    const btns_teclado = document.querySelectorAll("#teclado_virtual button");
    btns_teclado.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (e.target.value === "Enter") {
          validar_keyup();
        }
      });
    });

    function validar_keyup() {
      let linhaSelecionada = document.getElementsByClassName("selecionado");

      //DESABILITAR LINHA ATUAL
      for (let y = 0; y < linhaSelecionada[0].childElementCount; y++) {
        linhaSelecionada[0].children[y].setAttribute("disabled", "disabled");
        linhaSelecionada[0].children[y].classList.remove("focus");
      }
      if (validarPalavraStyle()) {
        //SE GANHOU
        setTimeout(() => {
          modalGanhou.style.display = "block";
        }, 500);

        close_modal_ganhou.addEventListener("click", () => {
          modalGanhou.style.display = "none";
        });
        //ADICONAR A PALAVRA NO PLACEHOLDER DO INPUT
        var inputEscolha = document.getElementById("palavraEsqueci");
        inputEscolha.placeholder = "Qual é a palavra? " + palavra_oculta;

        document.getElementById("close-modal-generic").style.display = "block";
      } else {
        if (linhaPerdeu == 6) {
          //SE FOR A ÚLTIMA TENTATIVA, TELA DE PERDEU APARECE
          setTimeout(() => {
            modalPerdeu.style.display = "block";
          }, 500);
          close_modal_perdeu.addEventListener("click", () => {
            modalPerdeu.style.display = "none";
          });
          document.getElementById("close-modal-generic").style.display =
            "block";
        } else {
          //SE ERROU PULA PARA A PRÓXIMA LINHA
          linhaSelecionada[0].nextElementSibling.classList.add("selecionado");
          linhaSelecionada[0].classList.remove("selecionado");
          for (let y = 0; y < linhaSelecionada[0].childElementCount; y++) {
            linhaSelecionada[0].children[y].style.backgroundColor =
              "transparent";
            linhaSelecionada[0].children[y].removeAttribute("disabled");
          }
          linhaSelecionada[0].children[0].focus();
          linhaSelecionada[0].children[0].classList.add("focus");
        }
        linhaPerdeu = linhaPerdeu + 1;
      }

      function validarPalavraStyle() {
        let acertou = true;

        for (let y = 0; y < linhaSelecionada[0].childElementCount; y++) {
          console.log(linhaSelecionada[0].children[y]);
          if (
            linhaSelecionada[0].children[y].value.toLowerCase() !==
            atob(linhaSelecionada[0].children[y].dataset.resposta)
          ) {
            if (linhaSelecionada[0].children[y].value !== "") {
              if (
                palavra_oculta.includes(linhaSelecionada[0].children[y].value)
              ) {
                linhaSelecionada[0].children[y].classList.add("outra");
                linhaSelecionada[0].children[y].style.backgroundColor =
                  "#d3ad69";
              } else {
                linhaSelecionada[0].children[y].classList.add("naoTem");
                linhaSelecionada[0].children[y].style.backgroundColor =
                  "#312a2c";
              }
            }
            acertou = false;
          } else {
            linhaSelecionada[0].children[y].classList.add("tem");
            linhaSelecionada[0].children[y].style.backgroundColor = "#3aa394";
          }
        }
        return acertou;
      }
    }
  }
}
