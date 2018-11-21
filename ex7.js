var mat = [];

const l1 = 4;
const c1 = 6;
const l2 = 6;
const c2 = 4;
var soma = 0;
function cria(){
    var tabela = "<table>";
    for(var i = 0; i < l1; i++){
        tabela += "<tr>";
        for(var j = 0; j < c1; j++){
            tabela += 
                `<td>
                    <p>
                        <input type="number" id="l1${i}c1${j}">
                    </p>
                </td>`;
        }
        tabela += "</tr>";
    }
    tabela += "</table>" 
    tabela += "<table>";
    for(var i = 0; i < l2; i++){
        tabela += "<tr>";
        for(var j = 0; j < c2; j++){
            tabela +=
                `<td>
                    <p>
                        <input type="number" id="l2${i}c2${j}">
                    </p>
                </td>`;
        }
        tabela += "</tr>";
    }
    tabela +="</table>";
    document.body.innerHTML += tabela;
    
}
var somaMatriz = [];
soma = 0;
function calcula(){
    soma = 0;
   for(var i = 0;i < l1;i++){
       soma = 0;
       for(var j = 0; j < c2;j++){
           soma = matriz[i][j] + soma;
       }
       somaMatriz.push(soma);
   }

    tabela += "<table>";
    for(var i = 0; i < l1; i++){
        tabela += "<tr>";
        for(var j = 0; j < c2; j++){
            tabela +=
                `<td>
                    <p>
                        
                    </p>
                </td>`;
        }
        tabela += "</tr>";
    }
    tabela +="</table>";
    document.body.innerHTML += tabela;
}

document.getElementById("resultado").innerHTML =  soma;


