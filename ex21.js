var mat = [];
//tamanho da matriz para ser criada
const l = 5;
const c = 5;

//*=====Função para criar uma tabela ao carregar o script js====================
function criaTabela(){
    var tabela = "<table>";
    for(var i=0;i<5;i++){
        tabela += "<tr>";
        for(var j=0;j<5;j++){
            tabela += 
                `<td>
                    <p>
                        <input type="number" id="l${i}c${j}">
                    </p>
                </td>`;
        }
        tabela += "</tr>";
    }
    document.getElementById("tabelaCadastrar").innerHTML = tabela;
}
//*==============================================================fim função=====

//*=====Função para inserir valores na matriz===================================
function cadastraMatriz(){
    for(var i=0;i<l;i++){
        mat[i] = [];
    } 
    for(var i=0;i<l;i++){
        for(var j=0;j<c;j++){
            var valor = document.getElementById("l"+i+"c"+j).value;
            //se o valor for vazio insere 0 na matriz
            if (valor == ""){
                mat[i][j] = 0;
            //senão insere o valor em float
            }else{
                mat[i][j] = parseFloat(valor);
            }
        }
    }
    document.getElementById("cadSucesso").innerHTML = 
        "Matriz cadastrada com sucesso!";
}
//*==============================================================fim função=====

//nova matriz para calcular os novos valores
var matCalculada = [];

//*=====Função para calcular novos valores, inserir na nova matriz e mostrá-la
//*como uma tabela html=========================================================
function calculaMatriz(){
    //como será o cálculo:
        //multiplicar cada linha da primeira matriz cadastrada
        //pelo elemento da diagonal principal da linha da mesma matriz
    for(var i=0;i<l;i++){
        matCalculada[i] = [];
    }
    var diagPrin;
    for(var i=0;i<l;i++){
        //elemento da diagonal principal
        diagPrin = mat[i][i];
        for(var j=0;j<c;j++){
            //multiplicando a linha
            matCalculada[i][j] = mat[i][j] * diagPrin;
        }
    }
    //criando uma tabela
    var tabela = "<table>";
    for(var i=0;i<l;i++){
        tabela += "<tr>";
        for(var j=0;j<c;j++){
            tabela += 
                `<td>
                    <p>${matCalculada[i][j]}</p>
                </td>`;
        }
        tabela += "</tr>"; 
    }
    tabela += "</table>";
    //inserindo a tabela no html
    document.getElementById("tabelaCalculada").innerHTML = tabela;
}

//chamando as funções e criando event listeners nos botões do html
criaTabela();
cadastra.addEventListener('click', cadastraMatriz);
calcula.addEventListener('click', calculaMatriz);
