var mat = []
function calcula(){
	var i; var j;
	for(i=0;i<6;i++){
		mat[i] = [];
	}
	for(i=0;i<6;i++){
		for(j=0;j<3;j++){
			mat[i][j] = document.getElementById("l" +i+ "c"+j).value;
		}
	}
	var maior = mat[0][0]; var lMaior = 0; var cMaior = 0;
	var menor = mat[0][0]; var lMenor = 0; var cMenor = 0;
	for(i=0;i<2;i++){
		for(j=0;j<3;j++){
			if((mat[i][j] > maior)){
				maior = mat[i][j];
				lMaior = i; cMaior = j;
			}
			if((mat[i][j] < menor)){
				menor = mat[i][j];
				lMenor = i; cMenor = j;
			}
		}
	}
	document.getElementById("saida1").innerHTML = maior + " em " + lMaior + " x " + cMaior;
	document.getElementById("saida2").innerHTML = menor + " em " + lMenor + " x " + cMenor;

}