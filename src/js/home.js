class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
		if (true) {
			//Como hemos dicho, let es la nueva forma de declarar variables de bloque, sólo existirán dentro del bloque que las contenga y no contaminará nunca nuestro código a su alrededor.
			let miVar = "Hola mundo";
			console.log('Valor de miVar: '+miVar);
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

$(document).ready(function () {
	var Sergio = new Persona('Sergio', 22);
	var myConcat = new Concat();
	myConcat.concatBody('El nombre actual desde Sergio es: ' + Sergio.myName);

	myConcat.concatBody('Método static llamado desde la misma clase: ' + Persona.miMetodo());
	Sergio.myName = 'Carlos';
	myConcat.concatBody('El nombre actual es: ' + Sergio.myName);

});
