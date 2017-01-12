import {
	myindividual
} from "./module.js";

import {
	mydata
} from "./data.js";

let _ = require('lodash');

_.mixin({
	'moreMap': function (someParam) {
		return _.partial(_.ary(_.pick, 2), _, someParam);
	}
});

class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
		if (true) {
			//Como hemos dicho, let es la nueva forma de declarar variables de bloque, sólo existirán dentro del bloque que las contenga y no contaminará nunca nuestro código a su alrededor.
			let miVar = "Hola mundo";
			console.log('Valor de miVar: ' + miVar);
		}
		//Como no esta dentro del ámbito dará undefined.
		//console.log('Valor de miVar: '+miVar);
	}

	static miMetodo() {
		return 'Hola Mundo';
	}

	get myName() {
		return this.nombre;
	}

	set myName(newName) {
		if (newName) {
			this.nombre = newName;
		}
	}
}

class Desarrollador extends Persona {
	constructor(nombre, edad, cargo) {
		super(nombre, edad);
		this.cargo = cargo;
	}

	presentarse() {
		return super.presentarse() + ' y soy desarrollador ' + this.cargo;
	}
}

class Concat {
	concatBody(string) {
		$('#test-zone').append('<p>' + string + '</p>');
	}
}

function hacerAlgoPromesa(tarea, time) {
	function haciendoalgo(resolve, reject) {
		//console.log('Hacer ' + tarea + ' que ocupa un tiempo...');
		let myConcat = new Concat();
		myConcat.concatBody('Hacer ' + tarea + ' que ocupa un tiempo...');
		setTimeout(resolve, (1000 * time));
	}
	return new Promise(haciendoalgo);
}

$(document).ready(function () {
	let Sergio = new Persona('Sergio', 22);
	let myConcat = new Concat();
	myConcat.concatBody('El nombre actual desde Sergio es: ' + Sergio.myName);

	myConcat.concatBody('Método static llamado desde la misma clase: ' + Persona.miMetodo());
	Sergio.myName = 'Carlos';
	myConcat.concatBody('El nombre actual es: ' + Sergio.myName);

	const MIVARIABLE = 1;
	myConcat.concatBody('El valor de mi variables const (que tiene que asignarse en su declaración) es: ' + MIVARIABLE);

	/*hacerAlgoPromesa('Tarea 1', 1)
		.then(function () {
			return hacerAlgoPromesa('Tarea 2', 2);
		})
		.then(() => myindividual.add('Test para ver si funciona la importación de la instancia'));*/

	let myfilter = _.filter(mydata, function (o) {
		return o.id <= 3;
	});
	console.log(myfilter);
	myindividual.add('<b>Filtrados los 3 primeros (_.filter) </b><br />' + JSON.stringify(myfilter));

	let mymap = _.map(mydata, 'first_name');
	myindividual.add('<br /><b>Mapeo de User: (_.map)</b><br />' + JSON.stringify(mymap));

	let myorder = _.map((_.orderBy(mydata, ['first_name'])), _.moreMap(['first_name', 'ip_address']));
	myindividual.add('<br /><b>Mapeo de IP ordenada: (_orderBy && _.map)</b><br />'+JSON.stringify(myorder, null, 2));
});
