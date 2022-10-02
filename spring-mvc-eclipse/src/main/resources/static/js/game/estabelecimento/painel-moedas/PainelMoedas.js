export default class PainelMoedas {
  static load() {
    var painelMoedas = document.getElementById("painel-moedas");
    painelMoedas.innerHTML = `
        
            <div id="qtd-moeda-bronze">
                <img width="80px" src="images/game/icons/moeda-bronze.png" title="Moeda de bronze" />
                <span>0</span>
            </div>
            <div id="qtd-moeda-prata">
                <img width="80px" src="images/game/icons/moeda-prata.png" title="Moeda de prata" />
                <span>0</span>
            </div>
            <div id="qtd-moeda-ouro">
                <img width="80px" src="images/game/icons/moeda-ouro.png" title="Moeda de ouro" />
                <span>0</span>
            </div>

        `;
  }

  static setMoedaBronze(qtd) {
    document.querySelector("#qtd-moeda-bronze span").innerHTML = qtd;
    sessionStorage.setItem("moeda_bronze", qtd);
  }
  static setMoedaPrata(qtd) {
    document.querySelector("#qtd-moeda-prata span").innerHTML = qtd;
    sessionStorage.setItem("moeda_prata", qtd);
  }
  static setMoedaOuro(qtd) {
    document.querySelector("#qtd-moeda-ouro span").innerHTML = qtd;
    sessionStorage.setItem("moeda_ouro", qtd);
  }
}
