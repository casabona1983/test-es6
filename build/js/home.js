'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Persona = function () {
	function Persona(nombre, edad) {
		_classCallCheck(this, Persona);

		this.nombre = nombre;
		this.edad = edad;
		if (true) {
			//Como hemos dicho, let es la nueva forma de declarar variables de bloque, sólo existirán dentro del bloque que las contenga y no contaminará nunca nuestro código a su alrededor.
			var miVar = "Hola mundo";
			console.log('Valor de miVar: ' + miVar);
		}
		//Como no esta dentro del ámbito dará undefined.
		//console.log('Valor de miVar: '+miVar);
	}

	_createClass(Persona, [{
		key: 'myName',
		get: function get() {
			return this.nombre;
		},
		set: function set(newName) {
			if (newName) {
				this.nombre = newName;
			}
		}
	}], [{
		key: 'miMetodo',
		value: function miMetodo() {
			return 'Hola Mundo';
		}
	}]);

	return Persona;
}();

var Desarrollador = function (_Persona) {
	_inherits(Desarrollador, _Persona);

	function Desarrollador(nombre, edad, cargo) {
		_classCallCheck(this, Desarrollador);

		var _this = _possibleConstructorReturn(this, (Desarrollador.__proto__ || Object.getPrototypeOf(Desarrollador)).call(this, nombre, edad));

		_this.cargo = cargo;
		return _this;
	}

	_createClass(Desarrollador, [{
		key: 'presentarse',
		value: function presentarse() {
			return _get(Desarrollador.prototype.__proto__ || Object.getPrototypeOf(Desarrollador.prototype), 'presentarse', this).call(this) + ' y soy desarrollador ' + this.cargo;
		}
	}]);

	return Desarrollador;
}(Persona);

var Concat = function () {
	function Concat() {
		_classCallCheck(this, Concat);
	}

	_createClass(Concat, [{
		key: 'concatBody',
		value: function concatBody(string) {
			$('#test-zone').append('<p>' + string + '</p>');
		}
	}]);

	return Concat;
}();

function hacerAlgoPromesa(tarea, time) {
	function haciendoalgo(resolve, reject) {
		//console.log('Hacer ' + tarea + ' que ocupa un tiempo...');
		var myConcat = new Concat();
		myConcat.concatBody('Hacer ' + tarea + ' que ocupa un tiempo...');
		setTimeout(resolve, 1000 * time);
	}
	return new Promise(haciendoalgo);
}

$(document).ready(function () {
	var Sergio = new Persona('Sergio', 22);
	var myConcat = new Concat();
	myConcat.concatBody('El nombre actual desde Sergio es: ' + Sergio.myName);

	myConcat.concatBody('Método static llamado desde la misma clase: ' + Persona.miMetodo());
	Sergio.myName = 'Carlos';
	myConcat.concatBody('El nombre actual es: ' + Sergio.myName);

	var MIVARIABLE = 1;
	myConcat.concatBody('El valor de mi variables const (que tiene que asignarse en su declaración) es: ' + MIVARIABLE);
	hacerAlgoPromesa('Tarea 1', 1).then(function () {
		return hacerAlgoPromesa('Tarea 2', 2);
	}).then(function () {
		return hacerAlgoPromesa('Tarea 3', 3);
	}).then(function () {
		return hacerAlgoPromesa('Tarea 4', 4);
	});
});