//declara matriz
var mat = []
function calcula(){
	//cria a matriz
	var i;
	for(i=0;i<3;i++){
		mat[i] = [];
	}
	//leitura dos dados
	for(i=0;i<3;i++){
		for(j=0;j<5;j++){
			mat[i][j] = document.getElementById("l"+i+"c"+j).value;
		}
	}
	//processamento
	var qtde = 0;
	for(i=0;i<3;i++){
		for(j=0;j<5;j++){
			if((mat[i][j] >= 15)  && (mat[i][j] <= 20)){
				qtde = qtde + 1;
			}
		}
	}
	document.getElementById("saida").innerHTML = qtde;
}