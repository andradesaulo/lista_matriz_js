var produtos = [];
//vetor com os estoques de cada produto em cada armazém
var estoqueArmazens = [];
//-----

//=================================
//Função para cadastrar os produtos
//=================================
function cadastraProdutos(){
    var i;
    var j = 0;
    //conjunto dos inputs do formulário de produtos
    var cadProds = document.querySelectorAll("li p input");
    //-----
    //criando um objeto de produto e inserindo no vetor de produtos
    for(i=0;i<10;i++){
        var prod = new Object();
        prod.nome = cadProds[j].value; 
        j++;
        prod.preco = parseFloat(cadProds[j].value); 
        j++;
        produtos.push(prod);
    }
    //-----
    var msg = "Produtos cadastrados com sucesso";
    //Mostra mensagem de sucesso:
    document.getElementById("msgCadProds").innerHTML = msg;
    //-----
}
//---------------------------------

//==================================
//Função para cadastrar cada 
//estoque de produto em cada armazém
//==================================
function cadastraEstoque(){
    if(produtos.length){
        var l;
        var c;
        //Criando a matriz de estoques
        for(l=0;l<5;l++){
            estoqueArmazens[l] = [];
        }
        //-----
        //Conjunto dos inputs dos estoques
        var inputsTabela = document.querySelectorAll("#tabela input");
        //-----
        var i = 0;
        for(l=0;l<5;l++){
            //inserindo o valor do input no estoque
            for(c=0;c<10;c++){
                //analisando se o valor do input é vazio
                    //se vazio põe o valor do estoque como zero
                    //senão põe o valor do input
                if(inputsTabela[i].value == ""){
                    estoqueArmazens[l][c] = 0;
                    i++;
                }else{
                    estoqueArmazens[l][c] = parseInt(inputsTabela[i].value);
                    i++;
                }
                //-----
            }
            //-----
        }
        //Chamando a função com informações sobre o estoque
        info();
        //----- 
        var msg = "Estoque cadastrado com sucesso";
        //Mensagem de sucesso
        document.getElementById("msgCadEst").innerHTML = msg;
        //-----
    }else{
        var msg = "Cadastre os produtos primeiro";
        document.getElementById("msgCadEst").innerHTML = msg;
    }
}
//----------------------------------

//=============================================
//Função para mostrar as informações do estoque
//=============================================
function info(){
    //deixa as informações visíveis
    document.getElementById("info").removeAttribute("class");
    document.getElementById("info").setAttribute("class", "vis");
    //-----
    //chama as funções de cálculo 
    prodsEstArm();
    quantProdArm();
    precosMaiorEst();
    menorEst();
    custosArm();
    //-----
}
//---------------------------------------------

//===========================================
//Função para calcular e mostrar a quantidade
//total de produtos em cada armazém
//===========================================
function prodsEstArm(){
    //estoque total de apenas 1 armazém
    var armIndiv = 0; 
    //-----
    //vetor com os estoques totais dos armazéns
    var estCadaArm = [];
    //----
    var msg = "";
    for(l=0;l<5;l++){
        armIndiv = 0;
        for(c=0;c<10;c++){
            //somando o estoque do armazém individual
            armIndiv += estoqueArmazens[l][c]; 
            //-----
        }
        //inserindo o estoque do armazém no vetor de estoques totais
        estCadaArm[l] = armIndiv;
        //-----
        //resultado
        msg += "Armazém " + (l+1) + ": " + estCadaArm[l] + " produtos.<br>";
        //-----
    }
    //Mensagem com o resultado:
    document.getElementById("msgProdsEstArm").innerHTML = msg;
    //-----
}
//-------------------------------------------

