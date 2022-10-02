export default class Grimoire {
  static load() {
    //CRIANDO MODAL GRIMÓRIO
    var modalGrimorio = document.getElementById("modal-grimorio");
    modalGrimorio.innerHTML = ` 
            <h1>Palavras e suas receitas</h1>  
                <div id="grimorio-pages"></div><!--grimorio-pages-->
            <button id="btn-closeGrimorio" style="position:absolute;top:0;right:0;">X</button>
        `;
  }

  static add(receita) {
    const grimorioPages = document.getElementById("grimorio-pages");
    grimorioPages.innerHTML += `
      <div class="receita">
        <div class="receita-title">
          <img draggable="false" 
            title="Poção da palavra ${receita.name.toLowerCase()}" 
            alt="Poção da palavra ${receita.name.toLowerCase()}" 
            src="images/game/poções/poção-${receita.name.toLowerCase()}.png" 
          />
          <b>${receita.name} - ${receita.valor}</b>
        </div>
        <div class="receita-info">
          <p class="ingredientes">
            <u>Ingredientes</u>:
            <span id="qtdIngrediente-${receita.name.toLowerCase()}"><span>
          </p>
          <p class="prepTime">
            <u>Tempo de preparo</u>: 
            <span>${receita.tempoPreparo}</span> segundos.
          </p>
        </div>
      </div>
    `;
    const qtdIngrediente = document.getElementById(
      "qtdIngrediente-" + receita.name.toLowerCase()
    );
    for (const i in receita.ingredientes) {
      qtdIngrediente.innerHTML += `
        <img draggable="false" 
          alt="${receita.ingredientes[i].alt}" 
          title="${receita.ingredientes[i].title}" 
          src="${receita.ingredientes[i].src}" 
        />
      `;
    }
    if (sessionStorage.getItem("recipes") != null) {
      let recipes = JSON.parse(sessionStorage.getItem("recipes"));
      recipes.push(receita);
      sessionStorage.setItem("recipes", JSON.stringify(recipes));
    } else {
      sessionStorage.setItem("recipes", `[${JSON.stringify(receita)}]`);
    }
  }

  static showOrHide(showOrHide) {
    var modalGrimorio = document.getElementById("modal-grimorio");
    var openGrimorio = document.getElementById("img-grimorio");
    if (showOrHide === "show") {
      //ALTERAR O LIVRO PARA ABERTO
      modalGrimorio.style.display = "block";
      openGrimorio.setAttribute("src", "images/game/open-grimoire.png");
    } else if (showOrHide === "hide") {
      //ALTERAR O LIVRO PARA FECHADO
      modalGrimorio.style.display = "none";
      openGrimorio.setAttribute("src", "images/game/close-grimoire.png");
    }
  }
}
