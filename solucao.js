var fs = require('fs');
var arqv = process.argv[2];
var lista = JSON.parse(fs.readFileSync(arqv));
var colchetes = [];
lst(lista.numeros);

function lst(numeros)							{
	var z;
	var a = numeros[0];
    for (var h = 0; h < numeros.length ; h++) {
		if(((numeros[h])+1) != (numeros[h+1])){
			z = numeros[h];
			colchetes[h] = "["+ a + "-" + z +"]";
			a = numeros[h+1];
		}
	}
}
console.log(colchetes.toString().replace(/,/g, ""));