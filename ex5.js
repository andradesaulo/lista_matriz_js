var vet = [];
function insere(){
	var objeto = new Object();
	objeto.codigo = documentgetElementById("codigo").value;
	objeto.qtde = documentgetElementById("qtde").value;
	objeto.valor = documentgetElementById("valor").value;
	objeto.descricao = documentgetElementById("descricao").value;
	vet.push(objeto);
	document.getElementById("aviso").innerHTML = objeto.codigo + " inserido com sucesso ";
	// chama a ordenação
	ordena();
}
function ordena(){
	/*for(i=0;i<5;i++)
		for(j=i+1;j<5;j++)
			if(vet[i]>vet[i]){
				troca vet[i] e vet[j]
			}
	var aux;
	aux = vet[i];
	vet[i] = vet[j]
	vet[j] = aux*/
	var i,j;
	var aux = new Object();
	for(i=0;i<vet.length;i++){
		for(j=i+1;j<vet.length;j++){
			if(vet[i].codigo > vet[j].codigo){
				aux = vet[i];
				vet[i] = vet[j];
				vet[j] = aux; 
			}
		}
	}
	//mostra resultado
	mostra();
}
function mostra(){
	for(var i=0;i<vet.length;i++){
		alert(vet[i].codigo);
	}
}