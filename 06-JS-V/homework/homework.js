// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }

  Usuario.prototype.saludar = function() {
    return 'Hola, mi nombre es ' + this.nombre;
  };

  return Usuario;

 }

  // No lo hice tan mal, antes habia puesto al metodo opciones dentro de la clase.
  // Me falto el opciones.usuario y demas. Lo del prototype creo que lo intente, pero no me acuerdo como.
  // function Usuario() {
  //       this.usuario = usuario,
  //       this.nombre = nombre,
  //       this.email = email,
  //       this.password = password

  //       saludar(){
  //         return 'Hola, mi nombre es ' this.nombre;
  //     }
  // }
  // var waka = new Usuario(opciones);

  // return Usuario;


  // }

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:

  // Es el unico ejercicio que hice bien.
  Constructor.prototype.saludar = function(){
    return "Hello World!";
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function() {
    var stringInvertida = '';
    for(var i = this.length - 1; i>=0; i--) {
      stringInvertida = stringInvertida + this.charAt(i);
    }
    return stringInvertida;
  };
}

  //Por lo menos hice bien la primera linea. No se me ocurri usar el for.
  //No sabia eso de charAt.
  // String.prototype.reverse = function() {
  //  return this.reverse;
  // }
  //}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

    // *Escribir los argumentos que recibe el constructor*/
    // Crea el constructor:

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Tu código:
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio
      this.detalle = function() {
        return { 
          Nombre: this.nombre,
          Apellido: this.apellido,
          Edad: this.edad,
          Domicilio: this.domicilio
        }
      }
    }
  }

  //AHHHHHHH, hice casi todo bien, solo me falto la otra mitad.
  //class Persona {
  //  constructor(nombre, apellido, edad, domicilio) {
  //    this.nombre = nombre,
  //    this.apellido = apellido,
  //    this.edad = edad,
  //    this.domicilio = domicilio
  //  }
  //  detalle() {
  // 
  //  }
  //}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  const persona = new Persona(nombre, apellido, edad, dir);
  return persona;
  //Este ejercicio no lo habia hecho; lo pense, pero necesitaba tener bien el ejercicio de arriba si o si.
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function() {
    return this.nombre + ", " + this.edad + " años";
  }
  //X2 Este ejercicio no lo habia hecho; lo pense, pero necesitaba tener bien el ejercicio de arriba si o si.
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
