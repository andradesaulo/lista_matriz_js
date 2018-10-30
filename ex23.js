var mat = [];
//tamanho da matriz
const l = 3;
const c = 4;

//*=====função para preencher a matriz e mostrar mensagem de sucesso============
function preencheMatriz(){
    for( var i = 0; i < l; i++ )
        mat[i] = [];
    //armazenando os inputs da tabela
    var valsMat = document.querySelectorAll( "table input" );
    var k = 0;
    //preenchendo a matriz
    for( var i = 0; i < l; i++ ){
        for( var j = 0; j < c; j++ ){
            mat[i][j] = parseInt( valsMat[k].value );
            k++;
        }
    }
    var resp = "Matriz preenchida com sucesso!";
    document.getElementById("rPreenche").innerHTML = resp;
}
//*==============================================================fim função=====
  
//*=====Função para calcular e mostrar quantidade de números pares==============
function quantPares(){
    //vê se a matriz está preenchida
    //senão mostra mensagem de erro
    try{
        var quant = 0;
        for( var i = 0; i < l; i++ ){
            for( var j = 0; j < c; j++ ){
                //vê se o número é par
                if((mat[i][j] != 0)&&(mat[i][j] % 2 == 0))
                    quant++;
            }
        }
        var resp = quant + " números pares.";
        document.getElementById( "rQuantPares" ).innerHTML = resp;
    }catch(error){
        var resp = "Preencha a matriz primeiro!";
        document.getElementById("rQuantPares").innerHTML = resp;
    }
}
//*==============================================================fim função=====

//*=====Função para calcular e mostrar a soma dos números ímpares===============
function somaImpares(){ 
    //vê se a matriz está preenchida
    //senão mostra mensagem de erro
    try{
        var soma = 0;
        for( var i = 0; i < l; i++ ){
            for( var j = 0; j < c; j++ ){
                //vê se o número é ímpar
                if(mat[i][j] % 2 != 0)
                    soma += mat[i][j];
            }
        }
        var resp = "A soma dos números ímpares é " + soma + ".";
        document.getElementById( "rSomaImpares" ).innerHTML = resp;
    }catch(error){
        var resp = "Preencha a matriz primeiro!";
        document.getElementById("rSomaImpares").innerHTML = resp;
    }
}
//*==============================================================fim função=====

//*=====Função para calcular e mostrar a média de todos os números==============
function media(){
    //vê se a matriz está preenchida
    //senão mostra mensagem de erro
    try {
        var soma = 0;
        for( var i = 0; i < l; i++ ){
            for( var j = 0; j < c; j++ ){
                soma += mat[i][j];
            }
        }
        var media =  soma / (l*c);
        var resp = "A média dos números é " + Math.round(media * 100)/100 + ".";
        document.getElementById( "rMedia" ).innerHTML = resp;
    } catch(error){
        var resp = "Preencha a matriz primeiro!";
        document.getElementById("rMedia").innerHTML = resp;
    }
}
//*==============================================================fim função=====

//*=====Função para carregar a tabela no HTML===================================
function carregaPagina(){
    var tabela = "";
    for(var i = 0; i < l; i++){
        tabela += "<tr>";
        for(var j = 0; j < c; j++){
            tabela += 
                `<td>
                    <p>
                        <input type="number" required>
                    </p>
                </td>`;
        }
        tabela += "</tr>";
    }
    document.getElementById("tabela").innerHTML = tabela;
}
//*==============================================================fim funcao=====