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
			img.setAttribute('style', 'transform:rotate(360deg)')
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
var p = 0;
var btnRotarDerecha = document.getElementById('rotarDerecha')
btnRotarDerecha.onclick = function(){
	if(p == 1){contadorRotando++;
		p = 0;
	}
	if(contadorRotando == 4){
		contadorRotando = 0;
	}
	//console.log(contadorRotando);
	rotar(contadorRotando);

	contadorRotando++;

}

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
var btnAvanzar = document.getElementById('avanzar');
btnAvanzar.onclick = function(){
	var idTagPadre = document.getElementById('img').parentNode.id;
	idTag = idTagPadre.split('');
	if(idTag.length == 3){
		idTag[1] = idTag[1]+""+idTag[2];
	}
	(idTagPadre == '916')?alert('Ganaste'):console.log(idTagPadre)
	
	var derecha   = idTag[0] +""+ (parseInt(idTag[1])+1);
	var izquierda = idTag[0] +""+ (parseInt(idTag[1]) - 1);
	var arriba    = (parseInt(idTag[0]) - 1) +""+ idTag[1];
	var abajo     = (parseInt(idTag[0]) + 1) +""+ idTag[1];

	var estilo    = document.getElementById('img').style.transform;

	var derechaValor   = document.getElementById(derecha).textContent;
	var izquierdaValor = document.getElementById(izquierda).textContent;
	var arribaValor    = document.getElementById(arriba).textContent;
	var abajoValor     = document.getElementById(abajo).textContent;
	var direccion;
	
	switch(estilo){
		case 'rotate(360deg)':

			if(arribaValor != '*'){
				direccion = arriba;
				removeImg(direccion, idTagPadre, estilo);
			}
			break;
		case 'rotate(180deg)':
			if(abajoValor != '*'){
				direccion = abajo;
				removeImg(direccion, idTagPadre, estilo);
			}
			
			break;
		case 'rotate(270deg)':
			if(izquierdaValor != '*'){
				direccion = izquierda;
				removeImg(direccion, idTagPadre, estilo);
			}
			break;
		case 'rotate(90deg)' :
			if(derechaValor != '*'){
				
				direccion = derecha;
				removeImg(direccion, idTagPadre, estilo);
			}
			break;
	}
		
}

function removeImg(direccion, idTagPadre, estilo){
	//-- Remove imagen
	var contenedorImg = document.getElementById(idTagPadre);
				contenedorImg.removeChild(contenedorImg.childNodes[1]);
	var img = document.createElement('img');
				img.setAttribute('src', 'assets/icn/flecha_arriba.png');
				img.setAttribute('id', 'img');
				img.setAttribute('style', 'transform:'+estilo);
				//var value_TD = document.createTextNode(img);
				document.getElementById(direccion).appendChild(img);
}
function caminaSolito(){
	var idTagPadre = document.getElementById('img').parentNode.id;
	idTag = idTagPadre.split('');
	if(idTag.length == 3){
		idTag[1] = idTag[1]+""+idTag[2];
	}
	(idTagPadre == '916')?alert('Ganaste'):console.log(idTagPadre)
	
	var derecha   = idTag[0] +""+ (parseInt(idTag[1])+1);
	var izquierda = idTag[0] +""+ (parseInt(idTag[1]) - 1);
	var arriba    = (parseInt(idTag[0]) - 1) +""+ idTag[1];
	var abajo     = (parseInt(idTag[0]) + 1) +""+ idTag[1];

	var estilo    = document.getElementById('img').style.transform;

	var derechaValor   = document.getElementById(derecha).textContent;
	var izquierdaValor = document.getElementById(izquierda).textContent;
	var arribaValor    = document.getElementById(arriba).textContent;
	var abajoValor     = document.getElementById(abajo).textContent;
	var direccion;
	console.log(izquierdaValor+'*'+arribaValor);
	if(izquierdaValor == '*' && arribaValor == "_"){
		direccion = arriba;
		removeImg(direccion, idTagPadre, estilo);
	}
	if(arribaValor == "*" && derechaValor=='_'){
		direccion = derecha;
		removeImg(direccion, idTagPadre, estilo);
	}
	if (derechaValor=='*' && abajoValor=='_') {
		direccion = abajo;
		removeImg(direccion, idTagPadre, estilo);
	}
	if (abajoValor == '*' && izquierdaValor=='_') {
		direccion = arriba;
		removeImg(direccion, idTagPadre, estilo);
	}

}