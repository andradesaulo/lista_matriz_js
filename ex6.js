var mat = [];

const l = 5;
const c = 3;

for(var i=0;i<l;i++){
    mat[i] = [];
}
function cria(){
    var tabela = "<table>";
    for(var i = 0; i < l; i++){
        tabela += "<tr>";
        for(var j = 0; j < c; j++){
            tabela +=
                `<td>
                    <p>
                        <input type="number" id="l${i}c${j}">
                    </p>
                </td>`;
        }
        tabela += "</tr>";
    }
    document.body.innerHTML += tabela;
}
var vetorSoma = [];
function calcula(){
    var soma = 0;
    for(j=0;j<c;j++){
        soma = 0;
        for(i=0;i<l;i++){
           mat[i][j] = Number(document.getElementById("l"+i+"c"+j).value);
            soma = mat[i][j] + soma;
        }
        vetorSoma.push(soma);
    }
    multi();
}
function multi(){
    var tabela = "<table>";
    for(var i = 0; i < l; i++){
        tabela += "<tr>";
        for(var j = 0; j < c; j++){
            tabela +=
                `<td>
                    <p>
                        ${mat[i][j]*vetorSoma[j]}
                    </p>
                </td>`;
        }
        tabela += "</tr>";
    }
    document.body.innerHTML += tabela;
}