//=====================================
//Função para calcular e mostrar
//a quantidade estocada de cada produto
//=====================================
function quantProdArm(){
    var c; var l;
    //soma do estoque de cada produto
    var somaProd;
    //-----
    var msg = "";
    //vetor das quantidades totais dos produtos
    var quantProds = [];
    //------
    for(c=0;c<10;c++){
        somaProd = 0;
        for(l=0;l<5;l++){
            //somando o estoque do produto
            somaProd += estoqueArmazens[l][c];
            //-----
        }
        //inserindo o estoque somado nas quantidades totais
        quantProds[c] = somaProd;
        //-----
        //resultado
        msg += "Produto: " + produtos[c].nome + 
               " - Quantidade: " + quantProds[c] + ".<br>";
        //-----
    }
    //mensagem com o resultado
    document.getElementById("msgQuantProdArm").innerHTML = msg;
    //-----
}
//-------------------------------------

//==============================================
//Função para calcular e mostrar os preços 
//dos produtos com maior estoque em cada armazém
//==============================================
function precosMaiorEst(){
    var l; var c;
    var msg = "";
    //produto com maior estoque do armazém
    var prodMaiorEst;
    //-----
    //vetor com os produtos com maior estoque
    var prodsMaiorEst = [];
    //-----
    for(l=0;l<5;l++){
        //variável p/ achar produto com maior estoque do armazém 
            //-iniciando a variável com o primeiro estoque do armazém
        var maiorEst = estoqueArmazens[l][0];
        //-----
        //iniciando a variável com o primeiro produto do vetor de produtos
        prodMaiorEst = produtos[0];
        //-----
        //achando o  produto com maior estoque do armazém
        for(c=0;c<10;c++){
            if(estoqueArmazens[l][c] > maiorEst){
                maiorEst = estoqueArmazens[l][c];
                prodMaiorEst = produtos[c];
                prodMaiorEst.estoque = maiorEst;
            }
        }
        //-----
        //inserindo o produto no vetor prodsMaiorEst
        prodsMaiorEst.push(prodMaiorEst);
        //-----
        //guardando o resultado
        msg += "Armazém " + (l+1) + " - " + prodsMaiorEst[l].nome + " - R$" +
               (prodsMaiorEst[l].preco).toFixed(2).replace(".",",") + ".<br>";
        //-----
    }
    //mensagem com o resultado
    document.getElementById("msgPrecosMaiorEst").innerHTML = msg;
    //-----
}
//----------------------------------------------

//========================================
//Função para calcular e mostrar o produto
//com o menor estoque de todos os armazéns
//========================================
function menorEst(){
    //menor estoque dos armazéns
        //-inicializando com o primeiro valor do estoque
    var menorEst = estoqueArmazens[0][0];
    //-----
    var l; var c;
    var msg = "";
    //produto com o menor estoque
        //-inicializando com o primeiro produto
    var prodMenorEst = produtos[0];
    prodMenorEst.estoque = estoqueArmazens[0][0];
    //-----
    for (l=0;l<5;l++){
        for(c=0;c<10;c++){
            //achando o produto com menor estoque de todos os armazéns
            if(estoqueArmazens[l][c] < menorEst){
                menorEst = estoqueArmazens[l][c];
                prodMenorEst = produtos[c];
                prodMenorEst.estoque = estoqueArmazens[l][c];
            }
            //-----
        }
    }
    //guardando resultado
    msg += prodMenorEst.nome + "- Quantidade: " + prodMenorEst.estoque + ".";
    //-----
    //mostrando resultado
    document.getElementById("msgMenorEst").innerHTML = msg;
    //-----
}
//----------------------------------------

//==============================
//Função para calcular e mostrar
//o custo de cada armazém
//==============================
function custosArm(){
    var l; var c;
    //vetor de custos
    var custosArm = [];
    //-----
    var msg = "";
    for(l=0;l<5;l++){
        //custo do armazém
            //-inicializando com zero
        var custArm = 0;
        //-----
        //somando o custo do armazém
        for(c=0;c<10;c++){
            custArm += produtos[c].preco * estoqueArmazens[l][c];
        }
        //-----
        //inserindo o custo de cada armazém no vetor de custos
        custosArm[l] = custArm;
        //-----
        //guardando resultado
        msg += "Armazém " + (l+1) + " - Custo: R$" + 
               (custosArm[l]).toFixed(2).replace(".",",") + "<br>";
        //-----
    }
    //mostrando a mensagem
    document.getElementById("msgCustosArm").innerHTML = msg;
    //-----
}
//------------------------------