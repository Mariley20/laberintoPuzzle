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

for (var i = 0; i < mapa.length; i++) {
	var pared = mapa[i].split("");
	var tag_TR = document.createElement('tr');
	for (var j = 0; j < pared.length; j++) {
		var tag_TD = document.createElement('td');
		var texto = document.createTextNode(pared[j])
		tag_TD.appendChild(texto);
		var clase = '';
		if(pared[j] == "*"){
			clase = 'pared';
		}else if(pared[j] == "_"){
			clase = 'camino    ';
		}else{
			clase = 'inicioFin'
		}
		tag_TD.setAttribute('class', clase);
		tag_TR.appendChild(tag_TD);
	}
	laberinto.appendChild(tag_TR);
}

var lastDownTarget, canvas;
window.onload = function() {
    canvas = document.getElementById('laberinto');

    document.addEventListener('mousedown', function(event) {
        lastDownTarget = event.target;
        alert('mousedown');
    }, false);

    canvas.addEventListener('keydown', function(event) {
        //if(lastDownTarget == canvas) {
            alert('keydown');
        
    }, false);
}