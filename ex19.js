var mat = [];
//tamanho da matriz a ser criada
const l = 7;
const c = 6;
//alocando memória para a matriz
for(var i=0;i<l;i++){
    mat[i] = [];
}

//*=====Função para criar uma tabela ao carregar o script js====================
function criaTabela(){
    var tabela = "<table>";
    for(var i=0;i<l;i++){
        tabela += "<tr>";
        for(var j=0;j<c;j++){
            tabela +=
                `<td>
                    <p>
                        <input type="number" id="l${i}c${j}">
                    </p>
                </td>`;
        }
        tabela += "</tr>";
    }
    tabela += "</table>";
    document.getElementById("tabCadastra").innerHTML = tabela;
}
//*==============================================================fim função=====

//*=====Função para inserir valores na matriz===================================
function cadastraMatriz(){
    var elem;
    for(var i=0;i<l;i++){
        for(var j=0;j<c;j++){
            elem = document.getElementById("l"+i+"c"+j).value;
            //se elem for vazio insere 0 na matriz
            if(elem == ""){
                mat[i][j] = 0;
            //senão insere o elem como int
            }else{
                mat[i][j] = parseInt(elem);
            }
        }
    }
    document.getElementById("cadSucesso").innerHTML =
        "Matriz cadastrada com sucesso!";
}
//*==============================================================fim função=====

//*=====Função para calcular e mostrar a média dos elementos das linhas pares===
function calculaMedia(){
    var soma = 0;
    var media;
    var quantElem = Math.floor(l/2)*c;
    for(var i=1;i<l;i+=2){
        for(var j=0;j<c;j++){
            soma += mat[i][j];
        }
    }
    if(isNaN(soma)){
        media = 0;
    }else{
        media = soma/quantElem;
    }
    document.getElementById("resultado").innerHTML = media;
}
//*==============================================================fim função=====
criaTabela();
cadastra.addEventListener('click', cadastraMatriz);
calcula.addEventListener('click', calculaMedia);


