function getURLParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
function loadPage(index){
    const contentDiv = document.getElementById("content");
    if(index===2){
        contentDiv.innerHTML= `
            <h2>Palavras Cruzadas</h2>
            <div class="tabela">
                <table>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="1"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="2"><input class="inpt" type="text"></input></td>
                    <td id="3"><input class="inpt" type="text"></input></td>
                    <td id="4"><input class="inpt" type="text"></input></td>
                    <td id="5"><input class="inpt" type="text"></input></td>
                    <td id="6"><input class="inpt" type="text"></input></td>
                    <td id="7"><input class="inpt" type="text"></input></td>
                    <td id="8"><input class="inpt" type="text"></input></td>
                    <td class="grey"></td>
                    <td id="9"><input class="inpt" type="text"></input></td>
                    <td id="10"><input class="inpt" type="text"></input></td>
                    <td id="11"><input class="inpt" type="text"></input></td>
                    <td id="12"><input class="inpt" type="text"></input></td>
                    <td id="13"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="14"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="15"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="16"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="17"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="18"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="19"><input class="inpt" type="text"></input></td>
                    <td id="20"><input class="inpt" type="text"></input></td>
                    <td id="21"><input class="inpt" type="text"></input></td>
                    <td id="22"><input class="inpt" type="text"></input></td>
                    <td id="23"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="grey"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="grey"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="24"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="25"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="26"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="27"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="28"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="29"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="30"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="31"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="32"><input class="inpt" type="text"></input></td>
                    <td id="33"><input class="inpt" type="text"></input></td>
                    <td id="34"><input class="inpt" type="text"></input></td>
                    <td id="35"><input class="inpt" type="text"></input></td>
                    <td id="36"><input class="inpt" type="text"></input></td>
                    <td id="37"><input class="inpt" type="text"></input></td>
                    <td id="38"><input class="inpt" type="text"></input></td>
                    <td id="39"><input class="inpt" type="text"></input></td>
                    <td id="40"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="41"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="42"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="43"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="44"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="grey"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="45"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="46"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="grey"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="47"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td id="48"><input class="inpt" type="text"></input></td>
                    <td id="49"><input class="inpt" type="text"></input></td>
                    <td id="50"><input class="inpt" type="text"></input></td>
                    <td id="51"><input class="inpt" type="text"></input></td>
                    <td class="grey"></td>
                    <td id="52"><input class="inpt" type="text"></input></td>
                    <td id="53"><input class="inpt" type="text"></input></td>
                    <td id="54"><input class="inpt" type="text"></input></td>
                    <td id="55"><input class="inpt" type="text"></input></td>
                    <td id="56"><input class="inpt" type="text"></input></td>
                    <td id="57"><input class="inpt" type="text"></input></td>
                    <td id="58"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="59"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="60"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="61"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="62"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="63"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="64"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="65"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="66"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="67"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="68"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="69"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td id="70"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td id="71"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="72"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="73"><input class="inpt" type="text"></input></td>
                    <td id="74"><input class="inpt" type="text"></input></td>
                    <td id="75"><input class="inpt" type="text"></input></td>
                    <td id="76"><input class="inpt" type="text"></input></td>
                    <td id="77"><input class="inpt" type="text"></input></td>
                    <td class="grey"></td>
                    <td id="78"><input class="inpt" type="text"></input></td>
                    <td id="79"><input class="inpt" type="text"></input></td>
                    <td id="80"><input class="inpt" type="text"></input></td>
                    <td id="81"><input class="inpt" type="text"></input></td>
                    <td id="82"><input class="inpt" type="text"></input></td>
                    <td id="83"><input class="inpt" type="text"></input></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="84"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="85"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="86"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="87"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="88"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="grey"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="89"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="90"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="91"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td id="92"><input class="inpt" type="text"></input></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <td colspan="19"><button id="limparBtn">LIMPAR</button></td>
                </tr>
                </table>
            </div>
            <div class="clues">
                <div class="linhas">
                    <h3>Linhas:</h3>
                    <ol>
                    <li>Música de Adam Melchor Sobre aproveitar momentos simples</li>
                    <li>Sétima música do álbum "folklore" de Taylor Swift</li>
                    <li>Nome da banda de Phoebe Bridgers, Lucy Dacus e Julien Baker</li>
                    <li>Nome do álbum que Gracie Abrams lançou em 2023</li>
                    <li>Nome do último álbum de Noah Kahan</li>
                    </ol>
                </div>
                <div class="colunas">
                    <h3>Colunas:</h3>
                    <ol>
                    <li>Terra Natal de Noah Kahan</li>
                    <li>Pássaro que consegue voar durante 6 anos sem pousar, usado para descrever Taylor Swift numa das suas músicas.</li>
                    <li>Título da música de colaboração entre Gracie Abrams e Taylor Swift.</li>
                    <li>Álbum de Adam Melchor que tem a música "Touch and Go"</li>
                    <li>Música com uma versão de 10 minutos numa das regravações de Taylor Swift</li>
                    <li>Música de Colaboração entre Phoebe Bridgers e Paul McCartney</li>
                    </ol>
                </div>
            </div>
            
        `
    }
}
if (idextra !== null) {
    loadPage(parseInt(idextra, 10)); // Converte para número
}
//---------------------------SCRIPT PARA PALAVRAS CRUZADAS------------------------------------

function validarPalavra(ids, Esperada) {
    let currentWord = "";
    for (let id of ids) {
        const input = document.getElementById(id).getElementsByTagName("input")[0];
        currentWord += input.value;
    }
    // Verifica se a palavra atual é igual à esperada
    if(Esperada.length==currentWord.length){
        if (currentWord.toUpperCase() == Esperada.toUpperCase()) {
        for (let id of ids) {
            document.getElementById(id).getElementsByTagName("input")[0].style.color = "green";
        }
    } else {
        for (let id of ids) {
            document.getElementById(id).getElementsByTagName("input")[0].style.color = "red";
        }
    }}
    
}



var inputs = document.querySelectorAll("input.inpt");

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function() {
        if(this.value.length>1){
            this.value=this.value[0];       //Assim já não permite mais do que um caracter
        }
        //-------------------------------LINHAS----------------------------------
        validarPalavra(["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"], "TURNHAMGREEN");
        validarPalavra(["19", "20", "21", "22", "23"], "SEVEN");
        validarPalavra(["32", "33", "34", "35", "36", "37", "38", "39", "40"], "BOYGENIUS");
        validarPalavra(["48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"], "GOODRIDANCE");
        validarPalavra(["73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83"], "STICKSEASON");
        //------------------------------COLUNAS----------------------------------
        validarPalavra(["1", "12", "15", "17", "22", "26", "30", "41", "47", "59", "64"], "SEIZETHEDAY");
        validarPalavra(["63", "68", "72", "85", "87", "88", "89", "90", "91", "92"], "ALLTOOWELL");
        validarPalavra(["6", "14", "16", "18", "25", "29", "36", "44", "56", "62", "67", "71", "75", "84", "86"], "HEREGOESNOTHING");
        validarPalavra(["70", "73"], "US");
        validarPalavra(["24", "28", "32", "43", "46", "52", "61", "66", "69"], "ALBATROSS");
        validarPalavra(["27", "31", "42", "45", "50", "60", "65"], "VERMONT");

  });
}

//limpar
document.getElementById("limparBtn").addEventListener("click", function() {
    const inputs = document.querySelectorAll("table input");
    inputs.forEach(input => {
      input.value = "";
    });
  });
