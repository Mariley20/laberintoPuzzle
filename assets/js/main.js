var mapa = [
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

//-- crea el laberinto
for (var i = 0; i < mapa.length; i++) {
    var pared = mapa[i].split("");

    var tag_TR = document.createElement('tr');
    for (var j = 0; j < pared.length; j++) {
        var tag_TD = document.createElement('td');
        var texto = document.createTextNode(pared[j])
        tag_TD.setAttribute('id', i + "" + j);
        tag_TD.appendChild(texto);
        var clase = '';
        if (pared[j] == "*") {
            clase = 'pared';
        } else if (pared[j] == "_") {
            clase = 'camino    ';
        } else if (pared[j] == "o") {
            clase = 'inicioFin';
            var img = document.createElement('img');
            img.setAttribute('src', 'assets/icn/flecha_arriba.png');
            img.setAttribute('id', 'img');
            img.setAttribute('style', 'transform:rotate(360deg)');
            //var value_TD = document.createTextNode(img);
            tag_TD.appendChild(img);
        } else {
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
btnRotarDerecha.onclick = function () {
    //huella pulso tecla izquierda
    if (p == 1) {
        contadorRotando++;
        p = 0;
    }
    //reinicializa el contador (img dio vuelta completa)
    if (contadorRotando == 4) {
        contadorRotando = 0;
    }
    
    rotar(contadorRotando);

    contadorRotando++;

}

var btnRotarIzquierda = document.getElementById('rotarIzquierda');
btnRotarIzquierda.onclick = function () {
   //huella que pulso boton derecho
    if (p == 0) {
        (contadorRotando == 0) ? p = 1: contadorRotando--;
        p = 1;
    }

    if (contadorRotando == 0) {
        contadorRotando = 4;
    }
    contadorRotando--;
    rotar(contadorRotando);
}

function rotar(c) {
    switch (c) {
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
btnAvanzar.onclick = function () {
    var idTagPadre = document.getElementById('img').parentNode.id;
    var idTag = idTagPadre.split('');

    if (idTag.length == 3) {
        idTag[1] = idTag[1] + "" + idTag[2];
    }
    (idTagPadre == '916') ? alert('Ganaste'): console.log(idTagPadre)

    //-- posibles movimientos
    var derecha = idTag[0] + "" + (parseInt(idTag[1]) + 1);
    var izquierda = idTag[0] + "" + (parseInt(idTag[1]) - 1);
    var arriba = (parseInt(idTag[0]) - 1) + "" + idTag[1];
    var abajo = (parseInt(idTag[0]) + 1) + "" + idTag[1];

    // direccion 
    var estilo = document.getElementById('img').style.transform;

    // -- contenido de los posibles movimientos
    var derechaValor = document.getElementById(derecha).textContent;
    var izquierdaValor = document.getElementById(izquierda).textContent;
    var arribaValor = document.getElementById(arriba).textContent;
    var abajoValor = document.getElementById(abajo).textContent;
    var direccion;

    //de acuerdi a la direccion avanzar (derecha, izquierda, arriba, abajo)
    switch (estilo) {
        case 'rotate(360deg)':
            //avanza para ARRIBA
            if (arribaValor != '*') {
                direccion = arriba;
                removeImg(direccion, idTagPadre, estilo);
            }
            break;
        case 'rotate(180deg)':
            //Avanza para bajo
            if (abajoValor != '*') {
                direccion = abajo;
                removeImg(direccion, idTagPadre, estilo);
            }
            break;
        case 'rotate(270deg)':
            //avanza a la izquierda
            if (izquierdaValor != '*') {
                direccion = izquierda;
                removeImg(direccion, idTagPadre, estilo);
            }
            break;
        case 'rotate(90deg)':
            // avanza a la derecha
            if (derechaValor != '*') {
                direccion = derecha;
                removeImg(direccion, idTagPadre, estilo);
            }
            break;
    }
}

// funcion elimina la img de la celda actual para avanzar a la sgte celda
function removeImg(direccion, idTagPadre, estilo) {
    //-- Remove imagen
    var contenedorImg = document.getElementById(idTagPadre);
    contenedorImg.removeChild(contenedorImg.childNodes[1]);
    
    //crea hijo img siguiente celda
    var img = document.createElement('img');
    img.setAttribute('src', 'assets/icn/flecha_arriba.png');
    img.setAttribute('id', 'img');
    img.setAttribute('style', 'transform:' + estilo);
    document.getElementById(direccion).appendChild(img);
}


///-----------
function caminaSolito() {
    var idTagPadre = document.getElementById('img').parentNode.id;
    var idTag = idTagPadre.split('');

    if (idTag.length == 3) {
        idTag[1] = idTag[1] + "" + idTag[2];
    }
    var estilo = document.getElementById('img').style.transform;
    switch (estilo) {
        case 'rotate(360deg)':
            //avanza para ARRIBA
            var izq_1 = idTag[0]+""+(parseInt(idTag[1]) - 1);
            var izq_2 = (parseInt(idTag[0]) - 1)+""+(parseInt(idTag[1]) - 1);
            subearriba = (parseInt(idTag[0]) - 1)+""+idTag[1];
            var izq_V1 = document.getElementById(izq_1).textContent;
            var izq_V2 = document.getElementById(izq_2).textContent;
            var arribaValor = document.getElementById(subearriba).textContent;
    
            if((izq_V1 == "*" || izq_V1=='_') && izq_V2 == "*" && arribaValor == "_"){
                removeImg(subearriba, idTagPadre, estilo);
            }else if(izq_V1 == "*" && izq_V2 == "_" && arribaValor == "_"){
                estilo = "rotate(270deg)";
                removeImg(subearriba, idTagPadre, estilo);
            }
            break;
        case 'rotate(90deg)':
            //Avanza para bajo
            izq_1 = (parseInt(idTag[0]) - 1) +""+ idTag[1];
            izq_2 = (parseInt(idTag[0]) - 1) +""+ (parseInt(idTag[1]) + 1);
            subeDerecha = idTag[0] +""+ (parseInt(idTag[1]) - 1);
            var izq_V1 = document.getElementById(izq_1).textContent;
            var izq_V2 = document.getElementById(izq_2).textContent;
            var derechaValor = document.getElementById(subeDerecha).textContent;
            if((izq_V1 == "*" || izq_V1 == "_") && izq_V2 == "*" && derechaValor == "_"){
                removeImg(subeDerecha, idTagPadre, estilo);
            }else if(izq_V1 == "*" && izq_V2 == "_" && derechaValor == "_"){
                estilo = "rotate(360deg)";
                removeImg(subeDerecha, idTagPadre, estilo);
            }
            
            break;
        case 'rotate(270deg)':
            //avanza a la izquierda
            izq_1 = (parseInt(idTag[0]) + 1) +""+ idTag[1];
            izq_2 = (parseInt(idTag[0]) + 1) +""+ (parseInt(idTag[1]) - 1);
            subeIzquierda = idTag[0] +""+ (parseInt(idTag[1]) - 1);
            var izq_V1 = document.getElementById(izq_1).textContent;
            var izq_V2 = document.getElementById(izq_2).textContent;
            var izquierdaValor = document.getElementById(subeIzquierda).textContent;
            if((izq_V1 == "*" || izq_V1 == "_") && izq_V2 == "*" && izquierdaValor == "_"){
                removeImg(subeIzquierda, idTagPadre, estilo);
            }else if(izq_V1 == "*" && izq_V2 == "_" && izquierdaValor == "_"){
                estilo = "rotate(180deg)";
                removeImg(subeIzquierda, idTagPadre, estilo);
            }
            
            break;
        case 'rotate(180deg)':
            // avanza a la derecha
            izq_1 = idTag[0] +""+ (parseInt(idTag[1]) + 1);
            izq_2 = (parseInt(idTag[0]) + 1) +""+ (parseInt(idTag[1]) + 1);
            bajar = (parseInt(idTag[0]) + 1) +""+ idTag[1];
            var izq_V1 = document.getElementById(izq_1).textContent;
            var izq_V2 = document.getElementById(izq_2).textContent;
            var bajarCelda = document.getElementById(bajar).textContent;
            if((izq_V1 == "*" || izq_V1 == "_") && izq_V2 == "*" && bajarCelda == "_"){
                removeImg(bajar, idTagPadre, estilo);
            }else if(izq_V1 == "*" && izq_V2 == "_" && bajarCelda == "_"){
                estilo = "rotate(90deg)";
                removeImg(bajar, idTagPadre, estilo);
            }
            
            break;
    }
}
