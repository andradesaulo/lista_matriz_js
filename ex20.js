var mat = [];
//tamanho da matriz para ser criada
const l = 5;
const c = 5;
//alocando memória para a matriz
for(var i=0;i<l;i++){
    mat[i] = [];
}

//*=====Função para criar uma tabela ao carregar o script js=====================
function criaTabCadastro(){
    var tabela = "<table>";
    for(var i=0;i<l;i++){
        tabela += "<tr>";
        for(var j=0;j<c;j++){
            tabela +=
                `<td>
                    <p>
                        <input type="number" id="l${i}c${j}" step="0.01">
                    </p>
                </td>`;
        }
        tabela += "</tr>"
    }
    tabela += "</table>"
    document.getElementById("tabCadastro").innerHTML = tabela;
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
            //senão insere o elem em float
            }else{
                mat[i][j] = parseFloat(elem);
            }
        }
    }
    document.getElementById("cadSucesso").innerHTML =
        "Matriz cadastrada com sucesso!"
}
//*==============================================================fim função=====

//*=====Função para achar a posição do maior elemento da matriz=================
function achaMaior(){
    if(mat[0][0] == ""){
        var maior = 0
    }else{
        maior = mat[0][0];
    }
    for(var i=0;i<l;i++){
        for(var j=0;j<c;j++){
            //se o elemento for maior 
            //que a variável maior
            //ele passa a ser o maior
            if(mat[i][j] > maior){
                maior = mat[i][j];
            }
        }
    }
    return maior;
}
//*==============================================================fim função=====

//nova matriz com o resultado dos cálculos
var matResult = [];
//alocando memória
for(var i=0;i<l;i++){
    matResult[i] = [];
}

//*Função para calcular os novos valores, inserir na matResult e mostrá-la como
//uma tabela html===============================================================
function calculaMat(){
    //como será o cálculo:
        //achar o maior valor da matriz,
        //multiplicar o elemento da diagonal principal da linha
        //pelo maior valor
    //achando o maior valor
    var maior = achaMaior();
    //multiplicando o elem da diag principal da linha
    for(var i=0;i<l;i++){
        for(var j=0;j<c;j++){
            if((mat[i][j] == undefined)||(mat[i][j] == NaN)){
                matResult[i][j] = 0;
            }
            else if(i==j){
                matResult[i][j] = (mat[i][j] * maior);
            }
            else{
                matResult[i][j] = mat[i][j];
            }
        }
    }
    var tabela = "<table>";
    for(var i=0;i<l;i++){
        tabela += "<tr>";
        for(var j=0;j<c;j++){
            tabela +=
            `<td>
                <p>${matResult[i][j]}</p>
            </td>`
        }
        tabela += "</tr>";
    }
    tabela += "</table>"
    document.getElementById("tabCalculada").innerHTML = tabela;
}
//*==============================================================fim funcao=====

//chamando as funções e criando event listeners nos botões do html
criaTabCadastro();
document.getElementById("cadastra").addEventListener('click', cadastraMatriz);
document.getElementById("calcula").addEventListener('click', calculaMat);