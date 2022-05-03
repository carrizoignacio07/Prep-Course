// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  return nombre[0].toUpperCase() + nombre.slice(1);

  // No tenia idea de usar un arreglo. No conocia toUpperCase y menos el .slice
  // return nombre.capitalize();
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

  cb();

  // No entendi muy bien el ejercicio, crei que me faltaban datos. Fin.
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  return cb(n1, n2);
  // No entendi el ejercicio.
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  // Primera opcion
  // var numeros = [1,2,3,4,5]
  // var suma = 0;
  // for(var i = 0; i < numeros.length; i++) {
  //   suma = suma + numeros[i];
  // }
  // cb(suma);
  
  var sumaTotal = numeros.reduce(function(acc, curr) {
    return acc + curr;
  },0);
  cb(sumaTotal);

  //  numeros.forEach(function(){
  //  cb(numeros);
  //  })
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  
  for(var i = 0; i < array.length; i++) {
    cb(array[i]);
  }

  //No tenia idea, crei que tenia que usar el forEach pero no sabia como.
  //Me cuesta mucho este tema, mas que el prototype; voy a tener que practicar mucho.
  // array.forEach(function (cb) {
  // })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  var nuevoArray = array.map(function(el) {
    return cb(el);
  });
  return nuevoArray;

  // var array = [1,2,3,4,5]
  // function cb (e) {console.log(e)}
  // nuevoarray = []
  // var nuevoArray = [];
  // for(var i = 0; i < array.length; i++) {
  //   nuevoArray.push(cb(array[i]));
  //   nuevoArray[i] = cb(array[i]);
  // }

  //No logro entender que tengo que hacer, o como.
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  var nuevoArray = [];
  for(let i = 0; i<array.length; i++) {
    if(array[i][0] === "a") {
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;

  //No logro entender que tengo que hacer, o como.
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
