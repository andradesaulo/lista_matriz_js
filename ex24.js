var elementos = []

//======================================
//Função para criar e preencher a matriz
//======================================
function criaMatriz(){
    var c; var l;
    //criando a matriz
    for(l=0;l<4;l++){
        elementos[l] = [];
    }
    //-----
    //valores da página html
    var elemsHtml = document.querySelectorAll("table input");
    //-----
    //preenchendo a matriz
    var i = 0;
    for(l=0;l<4;l++){
        for(c=0;c<5;c++){
            elementos[l][c] = parseInt(elemsHtml[i].value);
            i++
        }
    }
    //-----
    //deixando a seção "secaoInfo" visível
    document.getElementById("secaoInfo").removeAttribute("class");
    document.getElementById("secaoInfo").setAttribute("class", "vis");
    //-----
    //chamando as funções com os resultados
    vetorSomaCol();
    somasMaior10();
}
//--------------------------------------

//vetor das somas das colunas maiores que 10
var vetSomas = [];
//-----

//=========================================
//Função para somar cada coluna e inserir as
//somas num vetor
//=========================================
function vetorSomaCol(){
    var c; var l;
    vetSomas = [];
    var soma;
    //achando a soma de cada coluna e inserindo no vetor de somas
    for(c=0;c<5;c++){
        soma = 0;
        for(l=0;l<4;l++){
            soma += elementos[l][c];
        }
        vetSomas.push(soma);
    }
    //-----
}
//-----------------------------------------

//================================
//Função para calcular e mostrar
//as somas das colunas maiores que
//10 do vetor de somas
//================================
function somasMaior10(){
    var i;
    var msg = "";
    //achando as somas maiores que 10
    //e guardando o resultado
    var somaMaior10 = false;
    for(i=0;i<vetSomas.length;i++){
        if(vetSomas[i] > 10){
            msg += "Coluna " + (i+1) + ": " + vetSomas[i] + ".<br>";
            somaMaior10 = true;
        }
    }
    if(!somaMaior10){
        msg = "Nenhuma soma maior que 10."
    }
    //------
    //mostrando resultado
    document.getElementById("msgSomasMaior10").innerHTML = msg;
    //------ 
}
//--------------------------------

