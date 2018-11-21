//declara matriz
var mat = []
function calcula(){
	//cria a matriz
	var i;
	for(i=0;i<2;i++){
		mat[i] = [];
	}
	//leitura dos dados
	for(i=0;i<2;i++){
		for(j=0;j<4;j++){
			mat[i][j] = parseInt(document.getElementById("l"+i+"c"+j).value);
		}
	}
	//processamento
	var qtde = 0;
	for(i=0;i<2;i++){
		for(j=0;j<4;j++){
			if((mat[i][j] >= 12)  && (mat[i][j] <= 20)){
				qtde = qtde + 1;
			}
		}
	}
	document.getElementById("saida").innerHTML = qtde;
	var par = 0;
	var qtdepar = 0;
	for(i=0;i<2;i++){
		for(j=0;j<4;j++){
			if(mat[i][j] % 2 == 0){
				par+= mat[i][j];
				qtdepar += 1;
			}
		}
	}
	media = par/qtdepar;
	document.getElementById("media").innerHTML = media;
}