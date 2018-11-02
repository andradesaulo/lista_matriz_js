var mat = [];
//tamanho da matriz
const l = 7;
const c = 10;
//alocando memória para a matriz
for(var i=0;i<l;i++){
    mat[i] = [];
}

//*=====Função para carregar a tabela no html===================================
function carregaTabela(){
    var tabela = "<table>";
    //primeiras 6 linhas com number inputs
    for(var i = 0; i < l-1; i++){
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
    //7ª linha com os totais das colunas
    tabela += "<tr>";
    for(var i = 0; i < c; i++){
        tabela +=
            `<td>
                <p id="l6c${i}">
                    0
                </p>
            </td>`;
        }
    tabela += "</tr>";
    tabela += "</table>";
    document.body.innerHTML = tabela;
}
//*==============================================================fim função=====

//*=====Função que cria event listeners para cada input. Toda vez que o valor de
//um input mudar, a soma total na última linha da coluna será atualizada através
//da função atualizaSoma========================================================
function criaListeners(){
    for(var i = 0; i < l-1; i++){
        for(var j = 0; j < c; j++){
            document.getElementById("l"+i+"c"+j).addEventListener('input', {
                handleEvent(event){
                    atualizaSoma(event);
                }
            });
        }
    }
}
//*==============================================================fim função=====

//*=====Função que atualiza a soma total da coluna==============================
function atualizaSoma(event){
    //pegando a linha e a coluna do input que mudou
    var lin = event.target.id[1];
    var col = event.target.id[3];
    //inserindo o valor desse input na matriz
    mat[lin][col] = Number(document.getElementById('l'+lin+'c'+col).value);
    var soma = 0;
    //calculando a soma total da coluna
    for(var i=0;i<l-1;i++){
        soma += Number(document.getElementById('l'+i+'c'+col).value);
    }
    //inserindo a soma total da coluna na última linha da matriz
    mat[6][col] = soma;
    //atualizando o valor no html
    document.getElementById("l6c"+col).innerHTML = soma;
}
//*==============================================================fim função=====

//*=====Função principal somente pela organização===============================
function inicia(){
    carregaTabela();
    criaListeners();
}
//*==============================================================fim função=====

inicia();