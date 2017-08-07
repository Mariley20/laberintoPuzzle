var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];
var canvas = [];

for (var i = 0; i < mapa.length; i++) {
	var pared = mapa[i].split("");
	canvas.push(pared);
	//console.log(pared)
	var tag_TR = document.createElement('tr');
	for (var j = 0; j < pared.length; j++) {
		var tag_TD = document.createElement('td');
		var texto = document.createTextNode(pared[j])
		tag_TD.setAttribute('id', i+""+j);
		tag_TD.appendChild(texto);
		var clase = '';
		if(pared[j] == "*"){
			clase = 'pared';
		}else if(pared[j] == "_"){
			clase = 'camino    ';
		}else if (pared[j] == "o"){
			clase = 'inicioFin';
			var img = document.createElement('img');
			img.setAttribute('src', 'assets/icn/flecha_arriba.png');
			img.setAttribute('id', 'img');
			//var value_TD = document.createTextNode(img);
			tag_TD.appendChild(img);

		}else{
			clase = 'inicioFin';
		}
		tag_TD.setAttribute('class', clase);
		tag_TR.appendChild(tag_TD);
	}
	laberinto.appendChild(tag_TR);
}

var contadorRotando = 0;
var btnRotarDerecha = document.getElementById('rotarDerecha')
btnRotarDerecha.onclick = function(){
	if(p == 1){contadorRotando++;
		p = 0;
	}
	if(contadorRotando == 4){
		contadorRotando = 0;
	}
	console.log(contadorRotando);
	rotar(contadorRotando);

	contadorRotando++;

}
var p = 0;
var btnRotarIzquierda = document.getElementById('rotarIzquierda');
btnRotarIzquierda.onclick = function(){
	var x=0;
	if(p == 0){
		(contadorRotando == 0)?p = 1:contadorRotando--; 
		p = 1;
	}

	if(contadorRotando == 0){
		contadorRotando = 4;
	}
	contadorRotando--;
	console.log(contadorRotando)
	rotar(contadorRotando);
	
	//
}

function rotar(c){
	switch(c){
		case 0:
			var grados = "rotate(90deg)"; 
			//c++;
			break;
		case 1: 
			var grados = "rotate(180deg)";
			break;
		case 2: 
			var grados = "rotate(270deg)";
			break;
		case 3: 
			var grados = "rotate(360deg)";
			break;
	}
	document.getElementById('img').style.transform = grados;
}
